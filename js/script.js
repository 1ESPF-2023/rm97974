
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
// let tmp = ""

// function mudarCor() {
    
//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);
    
//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.style.backgroundColor= `rgb(${r},${g},${b})`;
    
//     tmp = setTimeout(mudarCor, 1000);

// }

// mudarCor();

// function mudarImagem(){
    
// }
// function mudaBanner() {
//     const imgElement1 = document.querySelector(".banner1 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3);
//     imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     setTimeout(mudaBanner, 2000);
// }


// mudaBanner();

// function mudaBanner2() {
//     const imgElement1 = document.querySelector(".banner1 img");
//     // console.log(imgElement1);
//     let nr = Math.ceil(Math.random() *3);
//     imgElement1.src = "./img/banner-lateral-"+nr+".png";
//     setTimeout(mudaBanner, 2000);
// }

function mudaBanner() {
    const imgElement = document.querySelector(".banner1 img");
    // console.log(imgElement1);
    let nr = Math.ceil(Math.random() *3);
    imgElement.src = `./img/banner-lateral-${nr}.png`;

    const imgElement2 = document.querySelector(".banner2 img");
    nr = Math.ceil(Math.random() *3);
    imgElement2.src = `./img/banner-lateral-${nr}.png`
    setTimeout(mudaBanner, 2000);
}
mudaBanner();

const botao = document.querySelector("button");
// console.log(botao);
botao.addEventListener("click",function(){
    if(this.textContet == "LIGAR"){
        const imgElement = document.querySelector("img[alt='Lampada apagada']");
        imgElement.src = "./img/pic_bullon.gif";
        imgElement.alt = "Lampada apagada";
        this.textContent = "DESLIGAR";
    }else{
        const imgElement = document.querySelector("img[alt='Lampada acesa']");
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "Lâmpada apagada";
        this.textContent = "LIGAR";
    }
});