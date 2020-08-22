//procura o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener("click", cloneField)



//executar um acao
function cloneField(){
//duplicar os campos, que campo
const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true); //boolean: true ou false

//pegar os campos,que campos?
const fields = newFieldContainer.querySelectorAll("input");
fields[0].value = '';
fields[1].value = '';

//para cada campo,limpa
fields.forEach((field) => {
    //pegar o filed do memento e limpa ele
    field.value = '';
});

//colocar na pagina: onde??
document.querySelector("#schedule-items").appendChild(newFieldContainer);

}
