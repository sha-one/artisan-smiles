<script>
  import Testimonial from '../components/Testimonial.svelte'
  import Section from '../components/Section.svelte'
</script>

<svelte:head>
  <title>Artisan Smiles Dental Lab</title>
  <style>
    #sapper {
      background: white;
    }
    nav {
      border-bottom: 1px solid transparent !important;
      font-weight: 300;
      /* padding: 0 1em; */
      background: white;
    }
  </style>
</svelte:head>
<br />
<p class="text-center font-bold text-xl">PHILIP DOBINSON</p>
<img class="w-full max-w-3xl m-auto" alt="logo" src="artisan-smiles-logo.png" />
<br />
<br />

<h1 class="tracking-wider text-center">Welcome to Artisan Smiles</h1>
<p class="text-center -mt-4  text-lg font-medium">
  The North East
  <b class="text-as-green">Premier Dental Laboratory</b><br />
  <br />
  <span class="text-gray-600 italic">Where Craftsmanship, Quality & perfection
    come together</span>
</p>

<br />
<br />
<hr />
<Section>
  <img
    class="bg-image w-full absolute left-0 right-0 top-0 invisible sm:visible"
    src="image1.jpeg"
    alt="smile & teeth"
    width="600" />
  <div
    class="text-center section-content m-auto max-w-2xl px-6 pt-4 relative md:pt-16">
    <h3>Cosmetic, Restorative and Implant Dental Services</h3>
    <p>
      With 30 years experience, I recently set up Artisan Smiles with the aim to
      attract a select clientele. So I can concentrate on delivering exceptional
      quality control with customer satisfaction and build a loyal working
      relationship with reliability.
    </p>
    <br />
    <br />
    <img
      class="float-none m-auto mb-6 z-10"
      src="philip-dobinson.png"
      alt="Philip dobinson portrait"
      width="280" />
    <br />
    <p>
      For my information please download my
      <a href="ArtisanSmiles_Brochure.pdf" target="_blank">brochure</a>
      and connect with me on
      <a
        href="https://uk.linkedin.com/in/phildobinson"
        target="_blank">LinkedIn</a>
    </p>
  </div>
</Section>

<br />

<hr />

<br />
<br />
<h2 class="text-center text-as-green">Request a sample case</h2>
<br />
<Section>
  <div class="text-center section-content m-auto max-w-2xl">
    <p>
      You can request a sample case to be dropped at your practice to see and
      feel the quality of the product. Thoroughly disinfected after each visit.
    </p>
    <br />
    <img
      class="float-none m-auto mb-6"
      src="case.jpeg"
      alt="sample case"
      width="480" />
    <br />
  </div>
</Section>

<br />
<hr />
<br />
<br />
<h2 class="text-center text-as-green">Testimonials</h2>
<br />
<!-- Testimonials -->
<Testimonial name="Srini Krishnamurthi Monkseaton Dental Practice.">
  I have been using Artisan Smiles for private work for over a year now. I am
  very impressed with Phil’s work. He is very experienced technician and is
  extremely professional. The service I have received has been of a very high
  standard and never have to worry about the work been back on time. I am
  extremely pleased with Artisan Smiles and would definitely recommend this
  laboratory.
</Testimonial>
<Testimonial name="Joanne Duggan Bedlingtonshire Dental
Practice.">
  I have been incredibly happy with the work received from Artisan Smiles. Phil
  performs all the stages of his work and is good at communicating with the
  dentist, ensuring an enhanced product and service.
</Testimonial>

<hr />

<br />
<br />
<h2 class="text-center text-as-green">Special services & discounts</h2>
<br />
<Section>
  <div class="text-center section-content">
    <p>Available on certain products, <i>for example:</i></p>
    <p>
      <b>24hr turnaround on 2 unit cases</b>
      ideal for screw retained implants, and
      <b>up to 5 days for more units</b>
    </p>
    <br />
    <div class="flex flex-row flex-wrap">
      <img
        class="float-none m-auto mb-6 w-full md:w-3/6"
        src="image13.jpeg"
        alt="single tooth"
        width="380" />
      <img
        class="float-none m-auto mb-6 w-full md:w-3/6"
        src="image12.jpeg"
        alt="multiple teeth"
        width="380" />
    </div>
    <br />
  </div>
</Section>

<hr />

<br />
<br />
<h2 class="text-center text-as-green">Associates & skills</h2>
<br />
<!-- <Section>
  <div class="text-center section-content m-auto max-w-2xl">
    <img
      class="float-none m-auto mb-6"
      src="logo-ids.jpeg"
      alt="IDS logo"
      width="200" />
    <h3>IDS - Prosthetics Specialist</h3>
  </div>
</Section> -->
<br />
<Section>
  <div
    class="flex flex-row flex-wrap justify-items-center text-center section-content">
    <img
      class="float-none m-auto mb-6"
      src="logo-straumann.jpeg"
      alt="logo straumann"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-vita.jpeg"
      alt="logo vita"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-ids.jpeg"
      alt="IDS logo"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-dentsply.jpeg"
      alt="logo dentsply"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-emax.jpeg"
      alt="logo emax"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-ivoclar.jpeg"
      alt="logo ivoclar"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-duceram.jpeg"
      alt="logo deceram"
      width="200" />
    <img
      class="float-none m-auto mb-6"
      src="logo-nobel.jpeg"
      alt="logo nobel"
      width="200" />

    <br />
  </div>
</Section>

<style>
  a {
    color: #a1465e;
    font-weight: 700;
  }
  .bg-image {
    opacity: 0.4;
    /* z-index: -1; */
  }
</style>
