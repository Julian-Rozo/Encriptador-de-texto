let   campo_texto = document.getElementById("texto-encriptar");
let   campo_mensaje = document.getElementById("texto-encriptado");
let   btn_encriptar = document.getElementById("btn-encriptar");
let   btn_desencriptar = document.getElementById("btn-desencriptar");
let   btn_copy = document.getElementById("btn-copy");
let   btn_reset = document.getElementById("btn-reset")


const matriz_code = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"], 
]

btn_encriptar.addEventListener ("click", btnEncriptar)
btn_desencriptar.addEventListener ("click", btnDesencriptar)
btn_copy.addEventListener ("click", btnCopy)
btn_reset.addEventListener("click", btnReset)

function btnEncriptar () {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.innerHTML = texto
}

function btnDesencriptar () {
    const mensaje = desencriptar(campo_texto.value)
    campo_mensaje.innerHTML=mensaje
}

function encriptar (fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
                )
            } 
        }
        return fraseEncriptada;
    }
    
    function desencriptar (fraseEncriptada){
        let matrizcode = [
            ["u","ufat"], 
            ["o","ober"],
            ["i","imes"],
            ["e","enter"],
            ["a","ai"],
        ]  
        for (let i = 0; i < matriz_code.length; i++) {
            if (fraseEncriptada.includes(matrizcode[i][0])){
                fraseEncriptada = fraseEncriptada.replaceAll(
                    matrizcode[i][1],
                    matrizcode[i][0]
                    )
                }  
            }
            return fraseEncriptada
        } 
        
function btnReset (){
    location.reload()
}
        
function btnCopy () {
    navigator.clipboard.writeText(campo_mensaje.textContent)
}

