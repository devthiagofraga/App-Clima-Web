/*
Usar todas as variáveis como const nesse app
Chave API: 668cd18fcac24ad953b68220ac2630b2

API Call: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

*/


const chaveApi = "bbb838b56a43ba70323f6fb0edd21229";
// Busca da cidade na API
async function buscarCidade(nomecidade){
    let dados = fetch(
        "https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={chaveApi"
    ).then(resposta => resposta.json())

    dadosNaTela(dados)
}
// Pegar a cidade quando clicar
function cliqueiNoBotao(){
    let nomeCidade = document.querySelector(".input-cidade").value
 
    buscarCidade(nomeCidade)
}

//Colocar os dados na tela

function dadosNaTela (dados){
    console.log(dados)
    document.querySelector(".nomeCidade").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".clima").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}