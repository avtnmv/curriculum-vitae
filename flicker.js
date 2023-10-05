const blinkingText = document.getElementById('flicker-text');

function toggleVisibility() {
    if (blinkingText.style.visibility === 'visible') {
      blinkingText.style.visibility = 'hidden';
    } 
    else {
      blinkingText.style.visibility = 'visible';
    }
}
setInterval(toggleVisibility, 500)