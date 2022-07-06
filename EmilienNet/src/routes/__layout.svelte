<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
	/>
</svelte:head>
<div class="container py-md-5">
	<div class="row">
		<div class="col" />
		<div class="col-10"><slot /></div>
		<div class="col" />
	</div>
</div>
