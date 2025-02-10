<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Education from '$lib/components/Education.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>
  
  <div class="scroll-smooth">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Contact />
    <Footer />
  </div>