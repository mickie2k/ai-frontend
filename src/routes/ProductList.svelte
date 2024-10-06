<script>
	import ProductCard from './ProductCard.svelte';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public'
	import { resultProductID } from './store.js'
 
	$: result = [];
	let products = [];
	let resultProducts = []


	onMount(async () => {
		console.log(env.PUBLIC_URL)
		const response = await fetch(env.PUBLIC_URL+'/api/test');
		products = await response.json();

		
	});


	resultProductID.subscribe((value) => {
		result = value
	})

	async function fetchResult(){
		const response = await fetch(env.PUBLIC_URL+'/api/test?' + new URLSearchParams({
				id: result.map(result=>result.id).join(',')  }).toString())
		resultProducts = await response.json();
	

	}


	$: if(result.length > 0){
			fetchResult()
		}
</script>

<div class="bg-white w-full py-6">

	{#if result.length > 0}
		<h2 class="text-2xl font-bold tracking-tight text-gray-900">Results</h2>
		<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-8">
			{#each resultProducts.slice(0,5) as resultProduct}
			
			<ProductCard
				productId={resultProduct.id}
				productName={resultProduct.productDisplayName}
				productPrice={resultProduct.price}
			/>
			{:else}
				<p>Loading...</p>
			{/each}
			</div>
		{/if}
		

	<h2 class="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

	<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
		
		{#each products as product}
			<ProductCard
				productId={product.id}
				productName={product.productDisplayName}
				productPrice={product.price}
			/>
		{:else}
			<p>Loading...</p>
		{/each}

		<!-- More products... -->
	</div>
</div>

<style>
</style>
