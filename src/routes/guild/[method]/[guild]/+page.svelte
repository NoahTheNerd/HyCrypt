<script lang="ts">
    import { onMount } from 'svelte';

    let supportedMethods = [
        'name',
        'player',
        'username',
        'id'
    ]

    export let data;
    let loaded = false

    let guildData : any;

    onMount(async () => {
        if (!supportedMethods.includes(data.method)) window.location.href = '/guild'

        const guildReq = await fetch(`https://hy.ixnoah.live/guild?${data.method}=${data.guild}`)
        guildReq.json().then(resJson => {
            loaded = true
            guildData = resJson
        })

        console.log(guildData)
    })
</script>

<div class="basic-center h-screen text-white w-screen">
    <div class="glass h-screen px-8 py-20 w-screen sm:w-[90vw] md:w-3/4 lg:w-7/12 rounded-none">
        {#if loaded}
            <div class="flex gap-4 items-baseline">
                <h1 class="text-3xl">Stats for <b>{guildData?.name}</b></h1>
                <span class="uppercase font-semibold text-sm px-4 py-2 bg-minecraft-6 rounded-full bg-opacity-20 text-minecraft-6">{guildData?.guildTag}</span>
            </div>
        {:else}
            <div class="h-full w-full basic-center flex-col gap-2">
                <h1 class="text-4xl font-semibold">Loading...</h1>
                <i>If it takes too long, an error may have occured!</i>
            </div>
        {/if}
    </div>
</div>