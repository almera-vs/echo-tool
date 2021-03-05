const uppercaseEl = document.getElementById('outputText')
function update(el) {
    uppercaseEl.value = el.value.toUpperCase()
}

function copy() {
    let textarea = document.getElementById("outputText");
    textarea.select();
    document.execCommand("copy");
   document.getElementById("button").innerHTML = "Copied!";
   setTimeout(() => {  return  document.getElementById("button").innerHTML = "Copy"; }, 2000);
  }