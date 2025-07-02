<script lang="ts">
import { cn } from '$lib/utils';

export let className: string = '';
export let as: string = 'div';
export let variant: 'default' | 'prose' | 'card' | 'plain' = 'default';
export let container: boolean = true;
export let maxWidth: string | false = 'max-w-4xl';
export let flex: boolean | string = true;
export let flexDir: string = 'flex-col';
export let gap: string | false = 'gap-4';
export let text: 'text-justify' | 'text-center' | false = 'text-center';
export let p: string | false = false;
export let m: string | false = false;
export let rounded: string | false = false;

const variantStyles = {
	default: '',
	prose: 'prose prose-lg dark:prose-invert',
	card: 'bg-white dark:bg-gray-900 shadow rounded-lg p-6',
	plain: '',
};

$: containerClasses = cn(
	container && 'container',
	variant && variantStyles[variant],
	flex && (typeof flex === 'string' ? flex : 'flex'),
	flex && flexDir,
	maxWidth && maxWidth,
	gap && gap,
	text && text,
	p && p,
	m && m,
	rounded && rounded,
	className
);
</script>

<svelte:element this={as} class={containerClasses} {...$$restProps}>
	<slot />
</svelte:element>
