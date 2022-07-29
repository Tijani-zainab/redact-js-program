let writeMessage;
let ArrToHide;
let specifyChar;


let displayDiv = document.getElementById("display-redacted");
const redactBtn = document.getElementById("redact-btn");


redactBtn.addEventListener('click', function handleRedact(event) {
    event.preventDefault();
    writeMessage = document.getElementById("message").value;
    specifyChar = document.getElementById("custom-replace").value;
    ArrToHide = document.getElementById("message-tohide").value.split(' ');

    console.log(ArrToHide);

    ArrToHide.forEach(element => {
        //const regex = new RegExp(element, "gi");
        const regex = new RegExp("\\b"+element+"\\b", "gi");
        //writeMessage = writeMessage.replace( regex, specifyChar);

        if (specifyChar != undefined) {
            writeMessage = writeMessage.replace( regex, specifyChar);
        } else {
            writeMessage = writeMessage.replace( regex, "***");
        }
        
    }); 

    displayDiv.innerHTML = writeMessage;

    const resetInputs = document.querySelectorAll('#message, #message-tohide, #custom-replace');

    resetInputs.forEach(input => {
        input.value = '';
    });

})
