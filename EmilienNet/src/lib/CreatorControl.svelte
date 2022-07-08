<script lang="ts">
	import { Button, ButtonGroup, Icon } from 'sveltestrap';
	import { editor_elements } from './Elements';

	let elements: { type: string; content: string; info: any }[];

	editor_elements.subscribe((value) => {
		elements = value;
	});

	function add_el(type: string, content: string, info: object = {}) {
		$editor_elements.push({ type: type, content: content, info: info });
		$editor_elements = $editor_elements;
	}

	function add_p() {
		add_el('p', '?', {});
	}

	function add_h1() {
		add_el('h1', '?', {});
	}

	function add_img() {
		add_el('img', '', {
			img: 'https://via.placeholder.com/250?text=EmilienNetwork'
		});
	}
</script>

<ButtonGroup>
	<Button on:click={add_p}><Icon name="bi bi-plus-lg" /> Add text</Button>
	<Button on:click={add_h1}><Icon name="bi bi-fonts" /> Add title</Button>
	<Button on:click={add_img}><Icon name="bi bi-image" /> Add picture</Button>
</ButtonGroup>
