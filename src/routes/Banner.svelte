<script>

    import preview from '$lib/images/Preview.webp';
    let input
    let image
    let show = false

    function onChange(){
        const files = input.files[0];
		
        if(files){
            show = true
            const fileReader = new FileReader()
            fileReader.addEventListener("load" ,function(){
                image.setAttribute("src", fileReader.result)
            })
            fileReader.readAsDataURL(files)

            return
        }else{
            show = false
        }
       
    }

</script>

<div class="w-full h-[50rem] ">
    <div class="grid grid-cols-2 h-full">
        <div class="h-full flex flex-col justify-center px-32 items-center bg-[#F2F0F1]">
            <h1 class="text-6xl text-left text-black font-bold">
                UPLOAD YOUR
                CLOTH IMAGE
            </h1>
            <span>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</span>
        </div>
        <div class="bg-[#242424] text-white h-full flex flex-col justify-center items-center ">
            <div class="flex w-[500px] h-[500px] overflow-hidden border-none mb-8 justify-center items-center">
                {#if show == true}
                <img bind:this={image} class="w-full h-full object-contain border-none" alt=" ">
                {:else}
                <img src={preview} class="h-32 w-32 border-none" alt="Preview">
                {/if}

            </div>
            <div class="flex flex-col items-center gap-4">
                <!-- <span class="text-3xl">Drag and drop file here</span> -->
                
                <input class="hidden" type="file" accept="image/png, image/jpeg" id="file-upload" bind:this={input} on:change={onChange}/>
                <label for="file-upload" class=" py-3 px-14 border rounded-full max-w-fit bottom-0 cursor-pointer"> Browse File </label>
                <button>Submit</button>
            </div>
            
        </div>
    </div>

</div>