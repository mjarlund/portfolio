<script>
	import { site } from '$lib/site';
</script>

<svelte:head>
	<title>Maria &amp; Mikkel – Vores bryllup</title>
	<meta name="robots" content="noindex" />
	<meta
		name="description"
		content="Maria &amp; Mikkel inviterer til kirkelig velsignelse og fest lørdag den 22. maj 2027."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Maria &amp; Mikkel – Vores bryllup" />
	<meta
		property="og:description"
		content="Maria &amp; Mikkel inviterer til kirkelig velsignelse og fest lørdag den 22. maj 2027."
	/>
	<meta property="og:url" content="{site.url}/wedding" />
	<meta property="og:image" content="{site.url}/wedding/hero.webp" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wedding">
	<!-- ================= HERO ================= -->
	<header class="hero">
		<div class="hero-inner">
			<h1>Maria<em>&amp;</em>Mikkel</h1>
			<p class="date">Lørdag den 22. maj 2027</p>
			<p class="story">
				Vi sagde ja til hinanden på rådhuset i Ebeltoft – nu vil vi gerne velsignes i kirken
				og endelig holde den fest, vi ikke nåede dengang. Vi glæder os til at fejre det med
				jer, som betyder allermest.
			</p>
		</div>
	</header>

	<nav class="quicklinks" aria-label="Genveje">
		<a href="#info">Program</a>
		<a href="#hotels">Overnatning</a>
		<a href="#wishlist">Ønskeliste</a>
	</nav>

	<div class="divider">
		<svg viewBox="0 0 32 32" aria-hidden="true">
			<path d="M16 28 C16 20 16 14 16 6" fill="none" stroke="#5B6B44" stroke-width="1.4" />
			<path d="M16 10 C12 8 9 10 8 14 C12 15 15 13 16 10 Z" fill="#5B6B44" />
			<path d="M16 10 C20 8 23 10 24 14 C20 15 17 13 16 10 Z" fill="#5B6B44" />
			<path d="M16 17 C12.5 15.3 10 17 9 20.5 C12.5 21.5 15.2 19.7 16 17 Z" fill="#5B6B44" />
			<path d="M16 17 C19.5 15.3 22 17 23 20.5 C19.5 21.5 16.8 19.7 16 17 Z" fill="#5B6B44" />
		</svg>
	</div>

	<!-- ================= PROGRAM ================= -->
	<section id="info" class="section on-cream">
		<div class="section-head">
			<h2>Dagens rejseplan</h2>
			<p>To stop på samme rejse – kirken først, så festen.</p>
		</div>
		<div class="program">
			<a
				class="ticket"
				href="https://maps.google.com/?q=Bregnet+Kirke,+Kirkebakken+2A,+Kalø,+8410+Rønde"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon" aria-hidden="true">
					<svg viewBox="0 0 24 24">
						<path d="M12 2 L12 8" />
						<path d="M6 22 L6 12 L18 12 L18 22" />
						<path d="M4 22 L20 22" />
						<path d="M9 8 L15 8 L15 12 L9 12 Z" />
						<circle cx="12" cy="4.5" r="1.3" fill="#AE5C34" stroke="none" />
					</svg>
				</div>
				<h3>Velsignelsen</h3>
				<p class="place">Bregnet Kirke<br />Kirkebakken 2A, Kalø<br />8410 Rønde</p>
				<p class="stub-time">Kl. 15:00</p>
			</a>
			<a
				class="ticket"
				href="https://maps.google.com/?q=Rodskov+Forsamlingshus,+Hovgårdvej+3,+8543+Hornslet"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon" aria-hidden="true">
					<svg viewBox="0 0 24 24">
						<path d="M4 21 L4 9 L12 3 L20 9 L20 21" />
						<path d="M9 21 L9 14 L15 14 L15 21" />
						<path d="M2 21 L22 21" />
					</svg>
				</div>
				<h3>Festen</h3>
				<p class="place">Rodskov Forsamlingshus<br />Hovgårdvej 3<br />8543 Hornslet</p>
				<p class="stub-time">Efter velsignelsen</p>
			</a>
		</div>
		<p class="dresscode">Dresscode: Festtøj</p>
	</section>

	<div class="divider">
		<svg viewBox="0 0 32 32" aria-hidden="true">
			<path d="M16 28 C16 20 16 14 16 6" fill="none" stroke="#5B6B44" stroke-width="1.4" />
			<path d="M16 10 C12 8 9 10 8 14 C12 15 15 13 16 10 Z" fill="#5B6B44" />
			<path d="M16 10 C20 8 23 10 24 14 C20 15 17 13 16 10 Z" fill="#5B6B44" />
			<path d="M16 17 C12.5 15.3 10 17 9 20.5 C12.5 21.5 15.2 19.7 16 17 Z" fill="#5B6B44" />
			<path d="M16 17 C19.5 15.3 22 17 23 20.5 C19.5 21.5 16.8 19.7 16 17 Z" fill="#5B6B44" />
		</svg>
	</div>

	<!-- ================= STAY ================= -->
	<section id="hotels" class="section on-cream">
		<div class="section-head">
			<h2>Overnatning</h2>
			<p>Kommer I langvejs fra? Her er et par forslag tæt på kirken og festen.</p>
		</div>
		<div class="postcards">
			<div class="postcard">
				<div>
					<h3>Danhostel Rønde</h3>
					<p>Grenåvej 10 B, 8410 Rønde · vandrehjem med udsigt over Kalø Vig</p>
					<p>
						<a
							href="https://danhostelronde.dk"
							target="_blank"
							rel="noopener noreferrer">Se mere →</a
						>
					</p>
				</div>
				<div class="postmark">Rønde<br />8410</div>
			</div>
			<div class="postcard">
				<div>
					<h3>Sommerhus ved Følle Strand</h3>
					<p>Følle Strand, 8410 Rønde · oplagt hvis I er flere sammen</p>
					<p>
						<a
							href="https://www.dansommer.dk/danmark/djursland/foelle-strand"
							target="_blank"
							rel="noopener noreferrer">Se mere →</a
						>
					</p>
				</div>
				<div class="postmark">Følle<br />Strand</div>
			</div>
			<div class="postcard">
				<div>
					<h3>Lergravgaard</h3>
					<p>
						Strandvejen 154, 8410 Rønde · bed &amp; breakfast og ferielejligheder, ca. 5
						min. fra festen
					</p>
					<p>
						<a href="https://lergravgaard.dk" target="_blank" rel="noopener noreferrer"
							>Se mere →</a
						>
					</p>
				</div>
				<div class="postmark">Rønde<br />8410</div>
			</div>
		</div>
	</section>

	<div class="divider">
		<svg viewBox="0 0 32 32" aria-hidden="true">
			<path d="M16 28 C16 20 16 14 16 6" fill="none" stroke="#5B6B44" stroke-width="1.4" />
			<path d="M16 10 C12 8 9 10 8 14 C12 15 15 13 16 10 Z" fill="#5B6B44" />
			<path d="M16 10 C20 8 23 10 24 14 C20 15 17 13 16 10 Z" fill="#5B6B44" />
			<path d="M16 17 C12.5 15.3 10 17 9 20.5 C12.5 21.5 15.2 19.7 16 17 Z" fill="#5B6B44" />
			<path d="M16 17 C19.5 15.3 22 17 23 20.5 C19.5 21.5 16.8 19.7 16 17 Z" fill="#5B6B44" />
		</svg>
	</div>

	<!-- ================= WISH ================= -->
	<section id="wishlist" class="section on-cream">
		<div class="wish-inner">
			<h2>Ønskeliste</h2>
			<p class="wish-text">
				Jeres tilstedeværelse er den bedste gave. Men ønsker I alligevel at give os noget,
				har vi oprettet en ønskeliste.
			</p>
			<a
				class="seal"
				href="https://onskeskyen.dk/da/wishlists/lBLT1cBSmfaKQdoQ"
				target="_blank"
				rel="noopener noreferrer">Se<br />ønskelisten</a
			>
		</div>
	</section>

	<footer>
		<p>Har I spørgsmål, er I altid velkomne til at skrive til os.</p>
		<p class="signature">Maria &amp; Mikkel</p>
	</footer>
