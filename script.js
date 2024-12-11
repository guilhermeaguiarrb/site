// Lista de pontos turísticos e lazer por região no Rio de Janeiro
const locations = [
    // Zona Norte
    {
        name: "Maracanã",
        lat: -22.912160,
        lng: -43.230220,
        address: "Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ",
        hours: "Diariamente, das 9h às 17h (exceto em dias de jogos)",
        price: "R$ 65,00 (tour pelo estádio)",
        description: "O maior estádio do Brasil, palco de eventos históricos."
    },
    {
        name: "Quinta da Boa Vista",
        lat: -22.906541,
        lng: -43.222569,
        address: "São Cristóvão, Rio de Janeiro - RJ",
        hours: "Diariamente, 24h",
        price: "Gratuito",
        description: "Um enorme parque público com jardins, lagos e o Museu Nacional."
    },
    {
        name: "Norte Shopping",
        lat: -22.880715,
        lng: -43.297691,
        address: "Av. Dom Hélder Câmara, 5474 - Cachambi, Rio de Janeiro - RJ",
        hours: "Diariamente, das 10h às 22h",
        price: "Gratuito para entrada",
        description: "Um dos maiores shoppings da Zona Norte, com cinemas, lojas e praça de alimentação."
    },
    // Zona Sul
    {
        name: "Cristo Redentor",
        lat: -22.951916,
        lng: -43.210487,
        address: "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ",
        hours: "Diariamente, das 8h às 19h",
        price: "R$ 31,00 a R$ 88,00",
        description: "Uma das Sete Maravilhas do Mundo Moderno, com vista espetacular do Rio."
    },
    {
        name: "Praia de Copacabana",
        lat: -22.971177,
        lng: -43.182543,
        address: "Av. Atlântica, Copacabana, Rio de Janeiro - RJ",
        hours: "Acesso livre, 24 horas",
        price: "Gratuito",
        description: "Famosa praia carioca conhecida por suas areias brancas e animado calçadão."
    },
    {
        name: "Parque Lage",
        lat: -22.966750,
        lng: -43.211181,
        address: "R. Jardim Botânico, 414 - Jardim Botânico, Rio de Janeiro - RJ",
        hours: "Diariamente, das 8h às 17h",
        price: "Gratuito",
        description: "Parque histórico com jardins, trilhas e uma cafeteria popular."
    },
    // Zona Oeste
    {
        name: "Barra Shopping",
        lat: -22.999623,
        lng: -43.360054,
        address: "Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ",
        hours: "Diariamente, das 10h às 22h",
        price: "Gratuito para entrada",
        description: "O maior shopping do Rio, com diversas opções de lazer."
    },
    {
        name: "Praia do Recreio dos Bandeirantes",
        lat: -23.027506,
        lng: -43.470774,
        address: "Av. Lúcio Costa, Recreio dos Bandeirantes, Rio de Janeiro - RJ",
        hours: "Livre, 24h",
        price: "Gratuito",
        description: "Praia tranquila, ideal para surf e famílias."
    },
    {
        name: "Bosque da Barra",
        lat: -22.998675,
        lng: -43.384951,
        address: "Av. das Américas, 6000 - Barra da Tijuca, Rio de Janeiro - RJ",
        hours: "Diariamente, das 6h às 18h",
        price: "Gratuito",
        description: "Parque ecológico ideal para caminhadas e piqueniques."
    },
    // Centro
    {
        name: "Museu do Amanhã",
        lat: -22.895854,
        lng: -43.181416,
        address: "Praça Mauá, 1 - Centro, Rio de Janeiro - RJ",
        hours: "Terça a domingo, das 10h às 18h",
        price: "R$ 20,00 (inteira)",
        description: "Museu interativo sobre ciência e sustentabilidade."
    },
    {
        name: "AquaRio",
        lat: -22.895893,
        lng: -43.194437,
        address: "Praça Muhammad Ali, Gamboa, Rio de Janeiro - RJ",
        hours: "Diariamente, das 9h às 17h",
        price: "R$ 50,00 a R$ 140,00",
        description: "O maior aquário marinho da América do Sul."
    },
    // Baixada Fluminense
    {
        name: "Shopping Nova Iguaçu",
        lat: -22.756279,
        lng: -43.460841,
        address: "Av. Abílio Augusto Távora, 1111 - Nova Iguaçu, RJ",
        hours: "Diariamente, das 10h às 22h",
        price: "Gratuito para entrada",
        description: "Shopping moderno com cinema, restaurantes e lojas populares."
    },
    {
        name: "Museu Ciência e Vida",
        lat: -22.789580,
        lng: -43.307340,
        address: "Rua Ailton da Costa, 23, Duque de Caxias, RJ, 25071-160",
        hours: "Ter-sab, das 9H às 17H e Domingo e Feriados: 13h ás 17H",
        price: "Gratuito",
        description: "Popularizar e difundir a cultura, a ciência e a arte."
    },
    {
        name: "Museu Vivo do São Bento",
        lat: -22.725105,
        lng: -43.306934,
        address: "Rua Benjamin da Rocha Junior (Sao Bento), Duque de Caxias, RJ, 25045-010",
        hours: "Seg-sex das 9H ás 17H",
        price: "Gratuito",
        description: "O Museu Vivo do São Bento é um Ecomuseu de Percurso."
    },
    {
        name: "Museu Histórico de Duque de Caxias",
        lat: -22.621201,
        lng: -43.234498,
        address: "Av. Automóvel Clube, S/n - Taquara, Duque de Caxias - RJ, 25045-002",
        hours: "Seg-fechado Ter-Sáb das 09H ás 17H",
        price: "Gratuito",
        description: "O Museu Histórico do Duque de Caxias e da Taquara ocupa o lugar que foi sede da Fazenda São Paulo"
    },
{
    name: "Outlet Premium Rio de Janeiro",
    lat: -22.676394,
    lng: -43.288494,
    address: "Chácaras Rio-Petrópolis, Duque de Caxias - RJ, 25230-005",
    hours: "Todos os dias: 09h ÀS 21H",
    price: "Gratuito",
    description: "O Outlet Premium proporciona uma experiência de compra agradável de qualidade e de fácil acesso"
},
{
    name: "Caxias Shopping",
    lat: -22.787260,
    lng: -43.286316,
    address: "Rod. Washington Luiz 2895, Duque de Caxias, RJ, 25085-008",
    hours: "Todos os dias: 10h ÀS 23H",
    price: "Gratuito",
    description: "Um shopping genuinamente duquecaxiense"
},
{
    name: "Shopping Unigranrio",
    lat: -22.789115,
    lng: -43.306369,
    address: "R Professor José de Souza Herdy, 1216 - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ, 25071-202",
    hours: "Seg à Sex: 09H às 21H, Sáb: 09H às 18H, Dom: Fechado",
    price: "Gratuito",
    description: "O maior shopping center no centro do município de Duque de Caxias"
},
{
    name: "Biblioteca Leonel de Moura Brizola",
    lat: -22.788815,
    lng: -43.310353,
    address: "Pça. Pacificador S/N, Duque de Caxias, RJ",
    hours: "Horário: Seg-Sáb- 09:00 às 17:00",
    price: "Gratuito",
    description: "Uma biblioteca com mais de 12 mil exemplares e cerca de 5 mil gibis nacionais e internacionais."
},
{
    name: "BIBLIOTECA UERJ",
    lat: -22.775269,
    lng: -43.296586,
    address: "Rua Gen. Manoel Rabelo, Duque de Caxias, RJ, 25065-050",
    hours: "Horário: Seg-Sex- 09:00 ás 20:00, Sáb-09:00 ás 12:00",
    price: "Gratuito",
    description: "A biblioteca visa dar suporte ás atividades da FEBF, através do seu acervo de livros"
},
{
    name: "Biblioteca Comunitária Josimar Coelho da Silva",
    lat: -22.693098,
    lng: -43.256535,
    address: "Rua Agostinho de Oliveira, nº 991 fundos - Jardim Sant'Ana do Pilar - Duque de Caxias - Rio de Janeiro. Cep: 25.222/000",
    hours: "Horário: Seg-Sex- 09:00 ás 17:00",
    price: "Gratuito",
    description: "O principal objetivo dessa biblioteca é a valorização da literatura"
},
{
    name: "Teatro Municipal Raul Cortez",
    lat: -22.788003,
    lng: -43.310284,
    address: "Pça. do Pacificador S/N, Duque de Caxias, RJ, 25020-060",
    hours: "Qua-Dom- 9h às 22:00",
    price: "Consultar Valores no Site",
    description: "O maior espaço público de artes cênicas da Baixada Fluminense"
},
{
    name: "Teatro Municipal Raul Cortez",
    lat: -22.788003,
    lng: -43.310284,
    address: "Pça. do Pacificador S/N, Duque de Caxias, RJ, 25020-060",
    hours: "Qua-Dom- 9h às 22:00",
    price: "Consultar Valores no Site",
    description: "O maior espaço público de artes cênicas da Baixada Fluminense"
},
{
    name: "Praça da Apoteose de Caxias",
    lat: -22.777414,
    lng: -43.292674,
    address: "Av. Brasil - Vila São Luis, Duque de Caxias - RJ, 25065-005",
    hours: "24 horas",
    price: "Gratuito"
},
{
    name: "Praça Humaitá",
    lat: -22.792140,
    lng: -43.301242,
    address: "Avenida Brigadeiro Lima e Silva - Bairro Jardim Vinte e Cinco de Agosto - RJ, 25071-181",
    hours: "24 horas",
    price: "Gratuito"
},
{
    name: "Praça Roberto Silveira",
    lat: -22.789895,
    lng: -43.307570,
    address: "Pça. Roberto Silveira, Duque de Caxias, RJ, 25070-005",
    hours: "24 horas",
    price: "Gratuito"
},
{
    name: "Vila Olímpica de Duque de Caxias",
    lat: -22.795764,
    lng: -43.301993,
    address: "R. Garibaldi, S/N - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ, 25075-095",
    hours: "Seg-Sex-06:00 às 22:00- Sáb e Dom- 06:00–17:00",
    price: "Gratuito"
},
{
    name: "CEPE - Caxias",
    lat: -22.719497,
    lng: -43.287004,
    address: "R. Garibaldi, S/N - Jardim Vinte e Cinco de Agosto, Duque de Caxias - RJ, 25075-095",
    hours: "Seg-Sex-06:00 às 22:00- Sáb e Dom- 06:00–17:00",
    price: "Consultar Valores no Site"
},
{
    name: "CTP - Clube de Tiro Patriotas",
    lat: -22.706285,
    lng: -43.312115,
    address: "Av. Governador Leonel de Moura Brizola, 13340 - Pilar, Duque de Caxias - RJ, 25233-001",
    hours: "Seg-Sáb- 09:00 às 19:00",
    price: "Consultar Valores no Site"
},
{
    name: "Hospital Municipal de Duque de Caxias",
    lat: -22.786736,
    lng: -43.310300,
    address: "Rua Correia Meyer 127, Duque de Caxias, RJ, 25070-360",
    hours: "24 horas.",
    price: "Gratuito- Hospital Publico"
},
{
    name: "Hospital Municipal Dr. Moacyr Rodrigues do Carmo",
    lat: -22.781098,
    lng: -43.285691,
    address: "Rod. Washington Luis 3200, Duque de Caxias, RJ, 25070-260",
    hours: "24 horas.",
    price: "Gratuito- Hospital Publico"
},
{
    name: "Hospital Adão Pereira Nunes",
    lat: -22.751959,
    lng: -43.287237,
    address: "Rod. Washington Luiz S/N, Duque de Caxias, RJ, 25225-015",
    hours: "24 horas.",
    price: "Gratuito- Hospital Publico"
},
{
    name: "Hospital Caxias Dor",
    lat: -22.795607,
    lng: -43.296033,
    address: "Av. Brigadeiro Lima e Silva 821, Duque de Caxias, RJ, 25071-182",
    hours: "24 horas.",
    price: "Consultar no site- Hospital Particular"
},
{
    name: "Hospital de Clínicas Mário Lioni",
    lat: -22.786290,
    lng: -43.305557,
    address: "Rua Ana Neri 190, Duque de Caxias, RJ, 25070-420",
    hours: "24 horas.",
    price: "Consultar no site- Hospital Particular"
},
{
    name: "Hospital Daniel Lipp",
    lat: -22.787097,
    lng: -43.308537,
    address: "Rua Conde de Porto Alegre 271, Duque de Caxias, RJ, 25070-350",
    hours: "24 horas.",
    price: "Consultar no site- Hospital Particular"
},
];

// Inicializando o mapa
const map = L.map('map').setView([-22.9068, -43.1729], 11);

// Adicionando mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Criando marcadores e populando lista
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`
        <strong>${location.name}</strong><br>
        <em>${location.address}</em><br>
        <strong>Horário:</strong> ${location.hours}<br>
        <strong>Preço:</strong> ${location.price}<br>
        <p>${location.description}</p>
    `);

    const listItem = document.createElement('li');
    listItem.textContent = location.name;
    listItem.addEventListener('click', () => {
        // Ajustando a visualização do mapa
        map.setView([location.lat, location.lng], 15);
        marker.openPopup();
        
        // Rolando a página até o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });
    document.getElementById('locations-list').appendChild(listItem);
});

