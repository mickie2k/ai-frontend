<script>
	import InputRange from './inputRange.svelte';
	import MergeDropdown from './mergeDropdown.svelte';
	import DropdownFirst from './dropdownFirst.svelte';
	import { env } from '$env/dynamic/public';
	import { resultProductID } from './store.js';

	let statusButton = false;
	let masterCategory, subCategory, articleType, baseColour, usage, min_price, max_price;

	async function handleOnSubmit() {
		let result = {
			masterCategory: masterCategory,
			subCategory: subCategory,
			articleType: articleType,
			baseColour: baseColour,
			usage: usage,
			min_price: min_price,
			max_price: max_price
		};

		for (let key in result) {
			if (result[key] === undefined || result[key] === '' || result[key] === 'None') {
				delete result[key];
			}
			if (result[key] === 'Clothing') {
				result[key] = 'Apparel';
			}
		}
		console.log(result);
		console.log(
			'master : ' + masterCategory,
			'sub : ' + subCategory,
			'article : ' + articleType,
			'baseColor : ' + baseColour,
			'usage : ' + usage,
			'min : ' + min_price,
			'max : ' + max_price
		);

		try {
			const response = await fetch(
				env.PUBLIC_URL + 'searchbyDetail?' + new URLSearchParams(result),
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'ngrok-skip-browser-warning': 'true'
					}
				}
			);
			result = await response.json();
		} catch (error) {
			alert('Products not found. Please change filter.');
			console.log('Error');
		}
		resultProductID.set(result);
	}
</script>

<div class="mt-5 space-y-7 w-full ">
	<h1><strong>Filters</strong></h1>
	<hr class="" width="100%" size="2" />
	<MergeDropdown
		bind:master={masterCategory}
		bind:sub={subCategory}
		bind:article={articleType}
		bind:color={baseColour}
		bind:style={usage}
	/>
	<hr class="" width="100%" size="2" />
	<h1><strong>Price</strong></h1>
	<InputRange bind:minVal={min_price} bind:maxVal={max_price} />
	<hr width="100%" size="2" />
	<DropdownFirst bind:selectedStyle={usage} bind:color={baseColour} />
	<div class="flex w-full justify-center pt-10 pb-7">
		<button
			class=" py-3 px-14 border-2 rounded-full transition duration-300 ease-in-out {statusButton
				? 'text-white bg-black'
				: 'text-black bg-none'} hover:bg-black hover:text-white"
			on:click={handleOnSubmit}>Apply Filter</button
		>
	</div>
</div>