const curriculum = document.getElementById("btn_cv")
const git = document.getElementById("btn_git")
const enviar = document.getElementById("enviar")

curriculum.addEventListener("click", ()=>{
    window.open("arc's/Curriculum-Tyndall-Arias-19-05-2023-19-52-25.pdf")
})

git.addEventListener("click", ()=>{
    window.open("https://github.com/Naozen/Curriculim")
})

enviar.addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let mensaje = document.getElementById("mensaje").value
    if (nombre.length == 0) {
        alert("Ingrese nombre por favor")
        return false
    }else if(email.length == 0){
        alert("Ingrese su Email por favor")
        return false
    }else if(mensaje.length == 0){
        alert("Escriba un mensaje por favor")
        return false
    }else{
        alert("Mensaje enviado")
        return true
    }
})