<script>
	import Cart from './Cart.svelte';
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	let quantities = [1, 1, 1, 1, 1]; // เก็บจำนวนสินค้าสำหรับแต่ละชิ้น
	let products = [];
	let result = [];
	let resultProducts = [];
	let fee = 0;
	let deleteId;
	$: sum = 0;

	onMount(async () => {
		// if (typeof window !== 'undefined') {
		// Safe to use localStorage
		result = JSON.parse(localStorage.getItem('cart')) || [];
		if (result.length > 0) {
			fetchResult();
		}
		// }
	});

	

	function onClick() {
		result = [];
		localStorage.clear('id');
		alert('Thank you.');
	}

	async function fetchResult() {
	try {
		sum = 0;
		// สร้างสตริงของ ids จาก result ที่เป็น array ของ { productId, size }
		let ids = result.map(item => item.productId).join(',');

		const response = await fetch(`${env.PUBLIC_URL}getMultiple?ids=${ids}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'ngrok-skip-browser-warning': 'true'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		resultProducts = await response.json();
		console.log('Fetched products:', resultProducts);

		// คำนวณยอดรวม
		resultProducts.forEach((product) => {
			sum += product.price;
		});
		fee = 100;

	} catch (error) {
		console.error('Error fetching results:', error);
	}
}


	$: if (deleteId) {
		console.log(deleteId+"Frompage")
		// Remove the product from resultProducts when deleteId is set
		resultProducts = resultProducts.filter(product => product.id !== deleteId);
		sum = resultProducts.reduce((acc, product) => acc + product.price, 0); // Recalculate total
		// Initialize result as an array


			// Log result to ensure it's an array
			console.log("Before filter, result is:", typeof result, result);

			// Use filter to remove the specific item
			result = result.filter(item => item !== deleteId);

			// Log result after filter to confirm it's still an array
			console.log("After filter, result is:", typeof result, result);
			localStorage.setItem('id', JSON.stringify(result))
			deleteId = 0; // Reset deleteId after deleting
			
	}
	$: if(result.length == 0){
		sum = 0
		fee = 0
	}
</script>

<section class="bg-white py-8 antialiased md:py-16">
	<div class="px-32">
		<h1 class="text-xl font-black text-black dark:text-black sm:text-2xl">Your Cart</h1>

		<div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
			<div class="mx-auto w-full  lg:max-w-lg xl:max-w-3xl 2xl:max-w-6xl">
				<div class="space-y-6">
					{#if result.length > 0}
						{#each resultProducts as resultProduct (resultProduct.id)}
							<Cart
								productId={resultProduct.id}
								productName={resultProduct.productDisplayName}
								productPrice={resultProduct.price}
								productColor={resultProduct.baseColour}
								size={result.find(item => item.productId === resultProduct.id).size}
								bind:deleteProductID={deleteId}
							/>
						{:else}
							<p>Loading...</p>
						{/each}
					{:else}
						<p>Cart is empty</p>
					{/if}
				</div>
			</div>

			<div class="mx-auto mt-6 w-full  max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
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
								<dd class="text-base font-bold text-gray-900 dark:text-black">${sum + fee}</dd>
							</dl>
						</div>
						{#if result.length > 0}
							<button
								on:click={onClick}
								class="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-900"
								>Go to Checkout
							</button>
						{:else}
							<button
								disabled
								class="cursor-not-allowed opacity-50 flex w-full items-center justify-center rounded-lg bg-gray-300 px-5 py-2.5 text-sm font-medium text-black"
								>Go to Checkout
							</button>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
