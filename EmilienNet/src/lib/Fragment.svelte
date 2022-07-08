<script lang="ts">
	import { editor_elements } from './Elements';
	import { remove_array_index } from './remove_array_index';
	import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Icon } from 'sveltestrap';
	import { swap_array } from '$lib/swap_array';
	import { fly } from 'svelte/transition';

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

	function move_down() {
		$editor_elements = swap_array($editor_elements, index, index + 1);
	}

	function move_up() {
		$editor_elements = swap_array($editor_elements, index, index - 1);
	}
</script>

{#if is_editing}
	<div class="fragment-box anim-over" transition:fly={{ x: -200, duration: 500 }}>
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
		<ButtonDropdown>
			<DropdownToggle color="primary" caret><Icon name="bi bi-gear-fill" /> Option</DropdownToggle>
			<DropdownMenu>
				<DropdownItem
					on:click={() => {
						editor_elements.set(remove_array_index(elements, index));
					}}><Icon name="bi bi-trash" /> Delete</DropdownItem
				>
				<DropdownItem on:click={move_up}><Icon name="bi bi-arrow-up" /> Move up</DropdownItem>
				<DropdownItem on:click={move_down}><Icon name="bi bi-arrow-down" /> Move down</DropdownItem>
			</DropdownMenu>
		</ButtonDropdown>
	</div>
{:else}
	<svelte:element this={type} class="fragment-box">
		{@html content}
	</svelte:element>
{/if}

<style>
	.fragment-box {
		width: max-content;
		margin: 0.5rem;
		padding: 0.5rem 1rem;
	}

	.anim-over {
		width: max-content;
		color: black;
		border-radius: 0.5rem;
		background-color: white;
		transition: all 0.2s ease-in-out;
	}

	.anim-over:hover {
		color: white;
		background-color: black;
	}
</style>
