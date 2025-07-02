<script lang="ts">
	import { cn } from '$lib/utils';

	type SectionVariant = 'primary' | 'secondary' | 'default';
	type SectionSize = 'screen' | 'min-screen' | 'auto';

	export let variant: SectionVariant = 'primary';
	export let size: SectionSize = 'screen';
	let className: string = '';
	export { className as class };

	const variantStyles: Record<SectionVariant, string> = {
        primary: 'bg-gray-800 text-white',
        secondary: 'bg-amber-100 text-gray-900',
		default: 'bg-white text-gray-900'
	};

	const sizeStyles: Record<SectionSize, string> = {
		screen: 'h-screen',
		'min-screen': 'min-h-screen',
		auto: 'h-auto'
	};

	$: sectionClasses = cn(
		// Base styles
		'flex snap-start snap-always flex-col items-center justify-center p-6',
		// Size variant
		sizeStyles[size],
		// Color variant
		variantStyles[variant],
		// Custom classes
		className
	);
</script>

<section class={sectionClasses} {...$$restProps}>
	<slot />
</section>
