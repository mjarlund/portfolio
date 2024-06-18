<script>
	import { writable } from 'svelte/store';
	import { Icon } from 'svelte-hero-icons';

	export let hoverIcon;
	export let defaultIcon;
	export let size = "32";
	export let link = "#";
	export let label = "";
	export let color = "amber-500"

	let isHovering = writable(false);

	function handleMouseEnter() {
		isHovering.set(true);
	}

	function handleMouseLeave() {
		isHovering.set(false);
	}
</script>

<a href={link}
	 class="text-{color}"
	 aria-label={label}
	 target={"_blank"}
	 on:mouseover={handleMouseEnter}
	 on:mouseout={handleMouseLeave}
	 on:focus={handleMouseEnter}
	 on:blur={handleMouseLeave}>
	<Icon src={$isHovering ? hoverIcon : defaultIcon} size={size} />
</a>
