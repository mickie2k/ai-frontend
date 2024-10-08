<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { env } from '$env/dynamic/public';

  let productId;
  let productDetail;
  let isLoading = true;
  let error = null;
  // let quantity = 1;
  let notification = ''; 
  let selectedSize = 'Medium';

  function selectSize(size) {
    selectedSize = size;
  }

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

  // ฟังก์ชันเพิ่มสินค้าไปยัง localStorage
  function addToCart() {
  // ดึงข้อมูลตะกร้าสินค้าจาก localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // ตรวจสอบว่าสินค้าเดียวกันที่มี size เดียวกันถูกเพิ่มไว้แล้วหรือไม่
  const existingProductIndex = cart.findIndex(item => item.productId === productId && item.size === selectedSize);

  if (existingProductIndex !== -1) {
    // ถ้าสินค้าตัวนี้กับ size เดิมถูกเพิ่มไว้แล้ว สามารถเพิ่มจำนวนได้ หรือจะไม่ทำอะไรเพิ่มเติมก็ได้
    notification = 'สินค้านี้ถูกเพิ่มไว้แล้วในตะกร้า!';
  } else {
    // เพิ่มสินค้าพร้อมกับขนาดลงในตะกร้า
    cart.push({
      productId: parseInt(productId, 10),
      size: selectedSize
    });

    // เก็บข้อมูลตะกร้าลง localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    notification = 'เพิ่มเข้าตะกร้าเรียบร้อย!';
  }

  // เคลียร์การแจ้งเตือนหลังจาก 3 วินาที
  setTimeout(() => {
    notification = '';
  }, 3000);

  console.log('Added to cart:', cart);
}


  // function increment() {
  //   quantity += 1;
  // }

  // function decrement() {
  //   if (quantity > 1) {
  //     quantity -= 1;
  //   }
  // }
</script>

{#if notification}
  <div class="fixed top-0 left-0 right-0 bg-green-500 text-white text-center p-4 z-50 mt-5">
    {notification}
  </div>
{/if}

<!-- แสดง Loading, Error หรือข้อมูล Product -->
{#if isLoading}
<div class="flex items-center justify-center h-screen">Loading...</div>
{:else if error}
<div class="flex items-center justify-center h-screen">Error: {error}</div>
{:else}
<div class="flex items-center justify-center h-4/5 w-screen mx-auto mt-48">
  <div class="max-w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-80">
    <!-- Product Image -->
    <div class="flex justify-center">
      <img
        class="rounded-3xl border border-gray-200 "
        width="440px"
        height="530px"
        src={env.PUBLIC_URL}image/{productDetail.id}.jpg
        alt={productDetail.productDisplayName}
      />
    </div>

    <!-- Product Details -->
    <div class="flex flex-col justify-center">
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
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'Small' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('Small')}>
            Small
          </button>
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'Medium' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('Medium')}>
            Medium
          </button>
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'Large' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('Large')}>
            Large
          </button>
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'X-Large' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('X-Large')}>
            X-Large
          </button>
        </div>
      </div>

      <!-- Quantity Selector -->
      <!-- <div class="mt-6 flex items-center space-x-4">
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
      </div> -->

      <!-- Add to Cart Button -->
      <div class="mt-8">
        <button class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800" on:click={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
{/if}

<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { env } from '$env/dynamic/public';

  let productId;
  let productDetail;
  let isLoading = true;
  let error = null;
  // let quantity = 1;
  let notification = ''; 
  let selectedSize = 'Medium';

  function selectSize(size) {
    selectedSize = size;
  }

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

  // ฟังก์ชันเพิ่มสินค้าไปยัง localStorage
  function addToCart() {
  // ดึงข้อมูลตะกร้าสินค้าจาก localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // ตรวจสอบว่าสินค้าเดียวกันที่มี size เดียวกันถูกเพิ่มไว้แล้วหรือไม่
  const existingProductIndex = cart.findIndex(item => item.productId === productId && item.size === selectedSize);

  if (existingProductIndex !== -1) {
    // ถ้าสินค้าตัวนี้กับ size เดิมถูกเพิ่มไว้แล้ว สามารถเพิ่มจำนวนได้ หรือจะไม่ทำอะไรเพิ่มเติมก็ได้
    notification = 'สินค้านี้ถูกเพิ่มไว้แล้วในตะกร้า!';
  } else {
    // เพิ่มสินค้าพร้อมกับขนาดลงในตะกร้า
    cart.push({
      productId: parseInt(productId, 10),
      size: selectedSize
    });

    // เก็บข้อมูลตะกร้าลง localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    notification = 'เพิ่มเข้าตะกร้าเรียบร้อย!';
  }

  // เคลียร์การแจ้งเตือนหลังจาก 3 วินาที
  setTimeout(() => {
    notification = '';
  }, 3000);

  console.log('Added to cart:', cart);
}


  // function increment() {
  //   quantity += 1;
  // }

  // function decrement() {
  //   if (quantity > 1) {
  //     quantity -= 1;
  //   }
  // }
</script>

{#if notification}
  <div class="fixed top-0 left-0 right-0 bg-green-500 text-white text-center p-4 z-50 mt-5">
    {notification}
  </div>
{/if}

<!-- แสดง Loading, Error หรือข้อมูล Product -->
{#if isLoading}
<div class="flex items-center justify-center h-screen">Loading...</div>
{:else if error}
<div class="flex items-center justify-center h-screen">Error: {error}</div>
{:else}
<div class="flex items-center justify-center h-4/5 w-screen mx-auto mt-48">
  <div class="max-w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-80">
    <!-- Product Image -->
    <div class="flex justify-center">
      <img
        class="rounded-3xl border border-gray-200 "
        width="440px"
        height="530px"
        src={env.PUBLIC_URL}image/{productDetail.id}.jpg
        alt={productDetail.productDisplayName}
      />
    </div>

    <!-- Product Details -->
    <div class="flex flex-col justify-center">
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
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'Small' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('Small')}>
            Small
          </button>
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'Medium' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('Medium')}>
            Medium
          </button>
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'Large' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('Large')}>
            Large
          </button>
          <button 
            class="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 {selectedSize === 'X-Large' ? 'bg-black text-white' : ''}"
            on:click={() => selectSize('X-Large')}>
            X-Large
          </button>
        </div>
      </div>

      <!-- Quantity Selector -->
      <!-- <div class="mt-6 flex items-center space-x-4">
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
      </div> -->

      <!-- Add to Cart Button -->
      <div class="mt-8">
        <button class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800" on:click={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
{/if}