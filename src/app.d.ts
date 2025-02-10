// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface ImportMetaEnv {
		VITE_PUBLIC_ZOHO_MAIL: string;
		VITE_PRIVATE_ZOHO_PASSWORD: string;
	  }
	}


export {};
