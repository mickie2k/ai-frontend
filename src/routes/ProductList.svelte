<script>
	import ProductCard from './ProductCard.svelte';
	import { onMount } from 'svelte';

	let products = [];

	onMount(async () => {
		const response = await fetch('/api/test');
		products = await response.json();
	});
</script>

<div class="bg-white w-full px-32 py-6">
	<h2 class="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

	<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
