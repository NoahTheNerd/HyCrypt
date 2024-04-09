<script lang="ts">
    let targetType = 'player'
    let targetName : string = '';

    function search() {
        if (!targetName) return;
        window.location.href = `/${targetType}/${targetName}`
    }
</script>

<div class="basic-center h-screen text-white">
    <form class="search-box" on:submit|preventDefault={search}>
        <h1>View Hypixel stats for</h1>
        <input required bind:value={targetName} maxlength="31" type="text" class="outline-none w-[95vw] sm:w-[512px] bg-white bg-opacity-10 py-4 font-normal" placeholder="Enter username">
        <button type="submit" class="btn-chip-indigo">Look Up</button>
    </form>
</div>