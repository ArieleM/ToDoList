let input = document.querySelector("#novaTarefa");
const add = document.querySelector("#add");
let board = document.querySelector("#board");



function novaTarefa() {
    input.style.borderColor = "black"

    const valor = input.value;

    if (valor.trim().length <= 0) {
        alert("Digite uma tarefa");
        input.style.borderColor = "red";
        return;
    }else{
        // Usando create element
        const divTarefa = document.createElement("div");
        divTarefa.classList.add("tarefa");

        const divConteudo = document.createElement("div");
        divConteudo.classList.add("col-md-8");
        divConteudo.innerText = valor;

        const divImg = document.createElement("div");
        divConteudo.classList.add("col-md-2");

        const imgCheck = document.createElement("img");
        imgCheck.setAttribute('src', "img/check.png")
        imgCheck.setAttribute("class", "icon");
        imgCheck.onclick = () => divTarefa.remove();

        divImg.appendChild(imgCheck);

        divTarefa.appendChild(divConteudo)
        divTarefa.appendChild(divImg)

        board.appendChild(divTarefa);

        // Usando template string
        // board.innerHTML += `
        // <div class="tarefa">
        //     <div class="col-md-8">${valor}</div>
        //     <div class="col-md-2"><img class="icon" src="img/check.png"></div>
        // </div>
        // `
        input.style.borderColor = "green"
        input.value = "";
    }
}

add.addEventListener("click", novaTarefa)

onkeydown = function (event) {
    if (event.key === "Enter") {
        novaTarefa();
    }
}


