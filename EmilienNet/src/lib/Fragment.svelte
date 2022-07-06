<script lang="ts">
	import { editor_elements } from './Elements';
	import { remove_array_index } from './remove_array_index';

	export let type: string;
	export let content: string;
	export let is_editing: boolean;
	export let index: number;
	let elements: { type: string; content: string }[];

	editor_elements.subscribe((value) => {
		elements = value;
	});

	function update() {
		let temp_els = [...elements];
		temp_els[index].content = content;
		$editor_elements = temp_els;
	}
</script>

{#if is_editing}
	<svelte:element this={type} class="fragment-box anim-over">
		<span contenteditable="true" bind:innerHTML={content} on:keypress={update}>{content}</span>
		<button
			on:click={() => {
				elements[0].content = 'abc?';
				editor_elements.set(elements);
			}}>a</button
		>
		<button
			on:click={() => {
				editor_elements.set(remove_array_index(elements, index));
			}}
		/></svelte:element
	>
{:else}
	<svelte:element this={type} class="fragment-box">
		<span>{content}</span>
	</svelte:element>
{/if}

<style>
	.fragment-box {
		width: 50px;
		margin: 0.5rem;
		padding: 0.5rem 1rem;
	}

	.anim-over {
		width: max-content;
		color: black;
		background-color: white;
		transition: all 0.1s ease-in-out;
	}

	.anim-over:hover {
		color: white;
		background-color: black;
	}
</style>
