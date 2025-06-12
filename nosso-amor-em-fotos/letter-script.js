
// Função para abrir as memórias
function openMemories() {
    // Adiciona uma pequena animação antes de navegar
    const button = document.querySelector('.open-letter-btn');
    button.style.transform = 'scale(0.95)';
    button.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        // Navega para a página de memórias
        window.location.href = 'memories.html';
    }, 150);
}

// Adiciona efeito de paralaxe sutil aos corações flutuantes
document.addEventListener('mousemove', function(e) {
    const hearts = document.querySelectorAll('.heart');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    hearts.forEach((heart, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        heart.style.transform += ` translate(${x}px, ${y}px)`;
    });
});

// Animação especial quando a página carrega
window.addEventListener('load', function() {
    const envelope = document.querySelector('.letter-envelope');
    envelope.style.animation = 'letterAppear 1.5s ease-out';
    
    // Adiciona um pequeno atraso para a animação do botão
    setTimeout(() => {
        const button = document.querySelector('.open-letter-btn');
        button.style.animation = 'fadeIn 1s ease-out';
    }, 800);
});

// Adiciona animação de fade in
const fadeInKeyframes = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Injeta a animação no CSS
const style = document.createElement('style');
style.textContent = fadeInKeyframes;
document.head.appendChild(style);
