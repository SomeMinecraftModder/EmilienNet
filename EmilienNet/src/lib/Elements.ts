import { writable } from 'svelte/store';

export const editor_elements = writable([{ type: 'p', content: 'test' }]);
export const editor_title = writable('');
