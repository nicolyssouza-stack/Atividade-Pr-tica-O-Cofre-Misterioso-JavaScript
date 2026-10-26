const btnCofre1 = document.getElementById('cofre1');
const btnCofre2 = document.getElementById('cofre2');
const btnCofre3 = document.getElementById('cofre3');
const mensagem = document.getElementById('mensagem');
const spanTentativas = document.getElementById('tentativas');
const spanVitorias = document.getElementById('vitorias');
const btnReiniciar = document.getElementById('btnReiniciar');
const btnZerar = document.getElementById('btnZerar');

let cofrePremiado = 0;
let totalTentativas = 0;
let totalVitorias = 0;

function sortearCofre() {
    cofrePremiado = Math.floor(Math.random() * 3) + 1;
}

function abrirCofre(numeroEscolhido) {
    totalTentativas = totalTentativas + 1;
    spanTentativas.textContent = totalTentativas;
    bloquearCofres();
    if (numeroEscolhido === cofrePremiado) {
        totalVitorias = totalVitorias + 1;
        spanVitorias.textContent = totalVitorias;
        mensagem.textContent = "Escolheu o cofre certo, parabens fi.";
    } else {
        mensagem.textContent = "Escolheu o cofre errado, tente denovo.";
    }
    revelarCores();
}

function bloquearCofres() {
    btnCofre1.disabled = true;
    btnCofre2.disabled = true;
    btnCofre3.disabled = true;
}

function revelarCores() {
    const cofres = [btnCofre1, btnCofre2, btnCofre3];
    cofres.forEach((btn, index) => {
        if ((index + 1) === cofrePremiado) {
            btn.classList.add('acerto');
        } else {
            btn.classList.add('erro');
        }
    });
}

function reiniciarjogo() {
    sortearCofre();
    mensagem.textContent = "";
    const cofres = [btnCofre1, btnCofre2, btnCofre3];
    cofres.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('acerto', 'erro');
        btn.style.transform = "none";
    });
}

function zerarjogo() {
    totalTentativas = 0;
    totalVitorias = 0;
    spanTentativas.textContent = "0";
    spanVitorias.textContent = "0";
    reiniciarjogo();
}

btnCofre1.addEventListener('click', () => abrirCofre(1));
btnCofre2.addEventListener('click', () => abrirCofre(2));
btnCofre3.addEventListener('click', () => abrirCofre(3));
btnReiniciar.addEventListener('click', reiniciarjogo);
btnZerar.addEventListener('click', zerarjogo);

btnCofre3.addEventListener('mouseenter', () => {
    if (!btnCofre3.disabled) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 40;
        btnCofre3.style.transform = `translate(${x}px, ${y}px)`;
    }
});

sortearCofre();