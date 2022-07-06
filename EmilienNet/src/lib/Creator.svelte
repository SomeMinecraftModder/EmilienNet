<script lang="ts">
	import CreatorControl from './CreatorControl.svelte';
	import Fragment from './Fragment.svelte';
	import { editor_elements } from './Elements';

	$editor_elements = [{ type: 'h1', content: 'welcome to EmilienEditor2000' }];

	$: {
		fetch('http://localhost:3000/api/test', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($editor_elements)
		});
	}
</script>

<main>
	<div class="container">
		<CreatorControl />
	</div>
	{#each $editor_elements as element, index}
		<Fragment type={element.type} content={element.content} is_editing={true} {index} />
	{/each}
</main>
