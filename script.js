document.addEventListener("DOMContentLoaded", function () {
    const produtos = [
        { nome: "Sofá", categoria: "Sala", foto: "./imagens/sofa.png", cor: "#6a717d" },
        { nome: "Painel TV", categoria: "Sala", foto: "./imagens/painel.jpg", cor: "#6a717d,#a8876a,#ede1b4" },
        { nome: "Tapete Sala", categoria: "Sala", foto: "./imagens/tapete.webp", cor: "#6a717d,#a8876a,#000000" },
        { nome: "Cortina Blackout Sala", categoria: "Sala", foto: "./imagens/cortina.webp", cor: "#6a717d,#ffffff" },
        { nome: "Almofada Sofá", categoria: "Sala", foto: "./imagens/almofad.webp", cor: "#ffffff" },

        { nome: "Geladeira", categoria: "Cozinha", foto: "./imagens/geladeira.webp", cor: "#6a717d,#ffffff" },
        { nome: "Armário Cozinha", categoria: "Cozinha", foto: "./imagens/armario.jpg", cor: "#a8876a,#000000" },
        { nome: "Mesa Cozinha 4 Cadeiras", categoria: "Cozinha", foto: "./imagens/mesa.webp", cor: "#a8876a,#000000" },
        { nome: "Micro-ondas", categoria: "Cozinha", foto: "./imagens/micro.jpg", cor: "#6a717d,#000000" },
        { nome: "Jogo de Pratos", categoria: "Cozinha", foto: "./imagens/prato.webp", cor: "#ffffff" },
        { nome: "Jogo de Copos", categoria: "Cozinha", foto: "./imagens/copos.webp", cor: "" },
        { nome: "Jogo de Xícaras", categoria: "Cozinha", foto: "./imagens/jogoXicara.webp", cor: "#6a717d,#ffffff" },
        { nome: "Faqueiro", categoria: "Cozinha", foto: "./imagens/faqueiro.webp", cor: "" },
        { nome: "Suggar", categoria: "Cozinha", foto: "./imagens/sugar.avif", cor: "#ffffff,#6a717d" },
        { nome: "Sanduicheira", categoria: "Cozinha", foto: "./imagens/sanduiche.webp", cor: "#000000,#6a717d" },
        { nome: "Purificador de Àgua ", categoria: "Cozinha", foto: "./imagens/agua.webp", cor: "#ffffff,#6a717d" },
        { nome: "Jogo de Conchas", categoria: "Cozinha", foto: "./imagens/jogoConcha.webp", cor: "" },
        { nome: "Cortina Cozinha", categoria: "Cozinha", foto: "./imagens/cortinaCozinha.jpg", cor: "#ffffff" },
        { nome: "Jogo Tapete Cozinha", categoria: "Cozinha", foto: "./imagens/jogoTapete.webp", cor: "#6a717d,#000000" },

        { nome: "Cama Super King", categoria: "Quarto", foto: "./imagens/cama.jpg", cor: "" },
        { nome: "Guarda Roupas 6 Portas", categoria: "Quarto", foto: "./imagens/guarda.webp", cor: "#000000,#a8876a" },
        { nome: "Cortina Quarto Blackout", categoria: "Quarto", foto: "./imagens/cortinaQuarto.jpg", cor: "#6a717d,#ffffff" },
        { nome: "Tapete Quarto", categoria: "Quarto", foto: "./imagens/tapeteSala.jpg", cor: "#ffffff,#000000" },
        { nome: "Jogo de Cama Super King", categoria: "Quarto", foto: "./imagens/jogoCama.webp", cor: "#6a717d,#000000" },
        { nome: "Travesseiros", categoria: "Quarto", foto: "./imagens/travesseiro.webp", cor: "" },
        { nome: "Jogo de Toalhas", categoria: "Quarto", foto: "./imagens/toalhas.webp", cor: "#ffffff,#6a717d" },

        { nome: "Máquina de Lavar Roupas 12kg", categoria: "Lavanderia", foto: "./imagens/maquina.avif", cor: "#ffffff,#6a717d"},
        { nome: "Armário Multiuso", categoria: "Lavanderia", foto: "./imagens/armarioLavanderia.webp", cor: "#ffffff"},
        { nome: "Tábua de Passar Roupa", categoria: "Lavanderia", foto: "./imagens/tabua.jpg", cor: "#ffffff,#6a717d"},
        

        
        
        

        

      
    ];

    const salaLista = document.getElementById("sala-lista");
    const cozinhaLista = document.getElementById("cozinha-lista");
    const quartoLista = document.getElementById("quarto-lista");
    const lavanderiaLista = document.getElementById("lavanderia-lista");

    produtos.forEach(produto => {
        const itemLista = document.createElement("li");
        const img = document.createElement("img");

        img.src = produto.foto;
        img.alt = produto.nome;
        itemLista.appendChild(img);

        if (produto.cor != "") {
            var arrayCores = produto.cor.split(",");
            const div = document.createElement("div");
            arrayCores.forEach(cor => {
                const divCor = document.createElement("div")
                divCor.className= "divCor"
                divCor.style.backgroundColor = cor;
                div.appendChild(divCor);

            })
            itemLista.appendChild(div);
        }

        const nomeProduto = document.createElement("span");
        nomeProduto.textContent = produto.nome;
        itemLista.appendChild(nomeProduto);
        itemLista.addEventListener("click", function () {
            const categoria = produto.categoria;
            const nome = produto.nome;
            const nomePessoa = document.getElementById("nomePessoa").value;
            abrirWhatsApp(categoria, nome, nomePessoa);
        });

        if (produto.categoria === "Sala") {
            salaLista.appendChild(itemLista);
        } else if (produto.categoria === "Cozinha") {
            cozinhaLista.appendChild(itemLista);
        } else if (produto.categoria === "Quarto") {
            quartoLista.appendChild(itemLista);
        } else if (produto.categoria === "Lavanderia"){
            lavanderiaLista.appendChild(itemLista);
        }
    });

    function abrirWhatsApp(categoria, nome, nomePessoa) {
        // Substitua 'seu_numero' pelo número do WhatsApp
        // e 'mensagem' pela mensagem que você quer enviar
        let mensagem = encodeURIComponent("Olá! Gostaria de confirmar a lista de presentes.\nCategoria: " + categoria + "\nProduto: " + nome + "\nNome: " + nomePessoa);
        window.location.href = "https://api.whatsapp.com/send?phone=62993726328&text=" + mensagem;
    }
});

window.onload = function () {
    const msg = "Clique no produto que deseja presentear e você será redirecionado para o WhatsApp !";
     alert(msg);
 }
