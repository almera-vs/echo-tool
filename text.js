const uppercaseEl = document.getElementById('outputText')

function update(el) {
    uppercaseEl.value = el.value.toUpperCase()
}

function copy() {
    let textarea = document.getElementById("outputText");
    textarea.select();
    document.execCommand("copy");
 document.getElementById("popUp").innerHTML = "Copied!"; 
 document.getElementById("popUp").style = "display: block; position:absolute; left: 50%; transform: translate(-50%, -50%); margin-top:2vh;font-family:Verdana; font-size:18px;padding:10px;text-decoration:none;text-shadow:0px 0px 10px #00ff00; font-family: Gotham Narrow SSm A,Gotham Narrow SSm B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;";
   setTimeout(() => {  return  document.getElementById("popUp").style.display = "none"; }, 900);
  }