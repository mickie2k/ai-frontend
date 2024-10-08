<script>
	import preview from '$lib/images/Preview.webp';
	import { resultProductID } from './store.js';
		import { env } from '$env/dynamic/public'
	let input;
	let image;
	let show = false;
	let isSelect = false;
	let selected;
	let files;
	let recommend = [];

	function onChange() {
		files = input.files[0];

		if (files) {
			show = true;
			const fileReader = new FileReader();
			fileReader.addEventListener('load', function () {
				image.setAttribute('src', fileReader.result);
			});
			fileReader.readAsDataURL(files);

			return;
		} else {
			show = false;
		}
	}

	function onChangeRadio(event) {
		selected = event.currentTarget.value;
	}

	function handleOnSubmitForm(event) {
		isSelect = true;
	}

	function back() {
		isSelect = false;
	}

	function onSubmit() {
		console.log(selected)
		const formData = new FormData();
		formData.append('selection', selected);
		// formData.append('value' , files.name)
		formData.append('file', files);
		const upload = fetch(env.PUBLIC_URL + 'upload', {
			method: 'POST',
			headers:{
				'ngrok-skip-browser-warning': 'true',
			},
			body: formData
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
				recommend = result;
				console.log(recommend);
				resultProductID.set(recommend);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
</script>

<div class="w-full h-[50rem]">
	<div class="grid grid-cols-2 h-full">
		<div class="h-full flex flex-col justify-center px-32 items-center bg-[#F2F0F1]">
			<h1 class="text-6xl text-left text-black font-bold">UPLOAD YOUR CLOTH IMAGE</h1>
			<span
				>Browse through our diverse range of meticulously crafted garments, designed to bring out
				your individuality and cater to your sense of style.</span
			>
		</div>
		<div class="bg-[#242424] text-white h-full flex flex-col justify-center items-center">
			{#if isSelect}
				<button on:click={back} class=" py-3 px-14 text-zinc-400 hover:text-zinc-50 font-semibold">
					<i class="fa-solid fa-chevron-left mr-2"></i>BACK</button
				>

				<div
					class="flex w-[450px] h-[450px] overflow-hidden border-none mb-8 justify-center items-center"
				>
					{#if show == true}
						<img bind:this={image} class="w-full h-full object-contain border-none" alt=" " />
					{:else}
						<img src={preview} class="h-32 w-32 border-none" alt="Preview" />
					{/if}
				</div>
				<div class="flex flex-row items-center gap-4">
					<!-- <span class="text-3xl">Drag and drop file here</span> -->

					<input
						class="hidden"
						type="file"
						accept="image/png, image/jpeg"
						id="file-upload"
						bind:this={input}
						on:change={onChange}
					/>
					<label
						for="file-upload"
						class="py-3 px-14 text-zinc-400 bg-zinc-800 border border-zinc-600 rounded-full hover:text-zinc-50 hover:bg-zinc-700 cursor-pointer"
					>
						Browse File
					</label>
					{#if files}
						<button
							class="py-3 px-14 rounded-full text-black bg-gray-100 border border-zinc-600 hover:text-gray-900 hover:bg-gray-300"
							on:click={onSubmit}>Submit</button
						>
					{:else}
						<button
							class="py-3 px-14 border rounded-full bg-gray-300 text-black cursor-not-allowed opacity-50"
							disabled>Submit</button
						>
					{/if}
				</div>
			{:else}
				<div class="flex flex-col items-center gap-4">
					<form class="flex flex-col items-center" on:submit={handleOnSubmitForm} method="post">
						<h3 class="mb-9 text-lg font-medium text-gray-900 dark:text-white">
							Choose Categories
						</h3>
						<ul class="grid w-full gap-6 md:grid-cols-3">
							<li>
								<input
									type="radio"
									id="category-clothing"
									name="category"
									value="Apparel"
									class="hidden peer"
									required
									on:change={onChangeRadio}
								/>
								<label
									for="category-clothing"
									class="inline-flex items-center justify-between w-full p-5 text-zinc-400 bg-zinc-800 border border-zinc-600 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:text-gray-600 hover:text-zinc-50 hover:bg-zinc-700 transition duration-300"
								>
									<div class="block">
										<div class="w-full text-lg font-semibold">Clothing</div>
										<div class="w-full">Topwear, Bottomwear, etc.</div>
									</div>
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="category-accessories"
									name="category"
									value="Accessories"
									class="hidden peer"
									on:change={onChangeRadio}
								/>
								<label
									for="category-accessories"
									class="inline-flex items-center justify-between w-full p-5 text-zinc-400 bg-zinc-800 border border-zinc-600 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:text-gray-600 hover:text-zinc-50 hover:bg-zinc-700 transition duration-300"
								>
									<div class="block">
										<div class="w-full text-lg font-semibold">Accessories</div>
										<div class="w-full">Watches, Belt, Wallet, etc.</div>
									</div>
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="category-footwear"
									name="category"
									value="Footwear"
									class="hidden peer"
									on:change={onChangeRadio}
								/>
								<label
									for="category-footwear"
									class="inline-flex items-center justify-between w-full p-5 text-zinc-400 bg-zinc-800 border border-zinc-600 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:text-gray-600 hover:text-zinc-50 hover:bg-zinc-700 transition duration-300"
								>
									<div class="block">
										<div class="w-full text-lg font-semibold">Footwear</div>
										<div class="w-full">Flip Flops, Sandal, Shoes</div>
									</div>
								</label>
							</li>
						</ul>
						<button
							class="mt-9 py-3 px-14 rounded-full max-w-fit bottom-0 text-black bg-gray-100 border border-zinc-600 cursor-pointer hover:text-gray-900 hover:bg-gray-300"
							>Next</button
						>
					</form>
				</div>
			{/if}
		</div>
	</div>
</div>
