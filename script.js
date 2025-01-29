document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Simular envío de formulario con una animación de carga
        message.textContent = "Enviando...";
        message.style.display = "block";
        message.style.color = "blue";
        
        setTimeout(() => {
            message.textContent = "¡Mensaje enviado con éxito!";
            message.style.color = "green";
            form.reset();
        }, 1000);
    });
});
