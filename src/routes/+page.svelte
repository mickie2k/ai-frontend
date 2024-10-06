<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Banner from './Banner.svelte';
	import InputRange from './inputRange.svelte';
	import ProductList from './ProductList.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Banner/>
	
	<ProductList/>
	<div class="flex flex-row">
		<div class=" border-2 rounded-md">
			<h1>fliter</h1>
			<hr width="100%" size="2" />
			<InputRange/>
		</div>
		<div>
			<h1 class="text-3xl font-bold text-red-950">Results</h1>
		</div>
	</div>
	<!-- <h1 class="text-3xl font-bold underline text-red-950">Hello world!</h1> -->

	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}


</style>
