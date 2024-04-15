<script lang="ts">
    import "../app.css";
    import {onMount} from "svelte";

    const logoVariants = [
        'logo',
        'progress',
        'trans',
        'bisexual',
        'enby',
        'lesbian',
        'gay',
        'genderfluid',
        'pan',
    ]

    let logoVariant = 'logo'

    onMount(() => {
        logoVariant = localStorage.getItem('logoVariant') || 'logo'
        document.querySelector('#pride-logo')?.setAttribute('class', logoVariant + ' generic-logo')
    })

    function cycleLogo() {
        let logoVariant = localStorage.getItem('logoVariant') || 'logo'
        logoVariant = logoVariants[logoVariants.indexOf(logoVariant) + 1] || logoVariants[0]

        document.querySelector('#pride-logo')?.setAttribute('class', logoVariant + ' generic-logo')

        localStorage.setItem('logoVariant', logoVariant)
    }

</script>


<header class="fixed drop-shadow-lg w-full h-[32px] sm:h-[48px] z-[99] px-2   flex justify-center sm:justify-between items-center   bg-neutral-800 text-neutral-100 font-semibold">
    <!--Pride Flag Logo-->
    <div class="flex gap-2 items-center">
        <div id="pride-logo" class="generic-logo" on:click={cycleLogo} on:keydown={cycleLogo} role="button" tabindex="-1"/>
        <a href="/">HyCrypt</a>
    </div>
    <a class="btn-chip-gray hidden sm:flex" href="https://github.com/NoahTheNerd">GitHub</a>
</header>

<slot/>