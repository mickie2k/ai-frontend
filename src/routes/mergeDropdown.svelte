<script>
	import DropDownMenu from './dropDownMenu.svelte';

	let subMenu = 'Aritcle Type';
	let status = false;
	export let master;
	export let sub;
	export let article;
	export let color;
	export let style;
	export let selectedMenuList = ['Clothing', 'Accessories', 'Footwear'];
	let articleTypeClothingList = [
		'Baby Dolls',
		'Bath Robe',
		'Belts',
		'Blazers',
		'Booties',
		'Boxers',
		'Bra',
		'Briefs',
		'Camisoles',
		'Capris',
		'Churidar',
		'Clothing Set',
		'Dresses',
		'Dupatta',
		'Innerwear Vests',
		'Jackets',
		'Jeans',
		'Jeggings',
		'Jumpsuit',
		'Kurta Sets',
		'Kurtas',
		'Kurtis',
		'Leggings',
		'Lehenga Choli',
		'Lounge Pants',
		'Lounge Shorts',
		'Lounge Tshirts',
		'Nehru Jackets',
		'Night suits',
		'Nightdress',
		'Patiala',
		'Rain Jacket',
		'Rain Trousers',
		'Robe',
		'Rompers',
		'Salwar',
		'Salwar and Dupatta',
		'Sarees',
		'Shapewear',
		'Shirts',
		'Shorts',
		'Shrug',
		'Skirts',
		'Stockings',
		'Suits',
		'Suspenders',
		'Sweaters',
		'Sweatshirts',
		'Swimwear',
		'Tights',
		'Tops',
		'Track Pants',
		'Tracksuits',
		'Trousers',
		'Trunk',
		'Tshirts',
		'Tunics',
		'Waistcoat'
	];
	let articleTypeAccessoryList = [
		'Accessory Gift Set',
		'Backpacks',
		'Bangle',
		'Belts',
		'Bracelet',
		'Caps',
		'Clutches',
		'Cufflinks',
		'Duffel Bag',
		'Earrings',
		'Gloves',
		'Hair Accessory',
		'Handbags',
		'Hat',
		'Headband',
		'Jewellery Set',
		'Key chain',
		'Laptop Bag',
		'Messenger Bag',
		'Mobile Pouch',
		'Mufflers',
		'Necklace and Chains',
		'Pendant',
		'Perfume and Body Mist',
		'Ring',
		'Rucksacks',
		'Scarves',
		'Shoe Accessories',
		'Shoe Laces',
		'Socks',
		'Stoles',
		'Sunglasses',
		'Tablet Sleeve',
		'Ties',
		'Ties and Cufflinks',
		'Travel Accessory',
		'Trolley Bag',
		'Tshirts',
		'Umbrellas',
		'Waist Pouch',
		'Wallets',
		'Watches',
		'Water Bottle',
		'Wristbands'
	];
	let articleTypeList = [
		'articleType',
		'Shirts',
		'Jeans',
		'Track Pants',
		'Tshirts',
		'Socks',
		'Casual Shoes',
		'Belts',
		'Deodorant',
		'Bracelet',
		'Lipstick',
		'Shorts',
		'Heels',
		'Pendant',
		'Nail Polish',
		'Laptop Bag',
		'Dresses',
		'Blazers',
		'Shrug',
		'Backpacks',
		'Trousers',
		'Earrings',
		'Camisoles',
		'Capris',
		'Lip Gloss',
		'Mufflers',
		'Tunics',
		'Jackets',
		'Lounge Pants',
		'Face Wash and Cleanser',
		'Necklace and Chains',
		'Tracksuits',
		'Bangle',
		'Nightdress',
		'Ties',
		'Baby Dolls',
		'Travel Accessory',
		'Lip Care',
		'Face Moisturisers',
		'Water Bottle',
		'Lip Liner',
		'Robe',
		'Salwar and Dupatta',
		'Patiala',
		'Eyeshadow',
		'Headband',
		'Nail Essentials',
		'Churidar',
		'Wristbands',
		'Footballs',
		'Cufflinks',
		'Jeggings',
		'Hair Colour',
		'Concealer',
		'Booties',
		'Hair Accessory',
		'Clothing Set',
		'Cushion Covers',
		'Keychain',
		'Lip Plumper',
		'Rain Trousers',
		'Body Wash and Scrub',
		'Suits',
		'Ipad'
	];

	let articleTypeShoesList = [
		'Casual Shoes',
		'Flats',
		'Flip Flops',
		'Formal Shoes',
		'Heels',
		'Sandals',
		'Sports Sandals',
		'Sports Shoes'
	];

	let optionsList = [
		[
			'Apparel Set',
			'Bottomwear',
			'Dress',
			'Innerwear',
			'Loungewear and Nightwear',
			'Saree',
			'Socks',
			'Topwear'
		],
		[
			'Bag',
			'Belts',
			'Cufflinks',
			'Eyewear',
			'Gloves',
			'Headwear',
			'Jewellery',
			'Mufflers',
			'Perfumes',
			'Scaves',
			'Shoe Accessories',
			'Socks',
			'Sports Accessories',
			'Stoles',
			'Ties',
			'Umbrellas',
			'wallets',
			'Watches',
			'Water Bottle',
			'Other'
		],
		['Flip Flops', 'Sandal', 'Shoes']
	];
	let isOpenList = [false, false, false];
	let isOpenListSub = [false];

	function toggleDropdown(index, state) {
		for (let i = 0; i < isOpenList.length; i++) {
			isOpenListSub[i] = false;
			if (i === index) {
				isOpenList[i] = state;
			} else {
				isOpenList[i] = false;
			}
		}
	}

	function toggleSubDropdown(index, state) {
		for (let i = 0; i < isOpenList.length; i++) {
			isOpenList[i] = false;
			if (i === index) {
				isOpenListSub[i] = state;
			} else {
				isOpenListSub[i] = false;
			}
		}
	}

	function resetisOpen() {
		for (let i = 0; i < isOpenList.length; i++) {
			isOpenList[i] = false;
		}
	}

	function statusButton() {
		selectedMenuList = ['Clothing', 'Accessories', 'Footwear'];
		master = '';
		sub = '';
		article = '';
		color = '';
		style = '';
	}
	$: if (
		selectedMenuList[0] != 'Clothing' ||
		selectedMenuList[1] != 'Accessories' ||
		selectedMenuList[2] != 'Footwear'
	) {
		resetisOpen();
	}
	$: if (selectedMenuList[0] != 'Clothing') {
		master = 'Clothing';
		sub = selectedMenuList[0];
	}
	$: if (selectedMenuList[1] != 'Accessories') {
		master = 'Accessories';
		sub = selectedMenuList[1];
	}
	$: if (selectedMenuList[2] != 'Footwear') {
		master = 'Footwear';
		sub = selectedMenuList[2];
	}
	$: if (subMenu != 'Aritcle Type') {
		article = subMenu;
	}
