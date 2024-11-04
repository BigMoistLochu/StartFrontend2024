document.getElementById("add-button").addEventListener("click", addTask);



function addTask() {

    const inputValue = document.getElementById("input-field").value

    console.log(inputValue);

    //wez value z inputa, doda
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerText = inputValue;


    const container = document.getElementById("main-list");

    // Dodaj nowy <div> do kontenera
    container.appendChild(newTask);

    document.getElementById("input-field").value = "";
}
