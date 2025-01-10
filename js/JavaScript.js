// Inicializar EmailJS
(function() {
    emailjs.init('IU7hlZkvVGEZbBVJy'); // Reemplaza TU_USER_ID con tu User ID de EmailJS
})();

// Manejo del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto

    // Recoger los valores del formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Enviar datos con EmailJS
    emailjs.send('service_3t649lo', 'template_x4q89a9', formData)
        .then(function(response) {
            alert('¡Correo enviado exitosamente!');
            document.getElementById('contact-form').reset(); // Limpiar formulario
        }, function(error) {
            alert('Error al enviar el correo: ' + error.text);
        });
});
