<script lang="ts">
    import {onMount} from "svelte";

    export let data;



    onMount(() => {
        document.querySelector('#favicon')?.setAttribute('href', `https://render.skinmc.net/3d.php?user=${data.user}&vr=0&hr0&hrh=0&aa=&headOnly=true&ratio=50`)
        document.title = data.user + ' | '+ document.title
    })
</script>