import { writable } from 'svelte/store';

export const editor_elements = writable([{ type: 'p', content: 'test', info: {} }]);
export const editor_title = writable('');
