<script lang="ts">
    import {page} from "$app/stores";
</script>

<div class="basic-center h-screen text-white">
    <div class="flex flex-col gap-8 glass p-8 text-center w-96 items-center">
        <div>
            <h1 class="font-bold text-2xl">Error: {$page.status}</h1>
            <p>{$page?.error?.message}</p>
        </div>
        <a class="btn-chip-indigo" href="/">Homepage</a>
    </div>
</div>