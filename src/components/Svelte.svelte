<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition'
    import Sched from './Sched.jsx'
    
    let visible = false
    onMount(() =>{
        visible = true
    })
</script>

{#if visible}
<div transition:fly={{ y: 120, duration: 600 }} >
    <Sched name="y13-comb"/>
</div>

{/if}

<style lang="postcss">  

</style>