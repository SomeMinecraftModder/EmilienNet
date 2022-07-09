<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let is_editing: boolean;
	export let type: string;
	export let content: string;
	export let info: any;
	const dispatch = createEventDispatcher();

	function update() {
		dispatch('update', {
			text: 'nothing'
		});
	}
</script>

{#if is_editing}
	{#if type === 'img'}
		<svelte:element
			this={type}
			src={info['img']}
			contenteditable="true"
			bind:innerHTML={content}
			on:keypress={update}
			on:keypress={update}
			on:change={update}
			on:blur={update}
			on:focus={update}
		/>
	{:else}
		<svelte:element
			this={type}
			contenteditable="true"
			bind:innerHTML={content}
			on:keypress={update}
			on:keypress={update}
			on:change={update}
			on:blur={update}
			on:focus={update}>{content}</svelte:element
		>
	{/if}
{:else if !is_editing}
	{#if type === 'img'}
		<svelte:element this={type} class="fragment-box" src={info['img']} />
	{:else}
		<svelte:element this={type} class="fragment-box">
			{@html content}
		</svelte:element>
	{/if}
{/if}
