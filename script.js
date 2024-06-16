document.addEventListener("DOMContentLoaded", function () {
    const produtos = [
        { nome: "Sofá Retrátil/Reclinável 2 lugares", categoria: "Sala", foto: "./imagens/sofa.png", cor: "#6a717d", reservado: false },
        { nome: "Painel TV", categoria: "Sala", foto: "./imagens/painel.jpg", cor: "#6a717d,#a8876a,#ede1b4", reservado: true },
        { nome: "Tapete Sala", categoria: "Sala", foto: "./imagens/tapete.webp", cor: "#6a717d,#a8876a,#000000", reservado: true },
        { nome: "Cortina Blackout Sala", categoria: "Sala", foto: "./imagens/cortina.webp", cor: "#6a717d,#ffffff", reservado: false },
        { nome: "Almofada Sofá", categoria: "Sala", foto: "./imagens/almofad.webp", cor: "#ffffff", reservado: false },

        { nome: "Geladeira", categoria: "Cozinha", foto: "./imagens/geladeira.webp", cor: "#6a717d,#ffffff", reservado: false },
        { nome: "Armário Cozinha", categoria: "Cozinha", foto: "./imagens/armario.jpg", cor: "#a8876a,#000000", reservado: true },
        { nome: "Jogo de Panelas", categoria: "Cozinha", foto: "./imagens/panela.jpg", cor: "#6a717d,#000000,#FF0000", reservado: true },
        { nome: "Mesa Cozinha 4 Cadeiras", categoria: "Cozinha", foto: "./imagens/mesa.webp", cor: "#a8876a,#000000", reservado: true },
        { nome: "Micro-ondas", categoria: "Cozinha", foto: "./imagens/micro.jpg", cor: "#6a717d,#000000", reservado: true },
        { nome: "Jogo de Pratos", categoria: "Cozinha", foto: "./imagens/prato.webp", cor: "#ffffff", reservado: true },
        { nome: "Jogo de Copos", categoria: "Cozinha", foto: "./imagens/copos.webp", cor: "", reservado: true },
        { nome: "Jogo de Xícaras", categoria: "Cozinha", foto: "./imagens/jogoXicara.webp", cor: "#6a717d,#ffffff", reservado: true },
        { nome: "Faqueiro", categoria: "Cozinha", foto: "./imagens/faqueiro.webp", cor: "", reservado: true },
        { nome: "Suggar", categoria: "Cozinha", foto: "./imagens/sugar.avif", cor: "#ffffff,#6a717d", reservado: false },
        { nome: "Sanduicheira", categoria: "Cozinha", foto: "./imagens/sanduiche.webp", cor: "#000000,#6a717d", reservado: true },
        { nome: "Purificador de Àgua ", categoria: "Cozinha", foto: "./imagens/agua.webp", cor: "#ffffff,#6a717d", reservado: false },
        { nome: "Jogo de Conchas", categoria: "Cozinha", foto: "./imagens/jogoConcha.webp", cor: "", reservado: true },
        { nome: "Cortina Cozinha", categoria: "Cozinha", foto: "./imagens/cortinaCozinha.jpg", cor: "#ffffff", reservado: false },
        { nome: "Jogo Tapete Cozinha", categoria: "Cozinha", foto: "./imagens/jogoTapete.webp", cor: "#6a717d,#000000", reservado: false },
        { nome: "Potes Herméticos de vidro", categoria: "Cozinha", foto: "./imagens/potes.webp", cor: "", reservado: true },

        { nome: "Cama Super King", categoria: "Quarto", foto: "./imagens/cama.jpg", cor: "", reservado: false },
        { nome: "Guarda Roupas 6 Portas", categoria: "Quarto", foto: "./imagens/guarda.webp", cor: "#000000,#a8876a", reservado: false },
        { nome: "Cortina Quarto Blackout", categoria: "Quarto", foto: "./imagens/cortinaQuarto.jpg", cor: "#6a717d,#ffffff", reservado: true },
        { nome: "Tapete Quarto", categoria: "Quarto", foto: "./imagens/tapeteSala.jpg", cor: "#ffffff,#000000", reservado: true },
        { nome: "Jogo de Cama Super King", categoria: "Quarto", foto: "./imagens/jogoCama.webp", cor: "#6a717d,#000000", reservado: true },
        { nome: "Travesseiros", categoria: "Quarto", foto: "./imagens/travesseiro.webp", cor: "", reservado: false },
        { nome: "Jogo de Toalhas", categoria: "Quarto", foto: "./imagens/toalhas.webp", cor: "#ffffff,#6a717d", reservado: true },

        { nome: "Máquina de Lavar Roupas 12kg", categoria: "Lavanderia", foto: "./imagens/maquina.avif", cor: "#ffffff,#6a717d", reservado: false },
        { nome: "Armário Multiuso", categoria: "Lavanderia", foto: "./imagens/armarioLavanderia.webp", cor: "#ffffff", reservado: false },
        { nome: "Tábua de Passar Roupa", categoria: "Lavanderia", foto: "./imagens/tabua.jpg", cor: "#ffffff,#6a717d", reservado: true },
 
        { nome: "Aviãozinho do Silvio Santos R$ 100,00", categoria: "Divertido", foto: "./imagens/silvio.webp", cor: "", reservado: false },
        { nome: "Primeiro jantar do casal R$ 80,00", categoria: "Divertido", foto: "./imagens/jantar.avif", cor: "", reservado: false },
        { nome: "Vaquinha Mimosa R$ 50,00", categoria: "Divertido", foto: "./imagens/mimosa.jpeg", cor: "", reservado: false },
        { nome: "Vaquinha Adelaide R$ 150,00", categoria: "Divertido", foto: "./imagens/adelaide.jpg", cor: "", reservado: false },
        { nome: "Conta de luz dos noivos R$ 180,00", categoria: "Divertido", foto: "./imagens/luz.jpeg", cor: "", reservado: false },
        { nome: "Conta de água dos noivos R$ 100,00", categoria: "Divertido", foto: "./imagens/agua.jpg", cor: "", reservado: false },
        { nome: "Conta de internet dos noivos R$ 110,00", categoria: "Divertido", foto: "./imagens/internet.webp", cor: "", reservado: false },
        { nome: "Despedida de solteira da noiva R$ 250,00", categoria: "Divertido", foto: "./imagens/despedidaNoiva.jpg", cor: "", reservado: false },
        { nome: "Despedida de solteiro do noivo R$ 250,00", categoria: "Divertido", foto: "./imagens/despedidaNoivo.jpeg", cor: "", reservado: false },
        { nome: "Um ano de NETFLIX R$ 200,00", categoria: "Divertido", foto: "./imagens/netflix.png", cor: "", reservado: false },
        { nome: "Lua de mel do casal R$ 500,00", categoria: "Divertido", foto: "./imagens/luaMel.jpeg", cor: "", reservado: false },
    

    ];

    const salaLista = document.getElementById("sala-lista");
    const cozinhaLista = document.getElementById("cozinha-lista");
    const quartoLista = document.getElementById("quarto-lista");
    const lavanderiaLista = document.getElementById("lavanderia-lista");
    const divertidoLista = document.getElementById("divertido-lista")

    produtos.forEach(produto => {
        const itemLista = document.createElement("li");
        itemLista.className = "lista"
        const img = document.createElement("img");

        img.src = produto.foto;
        img.alt = produto.nome;
        itemLista.appendChild(img);

        if (produto.cor != "") {
            var arrayCores = produto.cor.split(",");
            const div = document.createElement("div");
            arrayCores.forEach(cor => {
                const divCor = document.createElement("div")
                divCor.className = "divCor"
                divCor.style.backgroundColor = cor;
                div.appendChild(divCor);

            })
            itemLista.appendChild(div);
        }

        const nomeProduto = document.createElement("span");
        nomeProduto.textContent = produto.nome;
        itemLista.appendChild(nomeProduto);

        if (produto.reservado == false) {
            itemLista.addEventListener("click", function () {
                const categoria = produto.categoria;
                const nome = produto.nome;
                const nomePessoa = document.getElementById("nomePessoa").value;
                if (nomePessoa != "") {
                    abrirWhatsApp(categoria, nome, nomePessoa);
                } else {

                    document.querySelector('header').scrollIntoView({
                        behavior: 'smooth'
                    });
                    alert("Preencha o campo Nome!");
                }
            });
        } else {
            itemLista.style.cursor = "default";
            const label = document.createElement("label");
            label.textContent = "RESERVADO";
            label.className = "reservado";
            itemLista.appendChild(label);
        }

        if (produto.categoria === "Sala") {
            salaLista.appendChild(itemLista);
        } else if (produto.categoria === "Cozinha") {
            cozinhaLista.appendChild(itemLista);
        } else if (produto.categoria === "Quarto") {
            quartoLista.appendChild(itemLista);
        } else if (produto.categoria === "Lavanderia") {
            lavanderiaLista.appendChild(itemLista);
        } else if (produto.categoria === "Divertido") {
            divertidoLista.appendChild(itemLista);
        }




    });

    function abrirWhatsApp(categoria, nome, nomePessoa) {
        let mensagem = "Olá! Gostaria de confirmar a lista de presentes.\nCategoria: " + categoria + "\nProduto: " + nome + "\nNome: " + nomePessoa;
        let url = "";
        const numeroTelefone = '62993726328';
        if (window.innerWidth < 600) {
            // Se o dispositivo for móvel, abre o WhatsApp com o protocolo wa.me
            url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
        } else {
            // Se não for móvel, abre o WhatsApp Desktop com o protocolo web.whatsapp.com
            url = `https://web.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
        }

        window.location.href = url;
    }

    window.addEventListener("scroll", function () {
        var listaItems = document.querySelectorAll('.lista');

        listaItems.forEach(function (item) {
            var posicao = item.getBoundingClientRect().top;
            var alturaDaJanela = window.innerHeight;

            if (posicao < alturaDaJanela) {
                item.classList.add('mostrar');
            }
        });
    });

});

window.onload = function () {
    const msg = "Clique no produto que deseja presentear e você será redirecionado para o WhatsApp !";
    alert(msg);
}
