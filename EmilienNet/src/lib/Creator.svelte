<script lang="ts">
	import CreatorControl from './CreatorControl.svelte';
	import Fragment from './Fragment.svelte';
	import { editor_elements, editor_title } from './Elements';
	import { add_website } from '$lib/add_website';
	import { Button } from 'sveltestrap';

	$editor_elements = [{ type: 'h1', content: 'welcome to EmilienEditor2000' }];
	$editor_title = "Document's title";
</script>

<main>
	<div class="container mb-2">
		<Button
			on:click={() => {
				add_website('pain is comming', $editor_elements);
			}}>Save website</Button
		>
	</div>
	<div class="container">
		<h2><input bind:value={$editor_title} /></h2>
		<CreatorControl />
	</div>
	{#each $editor_elements as element, index}
		<Fragment type={element.type} content={element.content} is_editing={true} {index} />
	{/each}
</main>
