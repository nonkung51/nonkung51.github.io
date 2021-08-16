<script>
    import avatar from '../assets/avatar.jpg';

    const MAX_PAGE = 4;
    const CONTINUE_TEXTS = ['Continue 👉', 'Next Next Next!!! 👉', 'Oh! There\s more! 👉', 'Go back to page 1 ✌️'];

    let currentPage = 1;

    function handleContinue() {
        if (currentPage < MAX_PAGE) {
            currentPage += 1;
        } else {
            currentPage = 1;
        }
	}
</script>

<div class="m-16 p-12 mt-48">
    {#if currentPage == 1}
    <h1 class="text-4xl underline font-bold my-4">Hello! 👋</h1>
    <p class="text-2xl my-2">I am Nonthakon Jitchiranant</p>
    <p class="text-lg my-2 w-2/3">I am currently in Computer Engineering program at King's Mingkut Insitute of Technology Latkrabang (KMITL).</p>
    <p class="text-lg my-2 w-2/3"></p>
    <img class="ml-auto w-32 h-32 rounded-full" src="{avatar}" alt="Avatar" />

    {/if}

    {#if currentPage == 2}
        <h1 class="text-4xl underline font-bold my-4">Web Development 💻👨‍💻</h1>
        <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus. Voluptatem reiciendis, esse adipisci officia, vitae dolores officiis, aliquid sequi tempore incidunt mollitia perspiciatis praesentium saepe sit!</p>
        <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus! Voluptatem reiciendis, esse adipisci officia.</p>

        <div class="h-32"></div>
    {/if}

    {#if currentPage == 3}
        <h1 class="text-4xl underline font-bold my-4">Others 🤖🔗</h1>
        <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus. Voluptatem reiciendis, esse adipisci officia, vitae dolores officiis, aliquid sequi tempore incidunt mollitia perspiciatis praesentium saepe sit!</p>
        <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus! Voluptatem reiciendis, esse adipisci officia.</p>

        <div class="h-32"></div>
    {/if}

    {#if currentPage == 4}
        <h1 class="text-4xl underline font-bold my-4">More... 🧐</h1>
        <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus. Voluptatem reiciendis, esse adipisci officia, vitae dolores officiis, aliquid sequi tempore incidunt mollitia perspiciatis praesentium saepe sit!</p>
        <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus! Voluptatem reiciendis, esse adipisci officia.</p>

        <div class="h-32"></div>
    {/if}

    <p>
        Current Page { currentPage } / { MAX_PAGE } 
    </p>
    <p 
        class="ml-auto text-blue-400 underline cursor-pointer" 
        on:click={handleContinue}
    >
        {CONTINUE_TEXTS[currentPage - 1]}
    </p>
</div>