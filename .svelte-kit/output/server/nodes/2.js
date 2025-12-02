

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BDA3FLp2.js","_app/immutable/chunks/DZT8HU3I.js","_app/immutable/chunks/BYqBJ6lq.js","_app/immutable/chunks/bUpB0jF6.js"];
export const stylesheets = [];
export const fonts = [];
