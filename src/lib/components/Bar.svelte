<script lang="ts">
    const numformat = {
        compact: Intl.NumberFormat('en-GB', { notation: 'compact', maximumFractionDigits: 2, }),
        standard: Intl.NumberFormat('en-GB', { notation: 'standard', maximumFractionDigits: 2 })
    }

    export let percentFilled;
    export let data = { unit: 'UNKNOWN', val: 0, max: 100000 };

    export let altname = 'unknown';
    export let src;

    let barLabel = {
        isShort: true,
        text: `${numformat.compact.format(data.val)} / ${numformat.compact.format(data.max)} ${data.unit}`
    }

    function swapBarLabel() {
        if (barLabel.isShort) {
            barLabel = {
                isShort: false,
                text: `${numformat.standard.format(data.val)} / ${numformat.standard.format(data.max)} ${data.unit}`
            } // long
        } else {
            barLabel = {
                isShort: true,
                text: `${numformat.compact.format(data.val)} / ${numformat.compact.format(data.max)} ${data.unit}`
            } // short
        }
    }

</script>

<div class="flex items-center my-2 h-8">

    <div class="z-10 drop-shadow-lg bg-indigo-500 aspect-square w-8 rounded-full p-1"><img {src} alt="Icon for {altname} progress bar" class="w-8 aspect-square"/></div>
    <div class="h-full w-full flex flex-col">
        <div class="w-full h-1/2 pl-2">level: 54</div>
        <div class="w-full text-sm flex h-1/2 font-semibold items-center -translate-x-4 rounded-r-full bg-black bg-opacity-40 overflow-clip">
            <span class="absolute w-full text-center cursor-default"
                  on:mouseenter={swapBarLabel}
                  on:mouseleave={swapBarLabel}
                  on:blur={swapBarLabel}
                  on:focus={swapBarLabel}
                  role="progressbar">
                {barLabel.text}
            </span>
            <div class="h-full bg-indigo-700 rounded-r-full" style="width: {percentFilled}%"/>
        </div>
    </div>
</div>