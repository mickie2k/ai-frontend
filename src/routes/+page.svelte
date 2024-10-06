<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Banner from './Banner.svelte';
	import InputRange from './inputRange.svelte';
	import ProductList from './ProductList.svelte';
	
	$:result = []

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Banner bind:recommend={result}/>

	<div class="grid grid-cols-4 gap-6 px-32 bg-white">
		<div class="bg-black w-full ">
			<!-- ใส่ filter ตรงนี้ -->
		</div>
		<div class="col-span-3">
			<ProductList  result={result}/>
		</div>
	</div>
		

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
