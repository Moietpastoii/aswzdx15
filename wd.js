const submitButton = document.querySelector(".cmd-submit");
const cmdInput = document.querySelector("#cmd-input");

document.onkeydown = function(e) {
    document.onkeydown = function(event) {
        if (event.key == "Enter") { 
          event.preventDefault();
          submitButton.click();
        }
    }     
}

submitButton.onclick = function() {
    let submitValue = cmdInput.value.toLowerCase();
    cmdInput.value = "";

    if(submitValue == "cicada") {
        const iframe = document.createElement("iframe");
        iframe.src = "https://cdn.discordapp.com/attachments/883360242908418088/932388214260523008/unknown.png";
        iframe.width="116"; 
        iframe.height="169"; 

        document.querySelector(".result").appendChild(iframe);

        const text = document.createElement("p");
        text.textContent = "p416l1m2";
        document.querySelector(".result").appendChild(text);
        document.querySelector(".result").classList.add("box-result");

    }
    if (submitValue == "esveilloit") {
        document.querySelector(".result").textContent = "Attention, il faut entrer ce mot de passe sur le site principal !!"
    }
}