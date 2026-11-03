<script lang="ts">
	import { cn } from '$lib/utils';
	import { Icon, type IconSource } from 'svelte-hero-icons';

	export let href: string = '#';
	export let defaultIcon: IconSource;
	export let hoverIcon: IconSource;
	export let variant: 'default' | 'primary' | 'secondary' | 'muted' = 'primary';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
	export let label: string = '';
	export let external: boolean = true;

	let isHovering = false;

	function getVariantStyles(variant: string) {
		if (variant === 'primary') return 'text-amber-500 hover:text-amber-600';
		if (variant === 'secondary') return 'text-blue-500 hover:text-blue-600';
		if (variant === 'muted') return 'text-gray-400 hover:text-gray-600';
		return 'text-gray-600 hover:text-gray-900';
	}

	function getIconSize(size: string) {
		if (size === 'sm') return '20';
		if (size === 'md') return '24';
		if (size === 'lg') return '32';
		if (size === 'xl') return '40';
		return '32';
	}

	$: iconClasses = cn(
		'inline-flex items-center justify-center transition-colors duration-200',
		'rounded-md p-1 -m-1',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500',
		getVariantStyles(variant)
	);

	$: currentIcon = isHovering ? hoverIcon : defaultIcon;
	$: iconSize = getIconSize(size);
</script>

<a
	{href}
	class={iconClasses}
	aria-label={label}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	on:mouseenter={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
	on:focus={() => (isHovering = true)}
	on:blur={() => (isHovering = false)}
>
	<Icon src={currentIcon} size={iconSize} />
</a>
