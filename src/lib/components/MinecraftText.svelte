<script lang="ts">
	const colors = {
		'§n': '<span class="underline">',
		'§m': '<span class="strikethrough">',
		'§l': '<span class="font-bold">',
		'§o': '<span class="italic">',

		'§0': '<span class="text-minecraft-0">',
		'§1': '<span class="text-minecraft-1">',
		'§2': '<span class="text-minecraft-2">',
		'§3': '<span class="text-minecraft-3">',
		'§4': '<span class="text-minecraft-4">',
		'§5': '<span class="text-minecraft-5">',
		'§6': '<span class="text-minecraft-6">',
		'§7': '<span class="text-minecraft-7">',
		'§8': '<span class="text-minecraft-8">',
		'§9': '<span class="text-minecraft-9">',
		'§a': '<span class="text-minecraft-a">',
		'§b': '<span class="text-minecraft-b">',
		'§c': '<span class="text-minecraft-c">',
		'§d': '<span class="text-minecraft-d">',
		'§e': '<span class="text-minecraft-e">',
		'§f': '<span class="text-minecraft-f">',
	}

	export let text : string;

	console.log('-')

	text = text.replace(/<([a-z]+)(?![^>]*\/>)[^>]*>/g, '') // Sanitize

	text = text.replace(/&(?=[0-9a-fk-o])/gi, '§') // Replace with competent symbol

	for (const [colorKey, colorTag] of Object.entries(colors)) {
		text = text.replace(new RegExp(colorKey, 'g'), colorTag)
	}

	text += '</span>'.repeat(text.split(/<span class=".*?">/g).length);

</script>

<span class="minecraft">

	{@html text}
</span>