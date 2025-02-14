document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations for main title spans
    document.querySelectorAll('.main-title span').forEach((span, index) => {
        span.style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
    
    // Trigger animations for contact items
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.style.animationDelay = `${1.0 + (index * 0.2)}s`;
    });

    const whatsappLink = document.querySelector('.whatsapp-link');
    const phoneNumber = '5491122455852';
    const message = 'Hola! Quiero consultar por clases particulares de...';
    
    whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

});

document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.style.display = 'none';
        console.error('Failed to load image:', this.src);
    };
});