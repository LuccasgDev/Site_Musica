document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Cadastro realizado com sucesso!');
    this.reset(); // Limpa o formulário após o envio
});

document.getElementById('btnAdicionar').addEventListener('click', function() {
    const instrumentosAdicionais = document.getElementById('instrumentosAdicionais');
    
    // Cria um novo elemento <div> para adicionar o novo instrumento
    const novoInstrumento = document.createElement('div');
    novoInstrumento.classList.add('instrumento-container');
    novoInstrumento.innerHTML = `
        <select class="instrumento-adicional" required>
            <option value="">Selecione outro instrumento</option>
            <option value="violao">Violão</option>
            <option value="baixo">Baixo</option>
            <option value="bateria">Bateria</option>
            <option value="flauta">Flauta</option>
            <option value="violino">Violino</option>
            <option value="trombone">Trombone</option>
            <option value="trompete">Trompete</option>
            <option value="clarinete">Clarinete</option>
            <option value="sax alto">Sax Alto</option>
        </select>
        <button type="button" class="btn-remover">Remover</button>
    `;
    
    instrumentosAdicionais.appendChild(novoInstrumento);
});

// Função para aplicar a máscara no campo de telefone
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Formata como (xx) x
        value = value.replace(/(\d)(\d{4})$/, '$1-$2'); // Adiciona o -
    } else {
        value = value.replace(/(\d{2})(\d)(\d{4})(\d{0,4})/, '($1) $2 $3-$4'); // Formata como (xx) x xxxx-xxxx
    }
    e.target.value = value; // Atualiza o valor do campo
});

// Remover instrumento adicional
document.getElementById('instrumentosAdicionais').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-remover')) {
        e.target.parentElement.remove(); // Remove o elemento pai (o container do instrumento adicional)
    }
});
