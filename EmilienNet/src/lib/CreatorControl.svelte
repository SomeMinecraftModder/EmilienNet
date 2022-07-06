<script lang="ts">
	import { Button, ButtonGroup } from 'sveltestrap';
	import { editor_elements } from './Elements';

	let elements: { type: string; content: string }[];

	editor_elements.subscribe((value) => {
		elements = value;
	});

	function add_el(type: string, content: string) {
		editor_elements.set([...elements, { type: type, content: content }]);
	}

	function add_p() {
		add_el('p', '?');
	}

	function add_h1() {
		add_el('h1', '?');
	}
</script>

<ButtonGroup>
	<Button on:click={add_p}>Add text</Button>
	<Button on:click={add_h1}>Add title</Button>
</ButtonGroup>
