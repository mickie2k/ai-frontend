<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Banner from './Banner.svelte';
	import ProductList from './ProductList.svelte';
	
	// $:result = []

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <Banner bind:recommend={result}/> -->
	 <Banner/>

	<div class="grid grid-cols-4 gap-6 px-32 bg-white w-full">
		<div class="bg-black w-full ">
			<!-- ใส่ filter ตรงนี้ -->
		</div>
		<div class="col-span-3">
			<!-- <ProductList  result={result}/> -->
			<ProductList  />
		</div>
	</div>
		

	
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
