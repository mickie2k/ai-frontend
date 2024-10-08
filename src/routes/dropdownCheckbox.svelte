<script>
	export let isOpen = false;
    export let onToggle;
	export let selectedMenu = 'Colors';
	let options = ['Green', 'Red', 'Blue', 'Yellow', 'Orange', 'None'];

    function selectedColor(color) {
		selectedMenu = color;
		isOpen = false;
	}
</script>

<div class="dropdown relative">
	<button
		class="select rounded-md flex justify-between items-center transition duration-500 ease-in-out hover:bg-slate-400"
		on:click={() => onToggle(!isOpen)}
	>
		<span class="selected ml-2">{selectedMenu}</span>
		<div class="caret {isOpen ? 'caret-rotate' : ''} mr-2"></div>
	</button>
	<ul class="menu {isOpen ? 'menu-open' : ''} {isOpen ? 'z-50' : ''} ml-0 border rounded-md">
		<div class="rounded-md bg-white">
			{#each options as option}
				<li class="rounded-md transition duration-500 ease-in-out hover:bg-slate-400">
					<label class="flex items-center space-x-16 justify-end mr-2">
						<span>{option}</span>
						<input type="radio" name="checkbox" value={option} on:click={() => selectedColor(option)}/>
					</label>
				</li>
			{/each}
		</div>
	</ul>
</div>

<style>
	.select {
		width: 50%;
	}

	.caret {
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 6px solid #000;
		rotate: 270deg;
		transition: 0.3s;
	}
	.caret-rotate {
		transform: rotate(90deg);
	}
	.menu {
		top: 100%;
		left: 25%;
		width: 50%;
		transform: translate(-50%);
		opacity: 0;
		position: absolute;
		display: none;
		transition: 0.2s;
		z-index: 1;
	}
	.menu li {
		cursor: pointer;
	}
	.menu-open {
		display: block;
		opacity: 1;
	}
	.z-50 {
		z-index: 50;
	}
</style>
