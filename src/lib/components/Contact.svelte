<!-- src/lib/components/Contact.svelte -->
<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitStatus = null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSubmitting = true;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        submitStatus = 'success';
        formData = { name: '', email: '', message: '' };
      } else {
        submitStatus = 'error';
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
      setTimeout(() => submitStatus = null, 3000);
    }
  };
</script>

<!-- Le reste de votre template reste inchangé -->

<section id="contact" class="py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Get In Touch
      </h2>
      <div class="w-20 h-1 bg-orange-600 mx-auto" ></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-slate-800">
          Let's Connect
        </h3>
        <p class="text-slate-600">
          Feel free to reach out for collaborations or just a friendly hello! 👋
        </p>

        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-medium text-slate-800">Email</h4>
              <a href="mailto:contact@soufiane-lahlou.pro" class="text-orange-600 hover:text-blue-700">
                contact@soufiane-lahlou.pro
              </a>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-medium text-slate-800">Location</h4>
              <p class="text-slate-600">Marrakesh, Morocco</p>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex space-x-4 pt-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <form on:submit={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={formData.name}
              required
              class="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={formData.email}
              required
              class="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              bind:value={formData.message}
              required
              class="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium 
              {isSubmitting ? 'bg-blue-400' : 'bg-orange-600 hover:bg-blue-700'} 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {#if submitStatus === 'success'}
            <p class="text-green-600 text-center">
              Message sent successfully!
            </p>
          {/if}

          {#if submitStatus === 'error'}
            <p class="text-red-600 text-center">
              Failed to send message. Please try again.
            </p>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>