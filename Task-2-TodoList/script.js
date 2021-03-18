const inputTask = document.querySelector(".add-input");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");
const clearAll = document.querySelector(".clear-all")



addButton.addEventListener("click", () => {
    if (inputTask.value.trim() !== "") {
        
        const listItem = document.createElement('li');
        const editInput = document.createElement('input');
        const editButton = document.createElement('button');
        const task = document.createElement('span');
        editButton.innerText = "Edit";
        const doneTodo = document.createElement('button');
        doneTodo.innerText = "Done";
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";

        toDoList.append(listItem);
        listItem.append(task)
        listItem.append(editInput);
        listItem.append(deleteButton);
        listItem.append(doneTodo);
        listItem.append(editButton)

        task.innerText = inputTask.value;

        editInput.classList.add('edit')

        inputTask.value = "";

        editButton.addEventListener("click", () => {
            editInput.classList.remove('edit')
            editInput.value = task.textContent
        })
        editInput.addEventListener("change", (event) => {
            task.textContent = editInput.value
            editInput.classList.add('edit')
        })

        doneTodo.addEventListener("click", () => {
            listItem.classList.toggle('completed');
        })
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        })

        clearAll.addEventListener("click", () => {
            toDoList.remove()
        })
    }
})