</script>

<div class="mt-0 space-y-4">
	{#if selectedMenuList[0] != 'Clothing'}
		<button
			class="px-4 mt-0 border-2 rounded-full transition duration-500 ease-in-out {status
				? 'text-white bg-black'
				: 'text-black bg-none'} hover:bg-black hover:text-white"
			on:click={statusButton}>Back</button
		>
		<DropDownMenu
			bind:selectedMenu={selectedMenuList[0]}
			options={optionsList[0]}
			isOpen={isOpenList[0]}
			onToggle={(state) => toggleDropdown(0, state)}
		/>
		<DropDownMenu
			bind:selectedMenu={subMenu}
			options={articleTypeClothingList}
			isOpen={isOpenListSub[0]}
			onToggle={(state) => toggleSubDropdown(0, state)}
		/>
	{:else if selectedMenuList[1] != 'Accessories'}
		<button
			class="px-4 border-2 rounded-full transition duration-500 ease-in-out {status
				? 'text-white bg-black'
				: 'text-black bg-none'} hover:bg-black hover:text-white"
			on:click={statusButton}>Back</button
		>
		<DropDownMenu
			bind:selectedMenu={selectedMenuList[1]}
			options={optionsList[1]}
			isOpen={isOpenList[1]}
			onToggle={(state) => toggleDropdown(1, state)}
		/>
		<DropDownMenu
			bind:selectedMenu={subMenu}
			options={articleTypeAccessoryList}
			isOpen={isOpenListSub[1]}
			onToggle={(state) => toggleSubDropdown(1, state)}
		/>
	{:else if selectedMenuList[2] != 'Footwear'}
		<button
			class="px-4 border-2 rounded-full transition duration-500 ease-in-out {status
				? 'text-white bg-black'
				: 'text-black bg-none'} hover:bg-black hover:text-white"
			on:click={statusButton}>Back</button
		>
		<DropDownMenu
			bind:selectedMenu={selectedMenuList[2]}
			options={optionsList[2]}
			isOpen={isOpenList[2]}
			onToggle={(state) => toggleDropdown(2, state)}
		/>
		<DropDownMenu
			bind:selectedMenu={subMenu}
			options={articleTypeShoesList}
			isOpen={isOpenListSub[2]}
			onToggle={(state) => toggleSubDropdown(2, state)}
		/>
	{:else}
		{#each optionsList as options, index}
			<DropDownMenu
				bind:selectedMenu={selectedMenuList[index]}
				{options}
				isOpen={isOpenList[index]}
				onToggle={(state) => toggleDropdown(index, state)}
			/>
		{/each}
	{/if}
</div>
