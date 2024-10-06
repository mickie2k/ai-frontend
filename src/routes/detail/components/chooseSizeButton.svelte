<script>
	export let text = 'click';
	export let customclass = '';
	var statusButton = false;
	function checkStatus() {
		statusButton = !statusButton;
	}
</script>

<button
	class="px-4 border-2 rounded-full transition duration-500 ease-in-out ${customclass} {statusButton
		? 'text-white bg-black'
		: 'text-black bg-none'} hover:bg-black hover:text-white"
	on:click={checkStatus}>{text}</button
>
