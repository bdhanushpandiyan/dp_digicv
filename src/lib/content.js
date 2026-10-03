/** List/description content may be a plain string or { text, placeholder }. */
export const asItem = (value) => (typeof value === 'string' ? { text: value } : value);
