<script lang="ts">
    import type { LayoutData } from './$types';
    import Navbar from '$lib/navbar/navbar.svelte';
    
    export let data: LayoutData;
</script>

<div>
    <Navbar />
    <slot></slot>
</div>