// script.js

document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    document.getElementById('outputText').innerText = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    document.getElementById('outputText').innerText = decryptedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});

function encrypt(text) {
    if (!/^[a-z\s]*$/.test(text)) {
        alert('Sólo se permiten letras minúsculas y espacios');
        return '';
    }
    // Ejemplo simple de encriptación (cifrado César con un desplazamiento de 3)
    return text.split('').map(char => {
        if (char === ' ') return char;
        let charCode = char.charCodeAt(0) + 3;
        return String.fromCharCode(charCode > 122 ? charCode - 26 : charCode);
    }).join('');
}

function decrypt(text) {
    // Ejemplo simple de desencriptación (cifrado César con un desplazamiento de 3)
    return text.split('').map(char => {
        if (char === ' ') return char;
        let charCode = char.charCodeAt(0) - 3;
        return String.fromCharCode(charCode < 97 ? charCode + 26 : charCode);
    }).join('');
}
