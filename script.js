const ensalada= ["lechuga", "tomate", "zanahorias"];

console.log(ensalada);

ensalada.push("pepino"); //así se agrega

console.log(ensalada);

const primerElemento = ensalada[0];
console.log(primerElemento);
console.log(ensalada.length); //Muestra cuantos eleentos hay

let nombresDeLaEnsalada = ""; //Variables qu se puede sobreescribir
for (const verdura of ensalada){
    nombresDeLaEnsalada = nombresDeLaEnsalada + verdura + " "
    console.log(verdura);
}

console.log(nombresDeLaEnsalada);

for(let i=0; i<ensalada.length;i++){
    const verdura = ensalada[i]
    console.log(verdura);

}

const parrafo =document.querySelector("#parrafo")
console.log(parrafo)
parrafo.innerHTML= "<strong>"+ nombresDeLaEnsalada + "</strong>"; // que se sobreescriba el valor a este. modifica el contenido

parrafo.classList.add("parrafo--verde");
parrafo.classList.add("parrafo--titulo");