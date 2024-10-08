<script>
	import Button from './components/button.svelte';
	import ButtonPic from './components/buttonPic.svelte';
	import ChooseSizeButton from './components/chooseSizeButton.svelte';

	let prices = 300;
	let style = 'style';
	let year = 'year';
	let season = 'season';
	let color = 'Color';
	let quantity = 1;
	let showPic = '/KimoriKuy.png';

	function increaseQuantity() {
		quantity += 1;
	}
	function decreaseQuantity() {
		quantity -= 1;
		if (quantity < 1) {
			quantity = 1;
		}
	}
	function changePic(path) {
		showPic = path;
        console.log(showPic);
	}
</script>

<h1 class="px-32 py-6">home / shop / Men / T-shirts</h1>
<div class="pl-32 py-6 flex flex-row">
	<!-- ----- pic select ----- -->
	<div class="px-4 flex flex-col space-y-4">
		<button on:click={() => changePic("/KimoriKuy.png")}><ButtonPic pic="/KimoriKuy.png"/></button> 
		<button on:click={() => changePic("/LugiaMrBeast.png")}><ButtonPic pic="/LugiaMrBeast.png"/></button> 
	</div>
	<!-- ----- pic show ----- -->
	<div class="px-4">
		<img src={showPic} alt="" />
	</div>
	<!-- ----- detail -----  -->
	<div class="px-4">
		<h1><strong>One Life Graphic T-shirt</strong></h1>
		<br />
		<h1><strong>$ {prices}</strong></h1>
		<br />
		<h1>
			Style : {style} <br /> Year : {year} <br /> Season : {season} <br /> Color : {color} <br />
			<br />
			Choose Size <br />
		</h1>
		<ChooseSizeButton text="Small"></ChooseSizeButton>
		<ChooseSizeButton text="Meduim"></ChooseSizeButton>
		<ChooseSizeButton text="Large"></ChooseSizeButton>
		<ChooseSizeButton text="X-Large"></ChooseSizeButton>

		<br /> <br />
		<hr width="100%" size="2" />
		<br />
		<div class="flex">
			<div class="flex border-2 rounded-full">
				<button on:click={decreaseQuantity} class="px-2">-</button>
				<h1 class="px-4 text-center">{quantity}</h1>
				<button on:click={increaseQuantity} class="px-2">+</button>
			</div>
			<div class="pl-4">
				<Button text="Add to Cart"></Button>
			</div>
		</div>
	</div>
</div>
