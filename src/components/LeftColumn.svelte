<script>
    import { onMount } from 'svelte';
    import { createScene } from "../js/scene";
    let el;
    import avatar from '../assets/svelte.png';

    onMount(() => {
        createScene(el)
    });
</script>

<canvas bind:this={el}></canvas>