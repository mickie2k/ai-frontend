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
	 let loading = false;
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
		show = false
		isSelect = false;
	}

	function onSubmit() {
		loading = true;
		console.log(loading)
		document.body.classList.add('overflow-hidden');
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
				loading = false;
				document.body.classList.remove('overflow-hidden');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
</script>
{#if loading}
  <div class="h-full w-full fixed bg-black top-0 left-0 bg-opacity-50 flex  justify-center items-center z-50 gap-4">
	    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>

    <h1 class="font-bold text-2xl text-white pt-1">Loading...</h1>
  </div>
{/if}


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
					<h1 class="font-semibold text-zinc-400">Category is {selected == 'Apparel'?'Clothing':selected}.</h1>
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
