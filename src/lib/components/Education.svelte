<script>
  import { education } from '../../utils/education';
</script>

<section id="education" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Education Background
      </h2>
      <div class="w-20 h-1 bg-orange-600 mx-auto" />
    </div>

    <!-- Education Cards - Changed to grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {#each education as edu (edu.id)}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="p-8">
            <div class="flex flex-wrap items-center justify-between mb-6">
              <div class="mb-4 md:mb-0">
                <h3 class="text-2xl font-bold text-slate-800 mb-2">
                  {edu.degree}
                </h3>
                <div class="text-lg text-orange-600 font-semibold">
                  {edu.school}
                </div>
              </div>
              <div class="text-right">
                <div class="text-slate-600 font-medium">
                  {edu.duration}
                </div>
                <div class="text-slate-500">
                  {edu.location}
                </div>
                {#if edu.gpa}
                  <div class="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Score: {edu.gpa}
                  </div>
                {/if}
              </div>
            </div>

            <!-- Highlights -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-slate-800 mb-3">
                Key Subjects & Skills
              </h4>
              <div class="flex flex-wrap gap-2">
                {#each edu.highlights as highlight}
                  <span class="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">
                    {highlight}
                  </span>
                {/each}
              </div>
            </div>

            <!-- Achievements -->
            {#if edu.achievements}
              <div>
                <h4 class="text-lg font-semibold text-slate-800 mb-3">
                  Achievements
                </h4>
                <ul class="list-disc list-inside space-y-2">
                  {#each edu.achievements as achievement}
                    <li class="text-slate-600">
                      {achievement}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>