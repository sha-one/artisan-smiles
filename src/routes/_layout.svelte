<script>
  import Tailwindcss from '../components/Tailwindcss.svelte'
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment
</script>

<Tailwindcss />

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    position: relative;
    max-width: 1200px;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
