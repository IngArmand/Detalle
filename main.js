onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', () => {
        const text = `Te amo mi bella mujer, mi esposa mi mujir. Te eligiria a ti una y mil veces. Mi san valentin mi amor. Te amo y no tengo palabras para describir lo mucho que te amo. Este pequeño detalle demuestra lo mucho que me importas a mi manera.\nTE AMO MI BELLA ESPOSA MI EVE  >---WYE--->`;
        const container = document.getElementById('text-container');
        
        // Función para mostrar texto letra por letra
        function typeWriter(text, element, speed = 70) {
          let index = 0;
          const textWithBreaks = text.replace(/\n/g, '<br>');
          element.innerHTML = ''; // Limpiar contenedor
          
          function addCharacter() {
            if (index < textWithBreaks.length) {
              const char = textWithBreaks[index];
              const span = document.createElement('span');
              
              if (char === '<' && textWithBreaks.substr(index, 4) === '<br>') {
                element.appendChild(document.createElement('br'));
                index += 4;
              } else {
                span.textContent = char;
                span.style.animationDelay = `${index * 0.07}s`;
                element.appendChild(span);
                index++;
              }
              
              setTimeout(addCharacter, speed);
            }
          }
          
          // Iniciar la animación después de 2 segundos
          setTimeout(addCharacter, 2000);
          container.classList.remove('hidden');
        }
      
        typeWriter(text, container);
      });