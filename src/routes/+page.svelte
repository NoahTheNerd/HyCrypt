<script lang="ts">
    let targetType = 'player'
    let targetName : string = '';

    function search() {
        if (!targetName) return;
        window.location.href = `/${targetType}/${targetName}`
    }
</script>

<div class="basic-center flex-col h-screen text-white gap-2">

<!--    <div class="flex w-[95vw] md:w-[700px] gap-2">-->
<!--        {#if targetType === 'player'}-->
<!--            <div class="search-type-chip bg-indigo-600 bg-opacity-25">Player</div>-->
<!--            <div class="search-type-chip" role="button" tabindex="0" on:click={() => targetType = 'player'}>Guild</div>-->
<!--        {:else if targetType === 'guild'}-->
<!--            <div class="search-type-chip" role="button" tabindex="0" on:click={() => targetType = 'player'}>Player</div>-->
<!--            <div class="search-type-chip bg-indigo-600 bg-opacity-25">Guild</div>-->
<!--        {/if}-->
<!--    </div>-->

    <form class="search-box w-max" on:submit|preventDefault={search}>
        <h1>View Hypixel stats for</h1>
        <input required bind:value={targetName} maxlength="31" type="text" class="outline-none w-[95vw] md:w-[700px] bg-white bg-opacity-10 py-4 font-normal" placeholder="Enter username">
        <button type="submit" class="btn-chip-indigo">Look Up</button>
    </form>
</div>