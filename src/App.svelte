<script>
  import Styles from './lib/Styles.svelte'

  import Placeholder from './components/Placeholder.svelte'
</script>

<Styles />

<main>
  <Placeholder>
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-full overflow-hidden xl:w-1/2">
        <!-- Column Content -->
      </div>
    
      <div class="w-full overflow-hidden xl:w-1/2">
        <!-- Column Content -->
        <div class="m-16 p-12 mt-48">
          <h1 class="text-4xl underline font-bold my-4">Hello!</h1>
          <p class="text-2xl my-2">I am Nonthakon Jitchiranant</p>
          <p class="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit quas at repellendus. Voluptatem reiciendis, esse adipisci officia, vitae dolores officiis, aliquid sequi tempore incidunt mollitia perspiciatis praesentium saepe sit!</p>
        </div>
        
      </div>
    </div>
    
  </Placeholder>
</main>
