// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Slider de Depoimentos
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = (i === index) ? 'block' : 'none';
        });
    }

    showTestimonial(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    }, 5000); // Muda a cada 5 segundos

    // Envio do formulário
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Formulário enviado:', data);
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
});
