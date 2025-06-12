
export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  story: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Nosso Primeiro Encontro",
    date: "14 de Fevereiro, 2023",
    description: "O dia em que tudo começou. Um café que se transformou em horas de conversa e risadas.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=500&h=500&fit=crop",
    story: `Ainda me lembro de cada detalhe daquele dia. Você chegou com aquele sorriso que me conquistou instantaneamente. 

O que deveria ser apenas um café rápido se transformou em horas de conversa. Falamos sobre nossos sonhos, medos, músicas favoritas e filmes que nos fazem chorar.

Quando percebi, já era noite e não queríamos que aquele momento acabasse. Foi ali que soube que você seria especial em minha vida.

Desde então, cada dia ao seu lado tem sido uma nova aventura, cheia de amor, risadas e momentos únicos que guardo no coração.`
  },
  {
    id: 2,
    title: "Nossa Primeira Viagem",
    date: "10 de Junho, 2023",
    description: "Três dias mágicos na montanha, onde descobrimos que somos a dupla perfeita para qualquer aventura.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
    story: `Nossa primeira viagem juntos foi mais perfeita do que eu poderia imaginar. Você planejou cada detalhe com tanto carinho.

Acordar com a vista das montanhas ao seu lado foi um dos momentos mais especiais da minha vida. Caminhamos pelas trilhas, descobrimos cachoeiras escondidas e fizemos piqueniques improvisados.

À noite, ficávamos horas conversando sob as estrelas, planejando futuras aventuras e compartilhando nossos sonhos mais secretos.

Foi nessa viagem que percebi que não importa onde estejamos, desde que seja ao seu lado, qualquer lugar se torna o paraíso.`
  },
  {
    id: 3,
    title: "Cozinhando Juntos",
    date: "22 de Agosto, 2023",
    description: "A noite em que tentamos fazer lasanha e acabamos fazendo uma bagunça deliciosa na cozinha.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    story: `Decidimos ser chefs por uma noite e o resultado foi hilário! Você insistiu que sabia fazer lasanha "de olhos fechados".

O que começou como uma receita simples se transformou em uma comédia de erros. Farinha por todo lado, molho no teto (até hoje não sei como conseguiu isso) e nós dois rindo até não conseguir mais.

No final, a lasanha ficou meio torta e grudada na forma, mas foi a refeição mais gostosa que já comi. Não pela comida, mas pela companhia e pelas risadas.

Esse dia me ensinou que os melhores momentos são os mais simples, quando estamos juntos fazendo qualquer coisa.`
  },
  {
    id: 4,
    title: "Dançando na Chuva",
    date: "5 de Setembro, 2023",
    description: "O dia em que a chuva estragou nosso piquenique, mas criou uma das memórias mais românticas da nossa vida.",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&h=500&fit=crop",
    story: `Estávamos no parque para um piquenique romântico quando começou a chover torrencialmente. Todo mundo correu para se abrigar, mas você teve uma ideia louca.

"Vamos dançar na chuva!" você disse, estendendo a mão para mim. Sem música, sem plateia, apenas nós dois e o som da chuva como trilha sonora.

Dançamos e giramos até ficarmos encharcados e com frio, mas nossos corações estavam aquecidos de felicidade. As pessoas pensaram que éramos loucos, e talvez fossemos mesmo.

Mas foi ali, dançando na chuva com você, que entendi o que significa ser verdadeiramente livre e feliz. Você me ensina todos os dias que os melhores momentos são os espontâneos.`
  },
  {
    id: 5,
    title: "Nosso Aniversário de 6 Meses",
    date: "14 de Agosto, 2023",
    description: "Uma noite especial onde celebramos meio ano de amor puro e verdadeiro.",
    image: "https://images.unsplash.com/photo-1518707059019-d57cc8908e76?w=500&h=500&fit=crop",
    story: `Você organizou uma surpresa linda para celebrarmos nossos 6 meses juntos. Transformou seu quarto em um cinema particular, com luzes piscando e pipoca feita em casa.

Assistimos ao filme que você disse que mudou sua vida, e entendi porque: era sobre encontrar a pessoa certa no momento certo. Chorei no final, e você riu da minha sensibilidade.

Depois ficamos conversando sobre como nossa vida mudou nesses 6 meses. Como crescemos juntos, como nos apoiamos e como cada dia é uma nova descoberta.

Naquela noite, prometi a mim mesmo que faria de tudo para que nossa história continuasse sendo escrita com tanto amor e carinho quanto começou.`
  },
  {
    id: 6,
    title: "Adotando Nossa Plantinha",
    date: "3 de Outubro, 2023",
    description: "O dia em que decidimos adotar nossa primeira 'filha verde' e demos a ela o nome de Esperança.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    story: `Passando pela floricultura, você parou na frente de uma pequena suculenta e disse: "Ela precisa de uma família". Sem hesitar, decidimos adotá-la.

Você insistiu que deveríamos dar um nome a ela, e depois de muito debate, escolhemos "Esperança". Compramos um vasinho lindo e prometemos cuidar dela juntos.

Todos os domingos regamos a Esperança e conversamos sobre como ela está crescendo. Virou nosso ritual e nossa responsabilidade compartilhada.

É engraçoso como uma plantinha tão pequena pode representar tanto: nosso comprometimento, nosso cuidado mútuo e nossa capacidade de nutrir algo juntos. Esperança continua crescendo, assim como nosso amor.`
  }
];
