
function updateOutput() {
    const htmlCode = document.querySelector('#html').value;
    const cssCode = document.querySelector('#css').value;
    const output = document.querySelector('#output');
    const jsCode = document.querySelector('#js').value;


    // Set HTML content with CSS styles
    output.contentDocument.documentElement.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode)
}
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('keyup', updateOutput);
});
