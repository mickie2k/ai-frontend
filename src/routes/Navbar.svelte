<script>
    import { resultProductID } from './store.js'
    import { env } from '$env/dynamic/public'
    let search = ""
	async function handleOnSubmit() {
        let result = []
        try {
            const response = await fetch(env.PUBLIC_URL+"searchbyname?" + new URLSearchParams({
				name: search}),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
					'ngrok-skip-browser-warning': true 
                },
            })
                  result = await response.json();
               
        } catch (error) {
            alert("Products not found. Please check the spelling or try again.")
            console.log("Error")
        }
        




        resultProductID.set(result)
         
	}
</script>

<header class="px-32 py-6 flex justify-center gap-10 items-center bg-white ">
    <a class="text-3xl font-bold" href="/">
        FASHIONIST
    </a>
    <form action="" class="w-full" on:submit={handleOnSubmit}>
        <div class="relative align-text-bottom ">
             <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
          
                <input type="text" class=" block bg-[#F0F0F0]  px-4 ps-10 py-3 w-full text-base rounded-full"   bind:value={search}  placeholder="Search">
          
        </div>
        
    </form>
    
    <a href="/cart">
        <span>Cart</span>
    </a>

</header>

<style>

</style>