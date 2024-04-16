<script lang="ts">
    import { onMount } from 'svelte';
    import Bar from '$lib/components/Bar.svelte';

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
    <div class="flex flex-col gap-8 glass h-screen py-20 w-screen sm:w-[90vw] md:w-3/4 lg:w-7/12 rounded-none">
        {#if loaded}
            <div class="px-8">
                <div class="flex gap-4 items-baseline">
                    <h1 class="text-3xl">Stats for <strong class="font-semibold">{guildData?.name}</strong></h1>
                </div>

                <div class="[&>*]:mr-4 font-semibold flex text-sm">
                    <div>
                        <span class="text-neutral-300">Created on:</span>
                        <span class="text-neutral-100">{new Date(guildData.created).toLocaleDateString('en-GB')}</span>
                    </div>
                    <div>
                        <span class="text-neutral-300">Members:</span>
                        <span class="text-neutral-100">{guildData.members.length}</span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-black bg-opacity-20 py-4 px-8">
                <Bar
                        altname="Guild Level"
                        data={{ unit: 'XP', val: guildData.exp, max: guildData.expNeeded }}
                        percentFilled={guildData.levelProgressPercent}
                        src="/resources/media/icons/px_level.png"
                />
                <div class="[&>*]:mr-4 font-semibold flex text-sm">
                    <div>
                        <span class="text-neutral-300">Daily XP Record:</span>
                        <span class="text-neutral-100">{guildData.achievements.EXPERIENCE_KINGS.toLocaleString('en-GB')}</span>
                    </div>
                    <div>
                        <span class="text-neutral-300">Daily Wins Record:</span>
                        <span class="text-neutral-100">{guildData.achievements.WINNERS.toLocaleString('en-GB')}</span>
                    </div>
                    <div>
                        <span class="text-neutral-300">Online Players Record:</span>
                        <span class="text-neutral-100">{guildData.achievements.ONLINE_PLAYERS.toLocaleString('en-GB')}</span>
                    </div>
                </div>
            </div>


        {:else}
            <div class="h-full w-full basic-center flex-col gap-2">
                <h1 class="text-4xl font-semibold">Loading...</h1>
                <i>If it takes too long, an error may have occured!</i>
            </div>
        {/if}
    </div>
</div>