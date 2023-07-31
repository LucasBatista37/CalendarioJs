function selecionar(evento) {
    const botaoClicado = evento.target;
    const numeroDia = botaoClicado.getAttribute("data-dia");

    const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const dataSelecionada = new Date(); 
    dataSelecionada.setDate(numeroDia); 

    const diaDaSemana = diasDaSemana[dataSelecionada.getDay()]; 

    limpar();
    botaoClicado.style.backgroundColor = "green";

    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = `Você selecionou o dia ${numeroDia} (${diaDaSemana}).`;
}

function limpar() {
    const botoesCalendario = document.querySelectorAll(".calendar .dia");
    botoesCalendario.forEach(botao => {
        botao.style.backgroundColor = "";
    });
}

const botoesCalendario = document.querySelectorAll(".calendar .dia");
botoesCalendario.forEach(botao => {
    botao.addEventListener("click", selecionar);
});
