<script>
	import { NavLink, Nav, NavItem } from 'sveltestrap';
	import { is_signed } from '$lib/_firebase_utils';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
	/>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-3T75BCL5QP"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-3T75BCL5QP');
	</script>
</svelte:head>
{is_signed()}
<Nav>
	<NavItem>
		<NavLink href="/">Home</NavLink>
	</NavItem>
	<NavItem>
		<NavLink href="/create">Editor</NavLink>
	</NavItem>
	<NavItem>
		<NavLink href="/">Another Link</NavLink>
	</NavItem>
</Nav>
<div class="container py-md-5">
	<div class="row">
		<div class="col" />
		<div class="col-10"><slot /></div>
		<div class="col" />
	</div>
</div>
