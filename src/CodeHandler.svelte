<script>
    import CopyToClipboard from "svelte-copy-to-clipboard";
    export let siteUrl;

    const handleSuccessfullyCopied = (e) => {
        console.log(`Successfully copied to clipboard! ${e}`);
    }

    const handleFailedCopy = () => {
        console.log('Failed to copy :(');
    }

    let theCode;
    let buildCode;
    let slowCode;
    let fullUrl;
    let codeStatus = { isPlaying: false }

    // Get code from URL
    let arr = document.URL.match(/code=([a-zA-Z0-9_.-]+)/)

    // Check to see if parameter is passed in URL
    if (arr) {
        theCode = arr[1]
    } else {
        theCode = 'NONE'
    }

    // Instantiate text-to-speech object
    let utter = new SpeechSynthesisUtterance()

    function playCode() {

        // Add spaces to string to break it up for character-by-character playback
        slowCode = theCode.replace(/(.{1})/g, "$1 ")
        fullUrl = `${siteUrl}?code=${theCode}`

        utter.lang = "en-US"
        utter.text = `The code is ${slowCode}`
        utter.volume = 0.7
        utter.rate = 0.25

        window.speechSynthesis.speak(utter)

        // If codeStatus.isPlaying is toggled to true by clicking the button, 
        // continue loop until button is clicked again.
        setTimeout(function () {
            if (codeStatus.isPlaying) {
                playCode()
            } else {
                stopPlaying()
            }
        }, 500)
    }

    // Toggle loop status between true and false.
    // If loop is playing and hasn't been toggled by the button, continue playing the loop.
    function togglePlay() {
        codeStatus.isPlaying = !codeStatus.isPlaying
        if (codeStatus.isPlaying) {
            playCode()
        }
    }

    function stopPlaying() {
        window.speechSynthesis.cancel()
    }

    // Handle input from form if no code is specified in URL
    function setCode(input) {
        theCode = input
        fullUrl = `${siteUrl}?code=${theCode}`
    }

    // Reset the code to NONE and toggle isPlaying off if needed
    function resetCode() {
        if (codeStatus.isPlaying) {
            codeStatus.isPlaying = !codeStatus.isPlaying
        }
        theCode = 'NONE'
    }
</script>

{#if theCode === 'NONE'}
<center><input bind:value={buildCode} placeholder="Enter code to repeat"></center>
<button on:click={setCode(buildCode)}>SET IT!</button>
{:else}
<h1>{theCode}</h1>
{#if !codeStatus.isPlaying}
<button on:click={togglePlay}><strong>PLAY IT!</strong></button>
{:else}
<button on:click={togglePlay}><strong>STOP PLAYING IT!</strong></button>
{/if}
<CopyToClipboard text={fullUrl} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
    <button on:click={copy}>COPY URL</button>
</CopyToClipboard>
<button on:click={resetCode}>RESET</button>
{/if}