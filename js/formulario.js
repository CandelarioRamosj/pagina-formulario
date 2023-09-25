let boton = document.getElementById('enviar')

boton.addEventListener('click',function(e){
 e.preventDefault()
  
  let form = document.forms['formulario']
  console.log(form)
})