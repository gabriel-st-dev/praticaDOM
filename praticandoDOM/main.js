const form = document.querySelector("#formulario")
let formEValido
let numA = document.getElementById("numA")
let numB = document.getElementById("numB")
let msg = document.querySelector("#mensagem")
let msgPositiva = "<b>O formulário é válido</b>"
let msgNegativa = "<b>O formulário NÃO é válido</b>"

function validarForm(A,B){
    if (parseInt(B) > parseInt(A)){
        formEValido = true
    }else{
        formEValido = false
    }
    return formEValido
}

form.addEventListener("submit", function(event){
    event.preventDefault()

    formEValido = validarForm(numA.value,numB.value)

    if(formEValido){
        msg.innerHTML = msgPositiva
        msg.classList.remove("error")
        msg.classList.add("success")
        
    }else if(!formEValido){
        msg.innerHTML = msgNegativa
        msg.classList.remove("success")
        msg.classList.add("error")
    }
})


