<script>
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte'
	import '../app.css';
	
</script>

<div class="app">
	<Navbar/>

	<main class="">
		<slot />
	</main>

	<footer class="bg-[#F0f0f0]">
		<p>Fashionist © 2024-2077, All Rights Reserved</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
