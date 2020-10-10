<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body,
  #sapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 17%,
      rgba(46, 162, 167, 1) 89%
    );
    background-repeat: no-repeat;
  }

  #sapper main {
    flex-grow: 1;
    background: transparent;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply mb-3 font-medium;
  }
  h1 {
    @apply text-3xl mb-6;
  }
  h2 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
  h3 {
    @apply text-lg;
  }

  p {
    @apply mb-3 font-light;
  }
  p b {
    @apply font-semibold;
  }
</style>
