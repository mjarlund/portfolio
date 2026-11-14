<script>
	import { site } from '$lib/site';
</script>

<svelte:head>
	<title>Maria &amp; Mikkel · Vores bryllup</title>
	<meta name="robots" content="noindex" />
	<meta
		name="description"
		content="Maria &amp; Mikkel inviterer til kirkelig velsignelse og fest lørdag den 22. maj 2027."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Maria &amp; Mikkel · Vores bryllup" />
	<meta
		property="og:description"
		content="Maria &amp; Mikkel inviterer til kirkelig velsignelse og fest lørdag den 22. maj 2027."
	/>
	<meta property="og:url" content="{site.url}/bryllup" />
	<meta property="og:image" content="{site.url}/bryllup/hero.webp" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Pinyon+Script&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wedding" lang="da">
	<!-- ================= HEADER ================= -->
	<header class="wrap top">
		<p class="script">Vi siger ja igen</p>
		<h1>Maria <em>og</em> Mikkel</h1>
		<p class="caps surname">Lodahl Jarlund</p>
		<p class="caps date">Lørdag den 22. maj 2027</p>
		<nav class="quicklinks" aria-label="Genveje">
			<a href="#info">Program</a>
			<a href="#hotels">Overnatning</a>
			<a href="#wishlist">Ønskeliste</a>
			<a href="#svar">Svar</a>
		</nav>
	</header>

	<div class="wrap">
		<div class="photo">
			<img
				src="/bryllup/hero.webp"
				width="1024"
				height="700"
				alt="Maria og Mikkel holder i hånd ved et bord med udsigt over vinmarker"
			/>
		</div>
	</div>

	<section class="wrap narrow">
		<p class="story">
			Vi blev gift på Ebeltoft Rådhus den 8. november 2025. Nu vil vi også sige ja til
			hinanden i kirken og holde den fest, vi ikke nåede dengang. Vi glæder os til at fejre
			dagen sammen med jer.
		</p>
	</section>

	<!-- ================= PROGRAM ================= -->
	<section id="info" class="wrap">
		<h2>Dagens program</h2>
		<hr class="rule" />
		<p>To stop på samme dag: først kirken, så festen.</p>
		<div class="cards">
			<a
				class="card"
				href="https://maps.google.com/?q=Bregnet+Kirke,+Kirkebakken+2A,+Kalø,+8410+Rønde"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p class="caps">Velsignelsen</p>
				<h3>Bregnet Kirke</h3>
				<p class="when">Kl. 15.00</p>
				<p>Kirkebakken 2A, Kalø<br />8410 Rønde</p>
				<p class="more">Vis på kort</p>
			</a>
			<a
				class="card"
				href="https://maps.google.com/?q=Rodskov+Forsamlingshus,+Hovgårdvej+3,+8543+Hornslet"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p class="caps">Festen</p>
				<h3>Rodskov Forsamlingshus</h3>
				<p class="when">Efter velsignelsen</p>
				<p>Hovgårdvej 3<br />8543 Hornslet</p>
				<p class="more">Vis på kort</p>
			</a>
		</div>
		<p class="dresscode">Påklædning: festtøj</p>
	</section>

	<!-- ================= STAY ================= -->
	<section id="hotels" class="wrap">
		<h2>Overnatning</h2>
		<hr class="rule" />
		<p>Kommer I langvejs fra, er her tre forslag tæt på kirken og festen.</p>
		<div class="cards">
			<a
				class="card"
				href="https://danhostelronde.dk"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>Danhostel Rønde</h3>
				<p>Vandrehjem med udsigt over Kalø Vig.</p>
				<p>Grenåvej 10 B, 8410 Rønde</p>
				<p class="more">Se mere</p>
			</a>
			<a
				class="card"
				href="https://www.dansommer.dk/danmark/djursland/foelle-strand"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>Sommerhus ved Følle Strand</h3>
				<p>Godt, hvis I er flere, der vil bo sammen.</p>
				<p>Følle Strand, 8410 Rønde</p>
				<p class="more">Se mere</p>
			</a>
			<a
				class="card"
				href="https://lergravgaard.dk"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>Lergravgaard</h3>
				<p>Bed &amp; breakfast og ferielejligheder, cirka 5 minutter fra festen.</p>
				<p>Strandvejen 154, 8410 Rønde</p>
				<p class="more">Se mere</p>
			</a>
		</div>
	</section>

	<!-- ================= WISH ================= -->
	<section id="wishlist" class="wrap narrow">
		<h2>Ønskeliste</h2>
		<hr class="rule" />
		<p>
			Jeres selskab er den bedste gave. Har I alligevel lyst til at give os noget, har vi
			samlet et par ønsker.
		</p>
		<a
			class="button caps"
			href="https://onskeskyen.dk/da/wishlists/huYTDYqxgvvFNcwG?sharedBy=WI6ccvrcyTgbILdC&utm_source=shortlink&utm_id=ezymsa"
			target="_blank"
			rel="noopener noreferrer">Se ønskelisten</a
		>
	</section>

	<!-- ================= REPLY ================= -->
	<section id="svar" class="wrap narrow">
		<h2>Svar</h2>
		<hr class="rule" />
		<p class="deadline">Senest den 10. april 2027</p>
		<p>
			Giv os besked, om I kommer. Skriv eller ring til en af os, som I plejer. Det gælder
			også, hvis I har spørgsmål.
		</p>
	</section>

	<footer class="wrap">
		<img
			class="church"
			src="/bryllup/kirke.svg"
			width="840"
			height="532"
			alt="Tegning af Bregnet Kirke"
		/>
		<p class="signature">Maria &amp; Mikkel</p>
	</footer>
