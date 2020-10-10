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
  <div class="section-content">
    <h3>Cosmetic, Restorative and Implant Dental Services</h3>
    <p>
      As a new business we would like to thank you for requesting aninformation
      guide and price list for our services. We would be pleased todiscuss your
      requirements and look forward to being of service to you inthe future.
    </p>
  </div>
</Section>

<Section>
  <div class="section-content">
    <img
      class="float-left mr-6 mb-6"
      src="philip-dobinson.png"
      alt="placeholder"
      width="280" />
    <p class="clear-both md:clear-none">
      <b>Philip Dobinson</b>
      Philip Dobinson (founder) has been employed inthe dental technology ﬁeld
      for over 30 years and specialises in cosmetic and implantology.
    </p>
    <p class="clear-both md:clear-none">
      He has worked in referral dental clinics providingface to face
      consultations, implementing careplans using strategic client management
      toensure successful outcomes for clients and aftercare plans.
    </p>
    <p class="clear-both">
      Artisan Smiles believes that high standards and using evolving techniques
      will provide a unique handcrafted product for clients. Good communication
      skills ensure that products are made to exceedexpectations and deliver on
      the smile.
    </p>
  </div>
</Section>

<Section>
  <img
    class="float-left mr-6 mb-6"
    src="https://via.placeholder.com/1200x400"
    alt="placeholder" />
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
