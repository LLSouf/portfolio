<section id="hero" class="min-h-screen content-center">
	<div class="grid grid-cols-3 m-[10vw] place-items-center bg-orange-300 rounded-l-full border-t-4 border-b-4 border-orange-600 w-r-screen -mr-[calc(100vw-100%)] ">
			<div class="bg-orange-300 rounded-l-full">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src="/images/profil.png"
					alt="profile image"
					class="animate-fade-in-up w-[30vw] rounded-full border-4 border-orange-600 shadow-2xl shadow-blue-950"
				/>
			</div>

			<div class="max-w-2xl space-y-6  col-span-2">
				<h1 class="animate-fade-in-up text-4xl font-bold text-black md:text-6xl text-center">
					Hi, I'm <span class="text-orange-600">Soufiane</span>
				</h1>
				<p class="text-lg text-black md:text-xl md:leading-relaxed text-center">
					Making Data Work for You <br class="hidden md:block" />
					Keeping Your Customers Happy
				</p>
				<div class="pt-4 text-center">
					<a
						href="#contact"
						class="inline-block transform rounded-lg bg-orange-600 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:text-white"
					>
						Hire Me
					</a>
				</div>
			</div>
      </div>
</section>

<style global>
	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in-up {
		animation: fade-in-up 1s ease-out;
	}
</style>
