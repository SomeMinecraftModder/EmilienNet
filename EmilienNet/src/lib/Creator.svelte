<script lang="ts">
	import CreatorControl from './CreatorControl.svelte';
	import Fragment from './Fragment.svelte';
	import { editor_elements, editor_title } from './Elements';
	import { add_website } from '$lib/add_website';
	import { Button, Icon, Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap';

	$editor_elements = [{ type: 'h1', content: 'welcome to EmilienEditor2000' }];
	$editor_title = 'Document title';
	let open = false;
	let website_id: string | undefined;
	const toggle = () => (open = !open);

	async function save_website() {
		website_id = await add_website($editor_title, $editor_elements);
		if (website_id === undefined) {
			alert('An error has occured.');
			return;
		}
		toggle();
	}
</script>

<main>
	<div class="container mb-2">
		<Button on:click={save_website}><Icon name="bi bi-save" /> Save website</Button>
	</div>
	<div class="container">
		<h2><input bind:value={$editor_title} /></h2>
		<CreatorControl />
	</div>
	{#each $editor_elements as element, index (element)}
		<Fragment type={element.type} content={element.content} is_editing={true} {index} />
	{/each}
	<Modal isOpen={open} {toggle}>
		<ModalHeader {toggle}>Website saved</ModalHeader>
		<ModalBody>
			Your website was saved with succes !<br />
			Link: <a href={`/api/${website_id}/web`}>website</a>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" on:click={toggle}>Ok</Button>
		</ModalFooter>
	</Modal>
</main>
