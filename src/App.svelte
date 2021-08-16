<script>
  import Styles from './lib/Styles.svelte'

  import Placeholder from './components/Placeholder.svelte'
  import LeftColumn from './components/LeftColumn.svelte'
  import RightColumn from './components/RightColumn.svelte'
</script>

<Styles />

<main>
  <Placeholder>
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-full overflow-hidden xl:w-1/3">
        <!-- Column Content -->
        <LeftColumn />
      </div>
    
      <div class="w-full overflow-hidden xl:w-2/3">
        <!-- Column Content -->
        <RightColumn />
      </div>
    </div>
    
  </Placeholder>
</main>
