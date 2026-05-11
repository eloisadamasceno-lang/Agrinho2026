// Variáveis iniciais do simulador
let producao = 50;
let sustentabilidade = 100;

/**
 * Função principal que processa as escolhas do usuário
 * @param {string} tipo - O tipo de manejo escolhido
 */
function simular(tipo) {
    let mensagem = "";

    // Lógica de Equilíbrio: Cada ação afeta os indicadores de forma diferente
    if (tipo === 'monitorar') {
        // O monitoramento é a base do Manejo Integrado de Pragas (MIP)
        producao += 5;
        sustentabilidade += 5;
        mensagem = "🔍 Monitoramento: Você identificou a Broca-do-café no início. Agir na hora certa economiza recursos!";
    } 
    else if (tipo === 'biologico') {
        // Uso de inimigos naturais (ex: vespas) para controlar pragas
        producao += 12;
        sustentabilidade += 10;
        mensagem = "🐞 Controle Biológico: Você usou a natureza a seu favor. A biodiversidade protege sua lavoura!";
    } 
    else if (tipo === 'quimico') {
        // Uso intensivo de agrotóxicos
        producao += 30;
        sustentabilidade -= 40;
        mensagem = "🧪 Químico Intensivo: As pragas sumiram rápido, mas você eliminou polinizadores e afetou o solo.";
    }

    // Garante que os valores fiquem entre 0 e 100
    producao = Math.min(100, Math.max(0, producao));
    sustentabilidade = Math.min(100, Math.max(0, sustentabilidade));

    atualizarInterface(mensagem);
    checarFinal();
}

/**
 * Atualiza os elementos visuais do HTML e do CSS
 */
function atualizarInterface(texto) {
    // Atualiza os textos de porcentagem
    document.getElementById('val-prod').innerText = producao + "%";
    document.getElementById('val-sust').innerText = sustentabilidade + "%";

    // Atualiza o tamanho das barras de progresso (CSS dinâmico)
    document.getElementById('prod-bar').style.width = producao + "%";
    document.getElementById('sust-bar').style.width = sustentabilidade + "%";

    // Exibe a mensagem de feedback
    document.getElementById('feedback').innerText = texto;
}

/**
 * Verifica se o jogador venceu (equilíbrio) ou perdeu (colapso)
 */
function checarFinal() {
    if (sustentabilidade <= 0) {
        alert("⚠️ COLAPSO AMBIENTAL! Sua terra ficou infértil por excesso de químicos. Tente o manejo sustentável!");
        resetar();
    } 
    else if (producao >= 100 && sustentabilidade >= 80) {
        alert("🏆 EXCELÊNCIA AGRO: Você atingiu a produção máxima mantendo o meio ambiente saudável! Esse é o futuro.");
    }
}

/**
 * Reinicia os valores para o estado inicial
 */
function resetar() {
    producao = 50;
    sustentabilidade = 100;
    atualizarInterface("Simulador reiniciado. Boa sorte, jovem produtor!");
}