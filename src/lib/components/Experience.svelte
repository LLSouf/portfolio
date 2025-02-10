<script>
  import { experiences } from '../../utils/experience.js';
  
  let showAll = false;
  
  // Get the last 3 experiences
  $: visibleExperiences = showAll 
    ? experiences 
    : experiences.slice(0, 3);

  const toggleShowAll = () => {
    showAll = !showAll;
  };
</script>

<section id="experience" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Work Experience
      </h2>
      <div class="w-20 h-1 bg-orange-600 mx-auto" />
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-slate-200" />

      <!-- Experience Items -->
      {#each visibleExperiences as exp, index}
        <div class="relative mb-12">
          <div class="flex flex-col md:flex-row items-center {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
            <!-- Timeline dot -->
            <div class="absolute left-4 md:left-1/2 transform -translate-y-4 md:-translate-x-1.5 w-3 h-3 bg-orange-600 rounded-full" />

            <!-- Content -->
            <div class="ml-12 md:ml-0 md:w-1/2 {index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}">
              <div class="p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="flex flex-wrap items-center justify-between mb-2">
                  <h3 class="text-xl font-bold text-slate-800">
                    {exp.role}
                  </h3>
                  <span class="text-orange-600 font-medium">
                    {exp.duration}
                  </span>
                </div>
                
                <div class="mb-4">
                  {#if exp.company}
                    <div class="text-slate-600 font-medium">
                      {exp.company}
                    </div>
                  {/if}
                  <div class="text-slate-500 text-sm">
                    {exp.location}
                  </div>
                </div>

                <ul class="list-disc list-inside space-y-2 mb-4 text-slate-600">
                  {#each exp.description as item}
                    <li class="text-sm">
                      {item}
                    </li>
                  {/each}
                </ul>

                {#if exp.technologies && exp.technologies.length > 0}
                  <div class="flex flex-wrap gap-2">
                    {#each exp.technologies as tech}
                      <span class="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">
                        {tech}
                      </span>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Show More Button -->
    {#if experiences.length > 3}
      <div class="text-center mt-12">
        <button
          on:click={toggleShowAll}
          class="group inline-flex items-center px-8 py-3 bg-orange-200 text-black hover:bg-orange-600 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          <span>{showAll ? 'Show Less' : `Show More (${experiences.length - 3} more)`}</span>
          <svg 
            class="w-5 h-5 ml-2 transform transition-transform duration-300 {showAll ? 'rotate-180' : ''}" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    {/if}
  </div>
</section>