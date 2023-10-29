document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = "";

            // Add a click event listener to the delete button
            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
