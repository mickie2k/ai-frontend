<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { env } from '$env/dynamic/public';
  
    let productId;
    let productDetail;
    let isLoading = true;
    let error = null;
    let quantity = 1;
  
    // Subscribe เพื่อดึงค่า id จาก URL
    const unsubscribe = page.subscribe(($page) => {
      productId = $page.params.id;
    });
    unsubscribe();
  
    // เมื่อ component ถูก mount จะดึงข้อมูล
    onMount(() => {
      const cachedProduct = JSON.parse(sessionStorage.getItem(`product_${productId}`));
      if (cachedProduct) {
        productDetail = cachedProduct;
        isLoading = false;
        console.log(productDetail);
      } else {
        loadProductDetails();
      }
    });
  
    // ฟังก์ชันดึงข้อมูลจาก API
    async function loadProductDetails() {
      try {
        const response = await fetch(env.PUBLIC_URL + `detail/${productId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': true
          }
        });
  
        if (!response.ok) {
          throw new Error(`Error fetching product with id ${productId}`);
        }
  
        productDetail = await response.json();
        sessionStorage.setItem(`product_${productId}`, JSON.stringify(productDetail));
        isLoading = false;
      } catch (err) {
        error = err.message;
        isLoading = false;
      }
    }
  
    function increment() {
      quantity += 1;
    }
  
    function decrement() {
      if (quantity > 1) {
        quantity -= 1;
      }
    }
  </script>
  
  <!-- แสดง Loading, Error หรือข้อมูล Product -->
  {#if isLoading}
    <div class="flex items-center justify-center h-screen">Loading...</div>
  {:else if error}
    <div class="flex items-center justify-center h-screen">Error: {error}</div>
  {:else}
  <div class="flex items-center justify-center h-screen w-4/5 mx-auto">
    <div class="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Product Image -->
      <div class="flex justify-center">
        <img
          class="rounded-lg border border-gray-200"
          src={env.PUBLIC_URL}image/{productDetail.id}.jpg
          alt={productDetail.productDisplayName}
        />
      </div>
  
      <!-- Product Details -->
      <div class="flex flex-col">
        <!-- Product Name -->
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{productDetail.productDisplayName}</h1>
  
        <!-- Price -->
        <div class="text-2xl text-red-500 font-semibold mb-6">${productDetail.price}</div>
  
        <!-- Product Info -->
        <div class="text-gray-700 space-y-2">
          <p>Style: {productDetail.usage}</p>
          <p>Year: {productDetail.year}</p>
          <p>Season: {productDetail.season}</p>
          <p>Color: {productDetail.baseColour}</p>
        </div>
  
        <!-- Size Options -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-2">Choose Size</h3>
          <div class="flex space-x-4">
            <button class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Small</button>
            <button class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Medium</button>
            <button class="border border-gray-300 px-4 py-2 rounded-md bg-black text-white">Large</button>
            <button class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">X-Large</button>
          </div>
        </div>
  
        <!-- Quantity Selector -->
        <div class="mt-6 flex items-center space-x-4">
          <button
            class="w-8 h-8 border border-gray-300 rounded-md text-lg font-bold flex items-center justify-center"
            on:click={decrement}
          >
            -
          </button>
          <span class="text-lg">{quantity}</span>
          <button
            class="w-8 h-8 border border-gray-300 rounded-md text-lg font-bold flex items-center justify-center"
            on:click={increment}
          >
            +
          </button>
        </div>
  
        <!-- Add to Cart Button -->
        <div class="mt-8">
          <button class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  
  {/if}
  