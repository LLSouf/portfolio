<script lang="ts">
    const links = [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ];
  </script>
  
  <nav class="fixed w-full bg-orange-300 top-0 backdrop-blur-sm z-50 shadow-2xl shadow-blue-950 border-b-2 border-orange-600">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="#hero" class="text-xl font-bold text-black hover:text-blue-400 transition-colors">
          My Portfolio
        </a>
        
        <ul class="hidden md:flex space-x-8">
          {#each links as link}
            <li>
              <a 
                href={link.href} 
                class="text-slate-800 font-bold hover:text-black px-3 py-2 transition-colors"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>