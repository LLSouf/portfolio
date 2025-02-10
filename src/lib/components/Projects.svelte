<script>
  import { projects } from '../../utils/projects';
</script>

<section id="projects" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Featured Projects
      </h2>
      <div class="w-20 h-1 bg-orange-600 mx-auto"></div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <!-- Project Image -->
          <div class="relative overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path 
                    fill-rule="evenodd" 
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" 
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-slate-800 mb-2">
              {project.title}
            </h3>
            <p class="text-slate-600 mb-4">
              {project.description}
            </p>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>