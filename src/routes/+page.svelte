<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Banner from './Banner.svelte';
	import ProductList from './ProductList.svelte';
	import Filter from './Filter.svelte';
	
	// $:result = []
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <Banner bind:recommend={result}/> -->
	 <Banner/>

	<div class="grid grid-cols-4 gap-8 px-32 bg-white w-full h-full ">
		<div class=" bg-none w-full my-10 border rounded-md pl-5 pt-5  h-fit ">
			<!-- ใส่ filter ตรงนี้ -->
			 <Filter/>
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
