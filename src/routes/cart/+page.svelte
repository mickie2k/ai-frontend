<script>
  let quantities = [1, 1, 1, 1, 1]; // เก็บจำนวนสินค้าสำหรับแต่ละชิ้น

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

<section class="bg-white py-8 antialiased md:py-16">
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  </head>

  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h1 class="text-xl font-black text-black dark:text-black sm:text-2xl">Your Cart</h1>

    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div class="space-y-6">
          
          <!-- สินค้าชิ้นที่ 1 -->
          <div class="rounded-lg border border-gray-200 bg-white p-4 dark:white md:p-6">
            <div class="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              
          
              </a>

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => decrement(0)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-black" bind:value={quantities[0]} readonly />
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => increment(0)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500" on:click={() => removeItem(0)}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-black text-gray-900 hover:underline dark:text-black">สินค้าชิ้นที่1</a>
                <div class="flex items-center gap-4">
                  <p class="text-base font-semibold text-gray-900 dark:text-black">$1,499</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- สินค้าชิ้นที่ 2 -->
          <div class="rounded-lg border border-gray-200 bg-white p-4 dark:white md:p-6">
            <div class="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
      <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
              </a>

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => decrement(1)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-black" bind:value={quantities[1]} readonly />
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => increment(1)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500" on:click={() => removeItem(1)}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-black text-gray-900 hover:underline dark:text-black">สินค้าชิ้นที่2</a>
                <div class="flex items-center gap-4">
                  <p class="text-base font-semibold text-gray-900 dark:text-black">$598</p>
                </div>
              </div>
            </div>
          </div>

          <!-- สินค้าชิ้นที่ 3 -->
          <div class="rounded-lg border border-gray-200 bg-white p-4 dark:white md:p-6">
            <div class="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="imac image" />
                  <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="imac image" />
              </a>

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => decrement(2)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-black" bind:value={quantities[2]} readonly />
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => increment(2)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500" on:click={() => removeItem(2)}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-black text-gray-900 hover:underline dark:text-black">สินค้าชิ้นที่3</a>
                <div class="flex items-center gap-4">
                  <p class="text-base font-semibold text-gray-900 dark:text-black">$1,799</p>
                </div>
              </div>
            </div>
          </div>

          <!-- สินค้าชิ้นที่ 4 -->
          <div class="rounded-lg border border-gray-200 bg-white p-4 dark:white md:p-6">
            <div class="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />

              </a>

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => decrement(3)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-black" bind:value={quantities[3]} readonly />
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => increment(3)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500" on:click={() => removeItem(3)}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-black text-gray-900 hover:underline dark:text-black">สินค้าชิ้นที่4</a>
                <div class="flex items-center gap-4">
                  <p class="text-base font-semibold text-gray-900 dark:text-black">$699</p>
                </div>
              </div>
            </div>
          </div>

          <!-- สินค้าชิ้นที่ 5 -->
          <div class="rounded-lg border border-gray-200 bg-white p-4 dark:white md:p-6">
            <div class="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
              </a>

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => decrement(4)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-black" bind:value={quantities[4]} readonly />
                  <button type="button" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" on:click={() => increment(4)}>
                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500" on:click={() => removeItem(4)}>
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-black text-gray-900 hover:underline dark:text-black">สินค้าชิ้นที่5</a>
                <div class="flex items-center gap-4">
                  <p class="text-base font-semibold text-gray-900 dark:text-black">$1,099</p>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </div>

      <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 dark:black dark:white sm:p-6">
          <p class="text-xl font-black text-gray-900 dark:text-black">Order Summary</p>
    
          <div class="space-y-4">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray">Subtotal</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-black">$7,592.00</dd>
              </dl>
    
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray">Delivery Fee</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-black">$99</dd>
              </dl>
    
              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-base font-bold text-gray-900 dark:text-black">Total</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-black">$8,191.00</dd>
              </dl>
            </div>
    
            <a href="#" class="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-700">Go to Checkout</a>
    
          </div>
        </div>
      </div>
      
    </div>
  </div>

  

  
</section>
