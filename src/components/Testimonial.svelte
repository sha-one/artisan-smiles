<script>
  // your script goes here
  export let name = 'Quote Name'
</script>

<section class="relative mb-20 ml-auto mr-auto max-w-lg">
  <span class="quote block absolute font-serif text-as-green">"</span>
  <p class="px-8 ">
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo
      dolore provident libero perferendis, quasi illum at, mollitia natus fuga
      laboriosam, quas quo in cumque. Eveniet animi totam rerum quod?
    </slot>
  </p>
  <span class="quote quote-end block absolute font-serif text-as-green">"</span>

  <p class="text-center font-medium text-as-green">{name}</p>
</section>

<style>
  .quote {
    font-size: 3.5rem;
    padding: 0;
    height: 1.5rem;
    width: 1.5rem;
    line-height: 1;
    top: 0;
  }
  .quote-end {
    right: 0;
    bottom: 3rem;
    top: initial;
  }
</style>