</div>

<style>
	.wedding {
		--cream: #f8f1e1;
		--cream-deep: #eee0bc;
		--paper: #fbf6ea;
		--olive: #5b6b44;
		--olive-deep: #333d26;
		--terracotta: #ae5c34;
		--wine: #6b2331;
		--gold: #c79a46;
		--ink: #2e2a20;
		--ink-soft: #55503f;
		--line: #d9cca3;

		background: var(--paper);
		color: var(--ink-soft);
		font-family: 'Newsreader', serif;
		font-size: 18px;
		line-height: 1.65;
	}

	.wedding :global(h1),
	.wedding :global(h2),
	.wedding :global(h3) {
		font-family: 'Fraunces', serif;
		color: var(--ink);
		margin: 0;
		font-weight: 600;
	}

	.wedding a {
		color: var(--terracotta);
	}

	/* ---------- HERO ---------- */
	.hero {
		position: relative;
		max-width: 1600px;
		margin: 0 auto;
		min-height: clamp(480px, 88vh, 760px);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: url('/wedding/hero.webp');
		background-size: cover;
		background-position: center 58%;
		overflow: hidden;
	}
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(20, 17, 10, 0.15) 0%,
			rgba(30, 25, 15, 0.25) 30%,
			rgba(35, 29, 18, 0.6) 60%,
			rgba(25, 20, 12, 0.94) 100%
		);
	}

	.hero-inner {
		position: relative;
		z-index: 2;
		max-width: 640px;
		margin: 0 auto;
		padding: 0 1.5rem 3.2rem;
		text-align: center;
	}

	.hero h1 {
		font-size: clamp(2.9rem, 9vw, 4.8rem);
		color: var(--cream);
		line-height: 0.97;
		letter-spacing: -0.01em;
		text-shadow: 0 2px 20px rgba(0, 0, 0, 0.6);
	}
	.hero h1 em {
		font-style: italic;
		font-weight: 500;
		color: var(--gold);
		display: block;
		font-size: 0.42em;
		margin: 0.25em 0;
	}

	.hero .date {
		margin: 1.3rem 0 0;
		font-size: 1.25rem;
		color: var(--cream);
		letter-spacing: 0.02em;
		text-shadow: 0 1px 12px rgba(0, 0, 0, 0.55);
	}

	.hero .story {
		max-width: 32em;
		margin: 1.4rem auto 0;
		color: #efe7d3;
		font-size: 1.03rem;
		text-shadow: 0 1px 10px rgba(0, 0, 0, 0.55);
	}

	/* ---------- QUICKLINKS ---------- */
	.quicklinks {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.4rem 0.9rem;
		padding: 1.4rem 1.5rem 0;
		background: var(--paper);
	}
	.quicklinks a {
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-size: 0.95rem;
		color: var(--olive-deep);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		padding-bottom: 0.15rem;
		transition:
			border-color 0.2s ease,
			color 0.2s ease;
	}
	.quicklinks a:hover,
	.quicklinks a:focus-visible {
		color: var(--terracotta);
		border-bottom-color: var(--terracotta);
	}

	/* ---------- DIVIDER ---------- */
	.divider {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.9rem;
		padding: 2.2rem 1.5rem;
		max-width: 320px;
		margin: 0 auto;
	}
	.divider::before,
	.divider::after {
		content: '';
		height: 1px;
		flex: 1;
		background: var(--line);
	}
	.divider svg {
		width: 30px;
		height: 30px;
		flex: none;
	}

	/* ---------- SECTIONS ---------- */
	.section {
		padding: 1rem 1.5rem 4.5rem;
	}
	.section.on-cream {
		background: var(--paper);
	}

	.section-head {
		text-align: center;
		max-width: 560px;
		margin: 0 auto 2.4rem;
	}
	.section-head :global(h2) {
		font-size: 2.1rem;
	}
	.section-head p {
		color: var(--ink-soft);
		margin-top: 0.6rem;
	}
	.wish-text {
		color: var(--ink-soft);
	}

	/* ---------- PROGRAM: ticket stubs ---------- */
	.program {
		max-width: 720px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.6rem;
	}

	.ticket {
		position: relative;
		background: var(--paper);
		border: 1.5px solid var(--olive);
		border-radius: 4px;
		padding: 1.8rem 1.5rem 1.6rem;
		text-align: center;
		display: block;
		text-decoration: none;
		transition: transform 0.25s ease;
	}
	.ticket:hover,
	.ticket:focus-visible {
		transform: scale(1.03) rotate(-1deg);
	}
	.ticket::before,
	.ticket::after {
		content: '';
		position: absolute;
		top: 50%;
		width: 22px;
		height: 22px;
		background: var(--cream-deep);
		border: 1.5px solid var(--olive);
		border-radius: 50%;
		transform: translateY(-50%);
	}
	.ticket::before {
		left: -12px;
	}
	.ticket::after {
		right: -12px;
	}

	.ticket .icon {
		width: 40px;
		height: 40px;
		margin: 0 auto 0.7rem;
	}
	.ticket .icon :global(svg) {
		width: 100%;
		height: 100%;
		stroke: var(--terracotta);
		fill: none;
		stroke-width: 1.6;
	}
	.ticket :global(h3) {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	.ticket .place {
		font-size: 1rem;
		color: var(--ink-soft);
	}
	.ticket .stub-time {
		margin-top: 0.9rem;
		padding-top: 0.8rem;
		border-top: 1.5px dashed var(--olive);
		font-family: 'Fraunces', serif;
		font-style: italic;
		color: var(--wine);
		font-size: 1.15rem;
	}

	.dresscode {
		text-align: center;
		margin: 2.2rem auto 0;
		color: var(--ink-soft);
		font-style: italic;
	}

	@media (max-width: 620px) {
		.program {
			grid-template-columns: 1fr;
		}
	}

	/* ---------- STAY: postcards ---------- */
	.postcards {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		max-width: 620px;
		margin: 0 auto;
	}
	.postcard {
		position: relative;
		background: var(--paper);
		border: 1.5px solid var(--olive);
		padding: 1.4rem 1.5rem;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		align-items: center;
		transition: transform 0.25s ease;
	}
	.postcard:nth-child(odd) {
		transform: rotate(-0.5deg);
	}
	.postcard:nth-child(even) {
		transform: rotate(0.5deg);
	}
	.postcard:hover:nth-child(odd) {
		transform: scale(1.03) rotate(-1.5deg);
	}
	.postcard:hover:nth-child(even) {
		transform: scale(1.03) rotate(1.5deg);
	}

	.postmark {
		flex: none;
		width: 62px;
		height: 62px;
		border-radius: 50%;
		border: 1.5px dashed var(--wine);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--wine);
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-size: 0.72rem;
		line-height: 1.15;
		padding: 4px;
	}

	.postcard :global(h3) {
		font-size: 1.3rem;
		margin-bottom: 0.25rem;
	}
	.postcard p {
		margin: 0.15rem 0;
		color: var(--ink-soft);
		font-size: 0.98rem;
	}
	.postcard a {
		font-family: 'Fraunces', serif;
		font-style: italic;
	}

	@media (max-width: 480px) {
		.postcard {
			grid-template-columns: 1fr;
			text-align: left;
		}
		.postmark {
			display: none;
		}
	}

	/* ---------- WISH: wax seal ---------- */
	.wish-inner {
		text-align: center;
		max-width: 480px;
		margin: 0 auto;
	}
	.wish-inner .seal {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 128px;
		height: 128px;
		border-radius: 50%;
		background: var(--terracotta);
		color: var(--cream);
		text-decoration: none;
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-size: 1.15rem;
		line-height: 1.2;
		margin-top: 1.6rem;
		box-shadow: 0 0 0 4px var(--olive-deep) inset;
		transition: transform 0.25s ease;
	}
	.seal:hover {
		transform: scale(1.05) rotate(-2deg);
	}

	/* ---------- FOOTER ---------- */
	.wedding footer {
		background: var(--ink);
		color: var(--cream-deep);
		text-align: center;
		padding: 3.5rem 1.5rem 3rem;
	}
	.wedding footer p {
		color: #c9bea0;
	}
	.wedding footer .signature {
		margin-top: 0.8rem;
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-weight: 500;
		font-size: 2rem;
		color: var(--cream);
	}
</style>
