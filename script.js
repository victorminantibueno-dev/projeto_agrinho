// script.js
// Dados das soluções
const solutions = [
    {
        icon: "☀️",
        title: "Energia Solar",
        desc: "Painéis fotovoltaicos e fazendas solares para gerar energia limpa."
    },
    {
        icon: "🌳",
        title: "Reflorestamento",
        desc: "Plantio massivo de árvores para capturar carbono e restaurar ecossistemas."
    },
    {
        icon: "🚲",
        title: "Mobilidade Elétrica",
        desc: "Veículos elétricos, bicicletas e transporte público sustentável."
    },
    {
        icon: "♻️",
        title: "Economia Circular",
        desc: "Reutilização, reciclagem e redução de resíduos plásticos."
    }
];

// Gerar cards
function generateSolutions() {
    const grid = document.getElementById('solutions-grid');
    grid.innerHTML = '';
    
    solutions.forEach(sol => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${sol.icon}</div>
            <h3>${sol.title}</h3>
            <p>${sol.desc}</p>
            <button onclick="alert('Saiba mais sobre ${sol.title} em breve!')" class="btn-primary" style="margin-top: 1rem; width: 100%;">Saiba mais</button>
        `;
        grid.appendChild(card);
    });
}

// Smooth Scroll
function smoothScrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Calculadora
function updateCalc() {
    const km = parseInt(document.getElementById('km').value);
    const meat = parseInt(document.getElementById('meat').value);
    const energy = parseInt(document.getElementById('energy').value);
    
    document.getElementById('km-value').textContent = `${km} km`;
    document.getElementById('meat-value').textContent = `${meat} refeições`;
    document.getElementById('energy-value').textContent = `${energy} kWh`;
    
    // Cálculo simples fictício
    const carbon = ((km * 0.02) + (meat * 0.4) + (energy * 0.4 / 12)).toFixed(1);
    document.getElementById('carbon-result').textContent = carbon;
    
    const percentage = Math.min(100, Math.max(20, parseFloat(carbon) * 12));
    document.getElementById('result-bar').style.width = `${percentage}%`;
}

function suggestSolutions() {
    alert("✅ Ótimo! Aqui vão algumas recomendações personalizadas:\n\n• Instale painéis solares\n• Reduza o consumo de carne\n• Use bicicleta ou transporte elétrico\n• Economize energia em casa");
}

// Tema Dark/Light
function toggleTheme() {
    document.body.classList.toggle('dark');
    const toggleBtn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
}

// Modal
function openPledgeModal() {
    document.getElementById('pledge-modal').style.display = 'flex';
}

function closePledgeModal() {
    document.getElementById('pledge-modal').style.display = 'none';
}

function submitPledge(e) {
    e.preventDefault();
    alert("🎉 Compromisso registrado com sucesso! Obrigado por fazer a diferença.");
    closePledgeModal();
}

// Contadores animados
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 100;
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = Math.floor(target) + (target % 1 !== 0 ? '+' : '');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Compartilhar
function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Verde Horizonte',
            text: 'Conheça o futuro sustentável!',
            url: window.location.href
        });
    } else {
        alert('Compartilhe este link: ' + window.location.href);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    generateSolutions();
    updateCalc();
    animateCounters();
    
    // Fecha modal ao clicar fora
    const modal = document.getElementById('pledge-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePledgeModal();
    });
    
    console.log('%c🌍 Site Verde Horizonte carregado com sucesso!', 'color: #10b981; font-size: 14px;');
});