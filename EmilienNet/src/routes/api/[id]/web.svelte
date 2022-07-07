<script lang="ts">
	import RenderWebsite from '$lib/RenderWebsite.svelte';
	import { editor_elements, editor_title } from '$lib/Elements';

	export let data: any;
	$editor_elements = JSON.parse(data.content);
	$editor_title = data.title;
	console.log(data);
</script>

<RenderWebsite />
