<script>
  export let segment
</script>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li>
    <li>
      <a
        aria-current={segment === 'services' ? 'page' : undefined}
        href="services">services</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid transparent;
    /* border-bottom: 1px solid #236c6e; */
    font-weight: 300;
    /* padding: 0 1em; */
    background: white;
  }

  ul {
    margin: auto;
    max-width: 1200px;
    padding: 0 2rem;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 3px;
    background-color: #a1465e;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
