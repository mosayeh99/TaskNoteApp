let input = document.querySelector(".input");
let addbtn = document.querySelector(".add");

let tasks;
if (localStorage.tasks != null) {
    tasks = JSON.parse(localStorage.tasks);
} else {
    tasks = [];
}


addbtn.onclick = () => {
    if (input.value !== "") {
        tasks.push(input.value);
        input.value = "";
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    showdata();
}

showdata();

function showdata() {
    let table = '';
    for (let i=0; i<tasks.length; i++){
        table += `
        <div class="currenttask">
            <div class="taskinput">
                <p class="taskp">${tasks[i]}</p>
            </div>
            <button class="delete" id="${i}">Delete</button>
        </div>
        `
    }
    document.querySelector(".tasks").innerHTML = table;
}

document.addEventListener('click', (e) => {
    if (e.target.className == "delete") {
        tasks.splice(+e.target.getAttribute("id"), 1);
        localStorage.tasks = JSON.stringify(tasks);
        showdata();
    }
});

