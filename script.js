// Exibe o modal assim que a página carregar
window.onload = function() {
    var modal = document.getElementById('termosModal');
    modal.style.display = 'flex';
    
    // Quando o usuário clicar em "Concorda e Aceita", o modal será fechado
    var concordaBtn = document.getElementById('concordaBtn');
    concordaBtn.onclick = function() {
        modal.style.display = 'none';
    };
};

