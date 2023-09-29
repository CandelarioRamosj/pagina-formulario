let boton = document.getElementById('enviar')

boton.addEventListener('click',function(e){
 e.preventDefault()
  
 let contador = 0
  //Extraer cada input 
  let nombre = document.getElementById('name')
  let edad = document.getElementById('edad')
  let email = document.getElementById('email')
  let info = document.getElementById('info')
  let fecha = document.getElementById('fecha')
  let fav = document.querySelector('input[name="fav"]:checked')//Comprueba que radio esta seeccionado
  let zonas = ""
  for(let i = 1; i <= 18; i++){
    let isChecked = document.getElementById('zona'+ i).checked;
    if(isChecked) zonas += document.getElementById('zona' + i).value + " "
  }
  let datos = document.getElementById('datos')
  
  //Validar cada input
  if(nombre.value.length<3){
    document.getElementById('label-name').className = 'class-invalido'
    nombre.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-name').className = 'class-oculto'
    nombre.style.borderColor = '#29c424'
    contador = contador + 1
  }

  if(edad.value < 1 || edad.value > 100){
    document.getElementById('label-edad').className = 'class-invalido'
    edad.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-edad').className = 'class-oculto'
    edad.style.borderColor = '#29c424'
    contador = contador + 1
  }

  let validaremail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  // Estandard Official: RFC 5322

  if(!validaremail.test(email.value)){
    document.getElementById('label-email').className = 'class-invalido'
    email.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-email').className = 'class-oculto'
    email.style.borderColor = '#29c424'
    contador = contador + 1
  }

  if(info.value === ""){
    document.getElementById('label-info').className = 'class-invalido'
    info.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-info').className = 'class-oculto'
    info.style.borderColor = '#29c424'
    contador = contador + 1
  }

  let fechaEstreno = '2017-02-24'
  // crea un nuevo objeto `Date`
  let today = new Date()
  // obtener la fecha de hoy en formato `MM/DD/YYYY`
  let now = today.toLocaleDateString('fr-CA')

  if(fecha.value === "" || fecha.value < fechaEstreno || fecha.value > now){
    document.getElementById('label-fecha').className = 'class-invalido'
    fecha.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-fecha').className = 'class-oculto'
    fecha.style.borderColor = '#29c424'
    contador = contador + 1
  }

  if(datos.value === ""){
    document.getElementById('label-datos').className = 'class-invalido'
    datos.style.borderColor = '#e22b2b'
  }else {
    document.getElementById('label-datos').className = 'class-oculto'
    datos.style.borderColor = '#29c424'
    contador = contador + 1
  }

  if(zonas=== ""){
    document.getElementById('label-fav').className = 'class-invalido'
  }else {
    document.getElementById('label-fav').className = 'class-oculto'
    contador = contador + 1
  }
 
  if(fav?.value === undefined){
    document.getElementById('label-radio').className = 'class-invalido'
  }else {
    document.getElementById('label-radio').className = 'class-oculto'
    contador = contador + 1
  }
  
  //enviar el formulario 
  if(contador === 8){
    document.getElementById('formulario').submit()
    alert('Formulario Enviado 🫡')
  }
})