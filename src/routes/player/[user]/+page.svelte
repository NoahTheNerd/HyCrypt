<script lang="ts">
    import {onMount} from "svelte";

    export let data;

    onMount(() => {
        let uuidThatWeMightUseLater;
        fetch('https://api.mojang.com/users/profiles/minecraft/' + data.user).then(async (res) => {
            res = await res.json()

            if (!res?.id) {
                alert('User could not be found by username!')
                window.location.href = '/'
            }

            uuidThatWeMightUseLater = res?.id
        })

        document.querySelector('#favicon')?.setAttribute('href', `https://render.skinmc.net/3d.php?user=${data.user}&vr=0&hr0&hrh=0&aa=&headOnly=true&ratio=50`)
        document.title = data.user + ' | '+ document.title
    })
</script>