</div>

<style>
	.wedding {
		--paper: #faf6ec;
		--panel: #fffdf7;
		--ink: #2f2a1f;
		--gold: #8a6a1f;
		--gold-deep: #5e4a12;
		--line: #c9a961;
		--line-soft: #e4d3a6;
		--serif: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
		--script: 'Pinyon Script', 'Snell Roundhand', cursive;

		min-height: 100%;
		background: var(--paper);
		color: var(--ink);
		font-family: var(--serif);
		font-size: 1.25rem;
		line-height: 1.55;
		text-align: center;
	}

	.wedding a {
		color: var(--gold);
	}
	.wedding a:focus-visible {
		outline: 2px solid var(--gold);
		outline-offset: 3px;
	}

	.wrap {
		width: 100%;
		max-width: 62rem;
		margin-inline: auto;
		padding-inline: 1.25rem;
	}
	.narrow {
		max-width: 38rem;
	}
	.caps {
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.28em;
		text-transform: uppercase;
	}
	.rule {
		width: 3rem;
		height: 1px;
		margin: 1.5rem auto;
		border: 0;
		background: var(--gold);
	}

	/* ---------- HEADER ---------- */
	.top {
		padding-block: 3rem 2.5rem;
	}
	.script {
		font-family: var(--script);
		font-size: clamp(2.6rem, 7vw, 3.6rem);
		line-height: 1.1;
		color: var(--gold);
	}
	.wedding h1 {
		margin-top: 0.75rem;
		font-size: clamp(2.8rem, 9vw, 4.6rem);
		font-weight: 500;
		line-height: 1.05;
		letter-spacing: 0.04em;
	}
	.wedding h1 em {
		display: block;
		margin: 0.15em 0;
		font-size: 0.42em;
		letter-spacing: 0;
		color: var(--gold);
	}
	.surname {
		margin-top: 0.9rem;
	}
	.date {
		margin-top: 1.75rem;
		font-size: 0.95rem;
	}

	.quicklinks {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem 2rem;
		margin-top: 2rem;
	}
	.quicklinks a {
		padding: 0.6rem 0.25rem;
		border-bottom: 1px solid var(--line);
		color: var(--ink);
		text-decoration: none;
	}
	.quicklinks a:hover {
		color: var(--gold);
	}

	/* ---------- PHOTO ---------- */
	.photo {
		padding: 0.5rem;
		border: 1px solid var(--line);
		background: var(--panel);
	}
	.photo img {
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: 50% 60%;
	}

	/* ---------- SECTIONS ---------- */
	.wedding section {
		padding-top: 4rem;
	}
	.wedding h2 {
		font-family: var(--script);
		font-size: clamp(2.4rem, 6vw, 3.1rem);
		font-weight: 400;
		line-height: 1.1;
		color: var(--gold);
	}
	.story {
		font-size: 1.35rem;
		font-style: italic;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
		gap: 1.25rem;
		margin-top: 2rem;
	}
	.wedding a.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		padding: 2rem 1.5rem;
		border: 1px solid var(--line-soft);
		background: var(--panel);
		color: var(--ink);
		text-decoration: none;
		transition: border-color 0.2s ease;
	}
	.wedding a.card:hover {
		border-color: var(--gold);
	}
	.card h3 {
		margin-top: 0.6rem;
		font-size: 1.75rem;
		font-weight: 500;
		line-height: 1.2;
	}
	.card p {
		margin-top: 0.6rem;
	}
	.card .caps {
		margin-top: 0;
	}
	.card .when {
		margin-top: 1rem;
		font-size: 1.35rem;
		font-style: italic;
		color: var(--gold);
	}
	.card .more {
		margin-top: auto;
		padding-top: 1.1rem;
		color: var(--gold);
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.dresscode {
		margin-top: 2rem;
		font-style: italic;
	}

	.button {
		display: inline-block;
		margin-top: 1.75rem;
		padding: 0.95rem 2.25rem;
		border: 1px solid var(--gold);
		text-decoration: none;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}
	.wedding a.button:hover {
		background: var(--gold);
		color: var(--paper);
	}

	.deadline {
		margin-bottom: 0.6rem;
		font-size: 1.5rem;
		font-weight: 600;
	}

	/* ---------- FOOTER ---------- */
	.wedding footer {
		padding-block: 4rem 3rem;
	}
	.church {
		width: min(100%, 30rem);
		margin-inline: auto;
	}
	.signature {
		margin-top: 1.5rem;
		font-family: var(--script);
		font-size: 2.6rem;
		line-height: 1.1;
		color: var(--gold);
	}
</style>
