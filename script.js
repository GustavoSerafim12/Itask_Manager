var task = /** @class */ (function () {
    function task(nome, descricao, done) {
        this.nome = nome;
        this.descricao = descricao;
        this.done = done;
    }
    task.prototype.renderTask = function () {
        var _this = this;
        var container = document.getElementById("task_div_area");
        var wrapper = document.createElement("div");
        wrapper.classList.add("individual_task_div");
        var taskNameText = document.createElement("p");
        taskNameText.classList.add("individual_task_name");
        taskNameText.textContent = this.nome;
        var taskDescriptionText = document.createElement("p");
        taskDescriptionText.classList.add("individual_task_description");
        taskDescriptionText.textContent = this.descricao;
        var taskDoneButton = document.createElement("button");
        taskDoneButton.classList.add("individual_task_boolean", "individual_task_button");
        taskDoneButton.textContent = this.done ? "done" : "not done";
        taskDoneButton.addEventListener("click", function () {
            _this.done = !_this.done;
            taskDoneButton.textContent = _this.done ? "done" : "not done";
            taskDoneButton.style.backgroundColor = _this.done ? "rgb(32, 209, 35)" : "rgb(100, 216, 236)";
        });
        var taskTimeStamp = document.createElement("p");
        taskTimeStamp.classList.add("individual_task_date");
        var date = new Date();
        taskTimeStamp.textContent = date.toString();
        wrapper.append(taskNameText, taskDescriptionText, taskDoneButton, taskTimeStamp);
        container.appendChild(wrapper);
    };
    return task;
}());
var botao = document.getElementById("input_task_button");
botao === null || botao === void 0 ? void 0 : botao.addEventListener("click", function () {
    var inputName = document.getElementById("input_task_name");
    var inputDescription = document.getElementById("input_task_description");
    if (inputName.value === "") {
        return;
    }
    var novaTask = new task(inputName.value, inputDescription.value, false);
    novaTask.renderTask();
    inputName.value = "";
    if (inputDescription.value != "") {
        inputDescription.value = "";
    }
});
