// script.js

// Objetos com as informações das linhas de trem, ônibus e metrô do Rio de Janeiro
const linhas = {
    trem: {
        linha1: {
            nome: "Saracuruna",
            descricao: "A Linha Saracuruna conecta de Saracuruna a Central do Brasil.",
            estacoes: [
                "Central do Brasil", 
                "São Cristóvão", 
                "Maracanã", 
                "Mangueira/Jamelão",
                "Triagem",
                "Manguinhos",
                "Bonsucesso",
                "Ramos",
                "Olaria",
                "Penha",
                "Penha Circular",
                "Brás de Pina",
                "Cordovil",
                "Parada de Lucas",
                "Vigário Geral",
                "Duque de Caxias",
                "Corte Oito",
                "Gramacho",
                "Campos Elíseos",
                "Jardim Primavera",
                "Saracuruna"
            ]
        },
        
    },

    onibus: {
        linha100: {
            nome: "Linha 100 - Barra Shopping",
            descricao: "A linha 100 conecta a Barra da Tijuca ao Centro do Rio de Janeiro, passando por diversos pontos turísticos.",
            paradas: [
                "Barra Shopping", 
                "Praia do Pepê", 
                "Praia de Copacabana",
                "Praia de Ipanema",
                "Praia do Leme",
                "Centro do Rio"
            ]
        },
        linha200: {
            nome: "Linha 200 - Zona Sul",
            descricao: "Essa linha liga a Zona Sul, passando por Ipanema e Leblon até o Centro.",
            paradas: [
                "Leblon", 
                "Ipanema", 
                "Copacabana", 
                "Praia do Leme", 
                "Centro do Rio"
            ]
        },
        linha400: {
            nome: "Linha 400 - Santa Teresa",
            descricao: "Linha que percorre a região de Santa Teresa, passando por ruas históricas e bairros culturais.",
            paradas: [
                "Centro", 
                "Santa Teresa", 
                "Largo do Curvelo", 
                "Largo do Machado"
            ]
        },
        linha450: {
            nome: "Linha 450 - Barra da Tijuca",
            descricao: "Essa linha conecta o Centro do Rio à Barra da Tijuca, passando por Botafogo e Flamengo.",
            paradas: [
                "Centro", 
                "Botafogo", 
                "Flamengo", 
                "Praia do Pepe", 
                "Barra da Tijuca"
            ]
        },
        linha500: {
            nome: "Linha 500 - Zona Oeste",
            descricao: "Conecta a Zona Oeste do Rio, passando por bairros como Campo Grande e Bangu.",
            paradas: [
                "Campo Grande",
                "Bangu",
                "Santa Cruz",
                "Realengo",
                "Magalhães Bastos"
            ]
        },
        linha601: {
            nome: "Linha 601 - Duque de Caxias",
            descricao: "A linha 601 conecta o Centro do Rio a Duque de Caxias, passando por bairros como São João de Meriti.",
            paradas: [
                "Centro", 
                "São João de Meriti", 
                "Duque de Caxias", 
                "Vila Operária"
            ]
        },
        linha602: {
            nome: "Linha 602 - Belford Roxo",
            descricao: "Essa linha conecta a Zona Norte ao município de Belford Roxo, atravessando o bairro de Nova Iguaçu.",
            paradas: [
                "Centro", 
                "Belford Roxo", 
                "Nova Iguaçu"
            ]
        },
        linha603: {
            nome: "Linha 603 - Nilópolis",
            descricao: "Conecta a Zona Norte ao município de Nilópolis, com paradas em locais como Queimados e Mesquita.",
            paradas: [
                "Centro", 
                "Nilópolis", 
                "Mesquita", 
                "Queimados"
            ]
        },
        linha604: {
            nome: "Linha 604 - Caxias",
            descricao: "Essa linha conecta a estação de trem da Central ao bairro de Duque de Caxias.",
            paradas: [
                "Centro", 
                "Duque de Caxias", 
                "Vila São Luiz", 
                "Campos Elíseos"
            ]
        },
        linha607: {
            nome: "Linha 607 - Duque de Caxias (Centro)",
            descricao: "Linha que vai do Centro ao município de Duque de Caxias, passando por bairros como Saracuruna e São João de Meriti.",
            paradas: [
                "Centro", 
                "Saracuruna", 
                "São João de Meriti", 
                "Duque de Caxias"
            ]
        },
        linha620: {
            nome: "Linha 620 - Nova Iguaçu",
            descricao: "Essa linha conecta o Centro do Rio de Janeiro ao município de Nova Iguaçu.",
            paradas: [
                "Centro", 
                "Nova Iguaçu", 
                "Saracuruna", 
                "Campo Grande"
            ]
        },
        linha630: {
            nome: "Linha 630 - Mesquita",
            descricao: "Conecta a Zona Norte do Rio ao município de Mesquita, com paradas em pontos como Nilópolis e Queimados.",
            paradas: [
                "Centro", 
                "Mesquita", 
                "Nilópolis", 
                "Queimados"
            ]
        },
        linha650: {
            nome: "Linha 650 - Caxias",
            descricao: "Esta linha conecta o Centro do Rio à Duque de Caxias, com diversas paradas intermunicipais.",
            paradas: [
                "Centro", 
                "Duque de Caxias", 
                "Vila Operária", 
                "Vila São Luiz"
            ]
        },
        linha751: {
            nome: "Linha 751 - Itaboraí",
            descricao: "Conecta o Rio de Janeiro à cidade de Itaboraí, com várias paradas em municípios vizinhos.",
            paradas: [
                "Centro", 
                "São Gonçalo", 
                "Itaboraí", 
                "Niterói"
            ]
        }
    },

};

// Função para atualizar as opções de linhas conforme o tipo de transporte escolhido
document.getElementById('transporteSelect').addEventListener('change', function() {
    const tipoTransporte = this.value;
    const selectLinha = document.getElementById('linhaSelect');
    
    // Limpa o select de linhas antes de adicionar novas opções
    selectLinha.innerHTML = '<option value="">Selecione uma linha...</option>';
    
    if (tipoTransporte) {
        const opcoes = linhas[tipoTransporte];
        
        // Preenche o select com as linhas correspondentes ao tipo de transporte
        for (const linha in opcoes) {
            const option = document.createElement('option');
            option.value = linha;
            option.textContent = opcoes[linha].nome;
            selectLinha.appendChild(option);
        }
    }
});

// Exibir detalhes das linhas selecionadas
document.getElementById('linhaSelect').addEventListener('change', function() {
    const tipoTransporte = document.getElementById('transporteSelect').value;
    const linhaSelecionada = this.value;
    const detalhesLinha = document.getElementById('detalhesLinha');
    
    if (tipoTransporte && linhaSelecionada) {
        const linha = linhas[tipoTransporte][linhaSelecionada];
        
        // Exibe as informações da linha selecionada
        detalhesLinha.innerHTML = ` 
            <strong>${linha.nome}</strong><br><br>
            ${linha.descricao}<br><br>
            <strong>Principais Paradas:</strong><br>
            <ul>
                ${linha.estacoes ? linha.estacoes.map(estacao => `<li>${estacao}</li>`).join('') : linha.paradas.map(parada => `<li>${parada}</li>`).join('')}
            </ul>
        `;
    } else {
        detalhesLinha.innerHTML = 'Selecione um tipo de transporte e uma linha para visualizar as informações.';
    }
});
