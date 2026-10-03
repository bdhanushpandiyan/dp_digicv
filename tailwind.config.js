/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-tint": "#adc6ff",
                "secondary": "#44e2cd",
                "tertiary-fixed": "#e0e3e5",
                "surface-container-highest": "#2d3449",
                "outline": "#8c909f",
                "outline-variant": "#424753",
                "inverse-primary": "#005ac1",
                "on-tertiary-fixed-variant": "#444749",
                "secondary-fixed-dim": "#3cddc7",
                "on-surface-variant": "#c2c6d5",
                "inverse-surface": "#dae2fd",
                "error-container": "#93000a",
                "surface-container-lowest": "#060e20",
                "surface": "#0b1326",
                "on-primary-container": "#00285c",
                "on-secondary-fixed": "#00201c",
                "on-tertiary-fixed": "#191c1e",
                "on-primary-fixed": "#001a41",
                "on-tertiary-container": "#272a2c",
                "on-surface": "#dae2fd",
                "on-secondary-container": "#004d44",
                "primary": "#adc6ff",
                "primary-fixed": "#d8e2ff",
                "tertiary-container": "#8e9193",
                "tertiary": "#c4c7c9",
                "on-error": "#690005",
                "secondary-fixed": "#62fae3",
                "surface-container": "#171f33",
                "on-primary-fixed-variant": "#004494",
                "inverse-on-surface": "#283044",
                "background": "#0b1326",
                "surface-variant": "#2d3449",
                "surface-container-high": "#222a3d",
                "surface-bright": "#31394d",
                "on-tertiary": "#2d3133",
                "surface-dim": "#0b1326",
                "error": "#ffb4ab",
                "tertiary-fixed-dim": "#c4c7c9",
                "on-secondary": "#003731",
                "on-background": "#dae2fd",
                "secondary-container": "#03c6b2",
                "on-primary": "#002e69",
                "on-secondary-fixed-variant": "#005047"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "unit": "8px",
                "margin": "64px",
                "gutter": "32px",
                "container-max": "1440px"
            },
            "fontFamily": {
                "label-sm": ["Space Grotesk"],
                "body-lg": ["Inter"],
                "headline-xl": ["Space Grotesk"],
                "body-md": ["Inter"],
                "headline-md": ["Space Grotesk"]
            },
            "fontSize": {
                "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "300"}],
                "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "headline-md": ["32px", {"lineHeight": "1.2", "fontWeight": "400"}]
            }
        },
    },
}
