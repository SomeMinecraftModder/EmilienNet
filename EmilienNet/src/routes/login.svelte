<script lang="ts">
	import { auth } from '$lib/_firebase';

	import { is_signed, login_user } from '$lib/_firebase_utils';
	import { EmailAuthProvider, signInWithPopup } from 'firebase/auth';

	let email: string;
	let password: string;

	function login() {
		signInWithPopup(auth, EmailAuthProvider);
		let info = login_user(email, password);
		if (info === undefined) {
			alert('wtf just happened');
		} else {
			alert('waow');
		}
	}
</script>

{#if is_signed()}
	<p>you are already logged in</p>
{:else}
	<p>you are not signed</p>
{/if}
<input bind:value={email} type="email" />
<input bind:value={password} type="password" />
<button on:click={login}>Login</button>
