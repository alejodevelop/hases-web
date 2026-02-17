<script lang="ts">
    import type { LayoutData } from './$types';
    import Navbar from '$lib/navbar/navbar.svelte';
    
    interface Props {
        data: LayoutData;
        children?: import('svelte').Snippet;
    }

    let { data, children }: Props = $props();
</script>

<div>
    <Navbar />
    {@render children?.()}
</div>