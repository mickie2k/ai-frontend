<script>
	let max = 10000;
	let min = 0;
	export let minVal = 2500;
	export let maxVal = 7500;
	let priceGap = 1000;

	$: percentLeft = (minVal / max) * 100 + '%';
	$: percentRight = 100 - (maxVal / max) * 100 + '%';

	function handleMinInput(e) {
		if (maxVal - minVal < priceGap) {
			minVal = maxVal - priceGap;
		}
	}

	function handleMaxInput(e) {
		if (maxVal == '') {
			maxVal = minVal + priceGap;
		}
		if (maxVal - minVal < priceGap) {
			maxVal = minVal + priceGap;
		}
	}

	function handleMinInputNumber(e) {
		if (e.target.value == '') {
			e.target.value = 0;
		}
		let minNumber = parseInt(e.target.value);
		minVal = minNumber;
		if (minNumber < min) {
			minVal = min;
		} else if (minNumber > maxVal || minNumber == null) {
			minVal = maxVal - priceGap;
		}
	}

	function handleMaxInputNumber(e) {
		if (e.target.value == '') {
			e.target.value = minVal + priceGap;
		}
		let maxNumber = parseInt(e.target.value);
		maxVal = maxNumber;
		if (maxNumber > max) {
			maxVal = max;
		} else if (maxNumber < minVal) {
			maxVal = minVal + priceGap;
		}
	}

	// function allowOnlyNumbers(e) {
	// 	const char = String.fromCharCode(e.keyCode);
	// 	if (!/^[0-9]+$/.test(char)) {
	// 		e.preventDefault();
	// 	}
	// }
	// // on:keypress={allowOnlyNumbers}
</script>

<div class="flex flex-col items-center ">
	<div class="relative w-full">
		<div class="slider h-1 bg-gray-300 rounded-md mx-2 relative">
			<div
				class="h-1 bg-black rounded-md absolute"
				style="left: {percentLeft}; right: {percentRight}"
			></div>
		</div>
		<div class="range-input">
			<input
				type="range"
				class="range-min"
				bind:value={minVal}
				min="0"
				max={10000}
				step="100"
				on:input={handleMinInput}
			/>
			<input
				type="range"
				class="range-max"
				bind:value={maxVal}
				min="0"
				max="10000"
				step="100"
				on:input={handleMaxInput}
			/>
		</div>
	</div>
	<div class="flex w-full mt-5 justify-between px-4">
		<div class="flex   flex-col items-center xl:flex-row xl:gap-2">
			<span>Min</span>
			<input
				type="number"
				class="input-min w-14 border rounded-md text-center"
				value={minVal}
				on:change={handleMinInputNumber}
			/>
		</div>
		<div class="separator flex w-10 items-center justify-center">-</div>
		<div class="flex flex-col items-center xl:flex-row xl:gap-2">
			<span>Max</span>
			<input
				type="number"
				class="input-max w-14  border rounded-md text-center"
				value={maxVal}
				on:change={handleMaxInputNumber}
			/>
		</div>
	</div>
</div>

<style>
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	.range-input {
		position: relative;
	}
	.range-input input {
		position: absolute;
		top: -5px;
		height: 5px;
		width: 100%;
		background: none;
		pointer-events: none;
		-webkit-appearance: none;
	}
	input[type='range']::-webkit-slider-thumb {
		height: 17px;
		width: 17px;
		border-radius: 50%;
		pointer-events: auto;
		background-color: black;
		-webkit-appearance: none;
	}
	input[type='range']::-moz-range-thumb {
		height: 17px;
		width: 17px;
		border: none;
		border-radius: 50%;
		pointer-events: auto;
		background-color: black;
		-moz-appearance: none;
	}
</style>
