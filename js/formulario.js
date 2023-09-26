let boton = document.getElementById('enviar')

boton.addEventListener('click',function(e){
 e.preventDefault()
  
  //Extraer cada input 
  let nombre = document.getElementById('name')
  let edad = document.getElementById('edad')
  let email = document.getElementById('email')
  let info = document.getElementById('info')
  let fecha = document.getElementById('fecha')
  let fav = document.querySelector('input[name="fav"]:checked')?.value
  let zonas = ""
  for(let i = 1; i <= 18; i++){
    let isChecked = document.getElementById('zona'+ i).checked;
    if(isChecked) zonas += document.getElementById('zona' + i).value + " "
  }
  let datos = document.getElementById('datos').value
  
  //Validar cada input
  if(nombre.value.length<3){
    document.getElementById('label-name').className = 'class-invalido'
    nombre.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-name').className = 'class-oculto'
    nombre.style.borderColor = '#29c424'
  }

  if(edad.value < 1){
    document.getElementById('label-edad').className = 'class-invalido'
    edad.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-edad').className = 'class-oculto'
    edad.style.borderColor = '#29c424'
  }

  let validaremail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  // Estandard Official: RFC 5322

  if(!validaremail.test(email.value)){
    document.getElementById('label-email').className = 'class-invalido'
    email.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-email').className = 'class-oculto'
    email.style.borderColor = '#29c424'
  }

  if(info.value === ""){
    document.getElementById('label-info').className = 'class-invalido'
    info.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-info').className = 'class-oculto'
    info.style.borderColor = '#29c424'
  }
})