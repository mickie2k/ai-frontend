<script>
	import DropDownMenu from './dropDownMenu.svelte';
	import DropdownCheckbox from './dropdownCheckbox.svelte';

	let menuStyle = 'Style';
	let menuColor = 'Colors';
	export let selectedStyle;
	export let color;
	let optionsList = ['Casual', 'Smart Casual', 'Formal', 'Ethic', 'Party', 'Sport', 'None'];
	let isOpenList = [false, false];

	function toggle(index, state) {
		if (index == 0) {
			isOpenList[0] = state;
			isOpenList[1] = false;
		} else {
			isOpenList[1] = state;
			isOpenList[0] = false;
		}
	}
	$: if (menuStyle != 'Style') {
		selectedStyle = menuStyle;
	}
	$: if (menuColor != 'Colors') {
		color = menuColor;
	}
</script>

<div class="space-y-4">
	<DropdownCheckbox
		bind:selectedMenu={menuColor}
		isOpen={isOpenList[0]}
		onToggle={(state) => toggle(0, state)}
	/>
	<DropDownMenu
		bind:selectedMenu={menuStyle}
		options={optionsList}
		isOpen={isOpenList[1]}
		onToggle={(state) => toggle(1, state)}
	/>
</div>
