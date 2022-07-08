<script lang="ts">
	import Fragment from './Fragment.svelte';
	import { editor_elements, editor_title } from './Elements';
</script>

<h1>{$editor_title}</h1>
{#each $editor_elements as frag, index}
	<Fragment type={frag.type} content={frag.content} is_editing={false} info={frag.info} {index} />
{/each}
