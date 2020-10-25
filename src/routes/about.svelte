<script>
  import Section from '../components/Section.svelte'
  import TitleBlock from '../components/TitleBlock.svelte'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1 class="tracking-wider text-white text-center text-5xl">
  About Artisan Smiles
</h1>
<br />

<Section>
  <div class="section-content m-auto">
    <h3>Cosmetic, Restorative and Implant Dental Services</h3>
    <p>
      As a new business we would like to thank you for requesting an information
      guide and price list for our services. We would be pleased to discuss your
      requirements and look forward to being of service to you in the future.
    </p>
  </div>
</Section>

<Section>
  <div class="section-content m-auto">
    <img
      class="float-none m-auto mb-6 md:float-left md:mr-6 "
      src="philip-dobinson.png"
      alt="placeholder"
      width="280" />
    <p class="clear-both md:clear-none">
      <b>Philip Dobinson</b>
      Philip Dobinson (founder) has been employed in the dental technology ﬁeld
      for over 30 years and specialises in cosmetic and implantology.
    </p>
    <p class="clear-both md:clear-none">
      He has worked in referral dental clinics providing face to face
      consultations, implementing care plans using strategic client management
      to ensure successful outcomes for clients and aftercare plans.
    </p>
    <p class="clear-both">
      Artisan Smiles believes that high standards and using evolving techniques
      will provide a unique handcrafted product for clients. Good communication
      skills ensure that products are made to exceed expectations and deliver on
      the smile.
    </p>
  </div>
</Section>

<Section>
  <div class="section-content m-auto">
    <img class="mb-6" src="case.jpeg" alt="demo case" />
  </div>
</Section>

<style>
  .section-content {
    padding-left: 1.333rem;
    padding-right: 1.333rem;
    max-width: 800px;
  }
  .section-content p span {
    float: right;
    /* padding-right: 1.333rem; */
  }
</style>
