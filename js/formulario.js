let boton = document.getElementById('enviar')

boton.addEventListener('click',function(e){
 e.preventDefault()
  
  let nombre = document.getElementById('name').value
  let edad = document.getElementById('edad').value
  let email = document.getElementById('email').value
  let info = document.getElementById('info').value
  let fecha = document.getElementById('fecha').value
  let fav = document.querySelector('input[name="fav"]:checked')?.value
  let zonas = ""
  for(let i = 1; i <= 18; i++){
    let isChecked = document.getElementById('zona'+ i).checked;
    if(isChecked) zonas += document.getElementById('zona' + i).value + " "
  }

  let datos = document.getElementById('datos').value
  alert(nombre + " " + edad + " " + email + " " + info + " " + fecha + " " + fav + " " + datos + " " + zonas)
})