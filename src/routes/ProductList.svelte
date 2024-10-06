<script>
	import ProductCard from './ProductCard.svelte';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public'
	import { resultProductID } from './store.js'
 
	$: result = [];
	let products = [];
	let resultProducts = []


	onMount(async () => {
		console.log("fetching frontpage");
		const response = await fetch(env.PUBLIC_URL+'/Frontpage?limit=10',
            {
                method: "GET",
                headers: {
					'ngrok-skip-browser-warning': 'true',
                    "Content-Type": "application/json",
                },
            });
		if (!response.ok) {
        	throw new Error(`HTTP error! status: ${response.status}`);
    	}
		
		products = await response.json();
		console.log(products)
		
	});


	resultProductID.subscribe((value) => {
		result = value
	})

	async function fetchResult(){
		try {
        // Make sure the env.PUBLIC_URL is correctly set
        const ids = result.map(result => result.id).join(',');
        const response = await fetch(`${env.PUBLIC_URL}/getMultiple?ids=${ids}`,{
			headers: {
                'ngrok-skip-browser-warning': 'true',
                },
		});

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        resultProducts = await response.json();
        console.log('Fetched products:', resultProducts); // Log the results

        // Assuming you want to store the result somewhere, like a Svelte store
        // For example:
        // productsStore.set(resultProducts);

    } catch (error) {
        console.error('Error fetching results:', error);
    }

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
