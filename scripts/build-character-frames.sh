#!/usr/bin/env bash
# Rebuilds the production character frames (1280x720 WebP) from the 1920x1080
# originals in source-assets/character-1920/.
#
# The originals carry a small sparkle watermark in the bottom-right background
# (about x=1702..1776, y=863..937 at 1920x1080), well clear of the character.
# ffmpeg's delogo filter interpolates that rectangle from the surrounding red
# background before the frames are scaled down. Nothing else is modified.
#
# Usage: scripts/build-character-frames.sh   (requires ffmpeg with libwebp)
set -euo pipefail

SRC="source-assets/character-1920"
DST="public/character"
VF="delogo=x=1690:y=851:w=98:h=98,scale=1280:720:flags=lanczos"

encode() {
  ffmpeg -v error -y -i "$1" -vf "$VF" -c:v libwebp -quality 90 -compression_level 6 -preset picture "$2"
}

mkdir -p "$DST/frames"
encode "$SRC/center.webp" "$DST/center.webp"
for i in $(seq 0 63); do
  n=$(printf '%03d' "$i")
  encode "$SRC/frames/frame-$n.webp" "$DST/frames/frame-$n.webp"
done
echo "Wrote $(ls "$DST/frames" | wc -l) frames + center to $DST"
