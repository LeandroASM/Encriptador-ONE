function encriptar () {
    
    let textoIngresado = document.getElementById('textarea').value
    document.getElementById('btn-copy').classList.remove('btn-click-copy')
    document.getElementById('img-out').classList.add('img-2-show')

       const reemplazos = {
        'e' : 'enter',
        'i' : 'imes',
        'a' : 'ai',
        'o' : 'ober',
        'u' : 'ufat'}

        const excepciones = /[A-ZÁÉÍÓÚáéíóú]/

        if (excepciones.test(textoIngresado)){
            alert('El texto contiene letras mayúsculas o tildes.')
        }else{
            let textoEncriptado = textoIngresado.replace(/[aeiou]/g, function(match) {
                return reemplazos[match];
            })
            document.getElementById('miTexto').textContent = textoEncriptado;
        }
        

    }

function desencriptar () {
    let textoIngresado = document.getElementById('textarea').value
    document.getElementById('btn-copy').classList.remove('btn-click-copy')
    document.getElementById('img-out').classList.add('img-2-show')
    const reemplazos = {
          'enter':'e',
          'imes' :'i',
          'ai'   :'a',
          'ober' :'o',
          'ufat' :'u'}

          let textoDesencriptado = textoIngresado;


          for (let key in reemplazos) {
            let regExp = new RegExp(key, 'g');
            textoDesencriptado = textoDesencriptado.replace(regExp, reemplazos[key]);
        }
        
        // Actualiza el contenido de un párrafo con el texto encriptado
        document.getElementById('miTexto').textContent = textoDesencriptado;

}

 
function copiarTexto(idTxt){
   let blq = document.getElementById(idTxt);
   let txt = blq.innerHTML;
   let btn = event.target;
   let btnLbl = btn.innerText;
   navigator.clipboard.writeText(txt);
   btn.innerHTML = "Copiado";
   setTimeout(()=>btn.innerText = btnLbl, 1200);
}
