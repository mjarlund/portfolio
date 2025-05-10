<script>
	let name = '';
	let message = '';

	function handleSubmit() {
		window.location.href = `mailto:mail@mjarlund.dk?subject=Freelance Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
	}
</script>

<form class="max-w-lg w-full mx-auto" on:submit|preventDefault={handleSubmit}>
	<div class="mb-6">
		<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="name"> Name </label>
		<input
			class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="name"
			type="text"
			placeholder="Your Name"
			bind:value={name}
		/>
	</div>
	<div class="mb-6">
		<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="message">
			Message
		</label>
		<textarea
			class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			id="message"
			rows="8"
			placeholder="Your Message"
			bind:value={message}
		></textarea>
	</div>
	<div class="flex items-center justify-center">
		<button
			class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="submit"
		>
			Send Email
		</button>
	</div>
</form>
