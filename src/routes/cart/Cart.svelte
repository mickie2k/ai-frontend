<script>
	import { env } from '$env/dynamic/public';
	export let productName;
	export let productPrice;
	export let productId;

	let quantities = [1];
	function increment(index) {
		quantities[index] += 1;
	}

	function decrement(index) {
		if (quantities[index] > 1) {
			quantities[index] -= 1;
		}
	}

	function removeItem(index) {
		// ลบสินค้าออกจากรถเข็น
		console.log(`ลบสินค้าชิ้นที่ ${index + 1}`);
	}
</script>

<div class="rounded-lg border border-gray-200 bg-white p-4 dark:white md:p-6">
	<div class="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
		<a href="/detail/{productId}" class="shrink-0 md:order-1">
			
			<img
				class="h-20 w-20 object-contain "
				src="{env.PUBLIC_URL}image/{productId}.jpg"
				alt="{productId}Image"
			/>
		</a>

		<div class="flex items-center justify-between md:order-3 md:justify-end">
			<div class="flex items-center">
				<button
					type="button"
					class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
					on:click={() => decrement(0)}
				>
					<svg
						class="h-2.5 w-2.5 text-gray-900 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 2"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h16"
						/>
					</svg>
				</button>
				<input
					type="text"
					class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-black"
					bind:value={quantities[0]}
					readonly
				/>
				<button
					type="button"
					class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
					on:click={() => increment(0)}
				>
					<svg
						class="h-2.5 w-2.5 text-gray-900 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 1v16M1 9h16"
						/>
					</svg>
				</button>
			</div>
			<div class="text-end md:order-4 md:w-32">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
					on:click={() => removeItem(0)}
				>
					<i class="fas fa-trash-alt"></i>
                    <span>Delete</span>
				</button>
			</div>
		</div>

		<div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
			<a href="/detail/{productId}" class="text-base font-black text-gray-900 hover:underline dark:text-black"
				>{productName}</a
			>
			<div class="flex items-center gap-4">
				<p class="text-base font-semibold text-gray-900 dark:text-black">${productPrice}</p>
			</div>
		</div>
	</div>
</div>
