
//Recuperando o botão com o getElementById
const botao = document.getElementById("btn-1");

//Recuperar um item especifico com a
//Função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

// recuperar uma lista de elementos com a função 
// querySelectorAll
// const seletores = document.querySelectorAll("li");

// seletores.forEach((item)=>{

//     if (item.textContent == "Item-15") {
//         let meuItem = item;
//         console.log(`Items selecionado : ${meuItem.textContent}`);
//         meuItem.textContent = "TÁ DOMINADO!!"
//     }
// })

//Para estudar//
//setTimeOut
//setInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor
let tmp = ""

function mudarCor() {
    
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.style.backgroundColor= `rgb(${r},${g},${b})`;
    
    tmp = setTimeout(mudarCor, 1000);

}

mudarCor();

function mudarImagem(){
    
}

