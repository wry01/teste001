document.addEventListener("DOMContentLoaded", () => {
    const carrinho = [];
    const produtos = document.querySelectorAll(".produto");
    const listaCarrinho = document.getElementById("itens-carrinho");
    const totalElement = document.getElementById("total");
    const btnFinalizarCompra = document.getElementById("finalizar-compra");

    // Adicionar produto ao carrinho
    produtos.forEach(produto => {
        produto.querySelector(".adicionar").addEventListener("click", () => {
            const nome = produto.getAttribute("data-nome");
            const preco = parseFloat(produto.getAttribute("data-preco"));
            carrinho.push({ nome, preco });
            atualizarCarrinho();
        });
    });

    // Atualizar a lista de itens no carrinho
    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";
        let total = 0;

        carrinho.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            const btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.addEventListener("click", () => {
                carrinho.splice(index, 1);
                atualizarCarrinho();
            });
            li.appendChild(btnRemover);
            listaCarrinho.appendChild(li);
            total += item.preco;
        });

        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    // Finalizar compra
    btnFinalizarCompra.addEventListener("click", () => {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        const resumo = carrinho.map(item => `${item.nome} - R$ ${item.preco.toFixed(2)}`).join("\n");
        alert(`Compra finalizada com sucesso!\n\nResumo:\n${resumo}\n\nTotal: R$ ${carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}`);
        carrinho.length = 0;
        atualizarCarrinho();
    });
});
