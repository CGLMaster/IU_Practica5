let clic = 1;
    function desplegar(id, cont, img){
        const contenido = document.getElementById(cont);
        const color = document.getElementById(cont).style.backgroundColor;
        const student = document.getElementById(id);
        const imagen = document.getElementById(img);
        if(clic==1){
            contenido.style.setProperty('display','flex');
            student.style.setProperty('background-color','#011811');
            student.style.setProperty('color','white');
            contenido.style.setProperty('color','black');
            imagen.src = '../Resources/desplegar_blanco.png';
            clic = clic + 1;
        } else{   
            contenido.style.setProperty('display','none');
            student.style.setProperty('background-color', color);
            student.style.setProperty('color','black');
            imagen.src = '../Resources/desplegar.png';
            clic = 1;
        }   
    }