
//Recuperando o botão com o getElementById
const botao = document.getElementById("btn-1");

//Recuperar um item especifico com a
//Função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

// recuperar uma lista de elementos com a função 
// querySelectorAll
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{

    if (item.textContent == "Item-15") {
        let meuItem = item;
        console.log(`Items selecionado : ${meuItem.textContent}`);
        meuItem.textContent = "TÁ DOMINADO!!"
    }
})

//setTimeOut
//setIterval
//Random
//Math.Random
//Math.For
