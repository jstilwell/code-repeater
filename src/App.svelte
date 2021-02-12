<script>
	import CodeHandler from './CodeHandler.svelte'

	export let siteUrl;
</script>

<header>
	<CodeHandler siteUrl={siteUrl} />
</header>

<main>
	<article>
		<h5>HOW DO YOU USE THIS?</h5>
		<p>Place your code in the input field and click <code>SET IT!</code></p>
		<p>You can also add <code>?code=</code> to the URL followed by the text or code that you want to repeat. This is
			good for sharing them with others.</p>
		<p>Click the <code>COPY URL</code> button to share the link with friends.</p>
		<h5>EXAMPLE:</h5>
		<code>{siteUrl}?code=rxfc2m23</code>

	</article>
</main>

<footer>
	<p>Created by <a href="https://stilwell.io" target="_blank">Jesse Stilwell</a> and powered by <a
			href="https://svelte.dev/" target="_blank">Svelte</a>. View on <a
			href="https://github.com/jstilwell/bigscreen-room-code-speaker" target="_blank">Github</a>.
	</p>
</footer>