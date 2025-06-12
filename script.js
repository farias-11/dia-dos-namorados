
// Dados das memórias
const memories = {
    1: {
        title: "Onde tudo começou",
        date: "09 de Setembro, 2019",
        image: "imagem/pg.jpeg",
        description: "O lugar em que tudo começou. Uma ajuda se tornou no amor da minha vida.",
        story: `Ainda me lembro de cada detalhe daquele dia. Assim que cheguei reparei que você era especial(em todos os sentidos kkk). 

O que deveria ser apenas uma ajuda em um projeto se tornou na mulher dos meus sonhos. Fui feito de besta achando que estava tomando iniciativa kkk mas vc estava preparando e conduzindo tudo.

Desde então, cada conversa foi uma loucura diferente e de pouco a pouco fui sendo conquistado com seu jeitinho.

Nas semanas conversamos sobre nossas fotos de criança(Genial), sonhos, medos, músicas favoritas e filmes que nos fazem chorar. Foi ali que soube que você seria especial em minha vida.`
    },
    2: {
        title: "Primeiro encontro marcante",
        date: "Setembro, 2019",
        image: "imagem/paulista.jpg",
        description: "Dia cheio de emoções e velas kkk o gelo foi dificil de ser quebrado mas foi mais um passo para nossa vida juntos.",
        story: `Nossa primeira viagem juntos foi mais perfeita do que eu poderia imaginar. Você planejou cada detalhe com tanto carinho.

Acordar com a vista das montanhas ao seu lado foi um dos momentos mais especiais da minha vida. Caminhamos pelas trilhas, descobrimos cachoeiras escondidas e fizemos piqueniques improvisados.

À noite, ficávamos horas conversando sob as estrelas, planejando futuras aventuras e compartilhando nossos sonhos mais secretos.

Foi nessa viagem que percebi que não importa onde estejamos, desde que seja ao seu lado, qualquer lugar se torna o paraíso.`
    },
    3: {
        title: "Primeiro beijo",
        date: "Setembro, 2019",
        image: "imagem/metro.jpg",
        description: "Ao fim de tarde onde veio o primeiro grande frio na barriga.",
        story: `Este dia foi repleto de momentos engraçados, lembro de muitos e muitos detalhes do dia que marcou minha vida.

O que começou com apenas mais uma saída, foi para um abraço no Ônibus e ali comecei a acreditar que era o dia kkkkk.

Sempre fui muito tímido presencialmente e ali foi duro kkkkk lembro de ir até o metro capão pra vc esperar seu ônibus e ali vi a oportunidade quando ele chegou e tivemos que dar tchau.

Após aquilo foi faluquice, voltei pra casa pensando em como ia pedir em namoro, se ja estava cedo kkkkk o menino aqui é ansioso.`
    },
    4: {
        title: "Pedido de namoro",
        date: "19 de Outubro, 2019",
        image: "imagem/pedidonamoro.jpeg",
        description: "Nosso primeiro sim, o dia em que oficializamos tudo kk.",
        story: `O fim de semana mais maluco da minha vida kkkk. Dany me ajudou em cada detalhe e em cada maluquice, fui na sexta e deixei tudo na casa dela.

Ela doida fez tudo e só precisava te fazer ir no horário que eu precisava. No dia foi uma loucura, preparando tudo, fiz uma cartinha porque eu estava com medo e vergonha.

Minutos antes de você chegar eu perguntei a Dany "Tem certeza que ela quer né?" e ela meteu um "Acho que sim!" daí pra frente eu fiquei em choque e não consegui prestar atenção em mais nada.

Quando chegou, ja não bastava tudo isso e escutei uma vóz, era a Milena PQPPP. Comecei a suar frio kkk e fiquei lá no quarto, li a carta e vc disse sim!

Depois disso é história!`
    },
    5: {
        title: "Pedido de noivado",
        date: "15 de Abril, 2023",
        image: "imagem/noivado.jpeg",
        description: "Um dia cheio de emoções e no fim o sim para nossa vida veio.",
        story: `Esse dia é uma maluquice, foi uma loucura do começo ao fim, pra começar o amigão aqui estava com o tornozelo na merda kkkk.

 Fora isso minha encomenda do sushi não iria chegar a tempo e eu não tinha chego em casa ainda. Preparei tudo e não sabia o que fazer porque precisava chegar nossa janta.

Quando você chegou eu dei o migué, entrei em casa e terminei de arrumar tudo kkk, mais uma vez em nossa história o pedido foi por carta. Coloquei a musica do High School Musical e fui na fé!

Deu tudo certo! Foi um dia maluco como muitos outros, tivemos nosso jantar mágico e começamos ali uma nova história, ali começou nossa corrida para o casamento!`
    },
    6: {
        title: "Chegando lá...",
        date: "19 de Outubro, 2025",
        image: "imagem/historia.jpg",
        description: "Sonhando acordado a cada decisão a cada dia.",
        story: `Aqui estamos nós atrás do nosso sonho, uma corrida grande e maluca. Acho que tudo serve como aprendizado, tivemos diversos momentos maravilhosos e outros que temos que repensar/aprender com o que rolou.

Nessa corrida não tinha como ter outros corredores, tinha que ser nós dois, acredito sim que fomos feitos um por outro, todo mundo ao nosso redor fala isso, onde passamos deixamos marcas e alegria.

Não teria graça fazer isso sem você, somos malucos kkk quando você ta estressada eu quero te atentar, tudo na vida tem mais graça com você, uma simples luta, aprender uma língua nova, TUDO.

Nossa história é um absurdo, uma loucura, um carrossel de amor, é tão maluco parar e ver que chegamos até aqui. Cada passo, cada momento de aflição, de alegria, de conquista e hoje estamos planejando nossa vida juntos, contando os dias para o nosso casamento.

Na história que eu conto para os outros você me disse dois sim, no namoro e no noivado(aguardo e sonho todos os dias com o do casamento) mas sei que eu recebo esse sim todos os dias na minha vida dizendo a mim que você é o amor da minha vida!

Obrigado por ser o sorriso no meu rosto, a chave do meu cadeado(LA ELE), minha outra metade e a mulher da minha vida! Te prometo pra sempre cuidar de você e te amar como ninguém te amou nessa vida!`
    }
};

// Funções do modal
function openModal(memoryId) {
    const memory = memories[memoryId];
    const modal = document.getElementById('modal');
    
    // Preenche o conteúdo do modal
    document.getElementById('modal-title').textContent = memory.title;
    document.getElementById('modal-date').textContent = memory.date;
    document.getElementById('modal-image').src = memory.image;
    document.getElementById('modal-image').alt = memory.title;
    document.getElementById('modal-story').textContent = memory.story;
    document.getElementById('modal-description').textContent = `"${memory.description}"`;
    
    // Mostra o modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Previne scroll do body
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll do body
}

// Fecha o modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fecha o modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Animação de entrada dos cards
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
