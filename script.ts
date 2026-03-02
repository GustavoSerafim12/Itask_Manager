class task{
   nome: string;
   descricao: string;
   done: boolean;
   
   constructor(nome:string, descricao: string, done:boolean){
        this.nome = nome;
        this.descricao = descricao;
        this.done = done;
   }

    renderTask() {
        const container = document.getElementById("task_div_area");
    
        const wrapper = document.createElement("div");
        wrapper.classList.add("individual_task_div");

        const taskNameText = document.createElement("p");
        taskNameText.classList.add("individual_task_name");
        taskNameText.textContent = this.nome;

        const taskDescriptionText = document.createElement("p");
        taskDescriptionText.classList.add("individual_task_description");
        taskDescriptionText.textContent = this.descricao;

        const taskDoneButton = document.createElement("button");
        taskDoneButton.classList.add("individual_task_boolean", "individual_task_button");
        taskDoneButton.textContent = this.done ? "done" : "not done";

        taskDoneButton.addEventListener("click", () => {
            this.done = true;
            taskDoneButton.textContent = this.done ? "done" : "not done";
        });

        const taskTimeStamp = document.createElement("p");
        taskTimeStamp.classList.add("individual_task_date");
        const date = new Date();
        taskTimeStamp.textContent = date.toString();
        wrapper.append(taskNameText, taskDescriptionText, taskDoneButton, taskTimeStamp);
        container.appendChild(wrapper);
    }
}


const botao = document.getElementById("input_task_button") as HTMLButtonElement;

botao?.addEventListener("click", () => {
    const inputName = document.getElementById("input_task_name") as HTMLInputElement | null;
    const inputDescription = document.getElementById("input_task_description") as HTMLInputElement | null;

    if (inputName.value === "") {
        return;
    }

    const novaTask = new task(inputName.value, inputDescription.value, false);
    novaTask.renderTask();

    inputName.value = "";
    if(inputDescription.value != "") {inputDescription.value = "";}
});


