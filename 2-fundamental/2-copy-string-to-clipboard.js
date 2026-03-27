/*
2. Copy String to Clipboard

Write a JavaScript program to copy a string to the clipboard.

Create a new <textarea> element, fill it with the supplied data and add it to the HTML document.
Use Selection.getRangeAt()to store the selected range (if any).
Use Document.execCommand('copy') to copy to the clipboard.
Remove the <textarea> element from the HTML document.
Finally, use Selection().addRange() to recover the original selected range (if any).
NOTICE: The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet.
*/

document.getElementById("copyBtn").addEventListener("click", function () {
  const text = document.getElementById("textToCopy").innerText;
  const copied = copyString(text);

  if (copied) {
    document.getElementById("message").innerText = "texto copiado com sucesso";
  } else {
    document.getElementById("message").innerText = "Erro ao copiar";
  }
});

function copyString(str) {
  const textarea = document.createElement("textarea");

  textarea.value = str;

  document.body.appendChild(textarea);

  textarea.select();

  document.execCommand("copy");

  document.body.removeChild(textarea);

  return true;
}
