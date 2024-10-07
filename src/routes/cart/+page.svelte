<script>
	import Cart from './Cart.svelte';
import { env } from '$env/dynamic/public'
	import { onMount } from 'svelte';
	let quantities = [1, 1, 1, 1, 1]; // เก็บจำนวนสินค้าสำหรับแต่ละชิ้น
	let products = [];
  let result = []
	let resultProducts = [];
  let fee = 100
  $: sum = 0

  onMount(async()=>{
    // if (typeof window !== 'undefined') {
        // Safe to use localStorage
        result =  JSON.parse(localStorage.getItem('id')) || '';
     
      
      // }
  })
	

	$: if (result.length > 0) {
    
		fetchResult();
    
	}

	async function fetchResult() {
		try {
			// Make sure the env.PUBLIC_URL is correctly set
       let ids = ""
      result.forEach(element => {
        ids += element+","
      });
      ids = ids.slice(0, -1);
			 
        console.log(ids)
			const response = await fetch(`${env.PUBLIC_URL}getMultiple?ids=${ids}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'ngrok-skip-browser-warning': 'true'
				}
			});

			// Check if the response is okay
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// Parse the JSON response
			resultProducts = await response.json();
			console.log('Fetched products:', resultProducts); // Log the results
      resultProducts.forEach(result => {
          sum += result.price;
      });


			// Assuming you want to store the result somewhere, like a Svelte store
			// For example:
			// productsStore.set(resultProducts);
		} catch (error) {
			console.error('Error fetching results:', error);
		}

	}
</script>

<section class="bg-white py-8 antialiased md:py-16">
	<div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
		<h1 class="text-xl font-black text-black dark:text-black sm:text-2xl">Your Cart</h1>

		<div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
			<div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
				<div class="space-y-6">
					{#if result.length > 0}
						{#each resultProducts as resultProduct (resultProduct.id)}
							<Cart
								productId={resultProduct.id}
								productName={resultProduct.productDisplayName}
								productPrice={resultProduct.price}
							/>
						{:else}
							<p>Loading...</p>
						{/each}
            {:else}
            <p>Cart is empty</p>
					{/if}
					
				</div>
			</div>

			<div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
				<div
					class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 dark:black dark:white sm:p-6"
				>
					<p class="text-xl font-black text-gray-900 dark:text-black">Order Summary</p>

					<div class="space-y-4">
						<div class="space-y-2">
							<dl class="flex items-center justify-between gap-4">
								<dt class="text-base font-normal text-gray-500 dark:text-gray">Subtotal</dt>
								<dd class="text-base font-medium text-gray-900 dark:text-black">${sum}</dd>
							</dl>

							<dl class="flex items-center justify-between gap-4">
								<dt class="text-base font-normal text-gray-500 dark:text-gray">Delivery Fee</dt>
								<dd class="text-base font-medium text-gray-900 dark:text-black">${fee}</dd>
							</dl>

							<dl
								class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700"
							>
								<dt class="text-base font-bold text-gray-900 dark:text-black">Total</dt>
								<dd class="text-base font-bold text-gray-900 dark:text-black">${sum+fee}</dd>
							</dl>
						</div>

						<a
							href="#"
							class="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
							>Go to Checkout</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
