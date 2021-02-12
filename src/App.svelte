<script>
	import CodeHandler from './CodeHandler.svelte'

	export let siteUrl;
</script>

<header>
	<CodeHandler siteUrl={siteUrl} />
</header>

<main>
	<article>
		<h5>WHAT DOES THIS DO?</h5>
		<p>It plays anything you want over and over via text to speech. It was designed for use with an app called <a
				href="https://www.bigscreenvr.com/" target="_blank">Bigscreen VR</a> to make entering room codes easier
			with a VR helmet on if you have a bad memory.</p>
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
			href="https://svelte.dev/" target="_blank">Svelte</a>. Fork on <a
			href="https://github.com/jstilwell/code-repeater" target="_blank">Github</a>.
	</p>
</footer>