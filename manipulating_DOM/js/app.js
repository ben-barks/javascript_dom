document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  const handleFormSubmit = function (evt) {
    evt.preventDefault()

    const todo = evt.target.todo.value;
    const requirements = evt.target.requirements.value;
    const time = evt.target.time.value;

    const toDoListInfo = document.createElement('div');

    const toDoList = document.querySelector('#to-do-list');
    toDoList.appendChild(toDoListInfo);

    const detailsList = document.createElement('ul');
    toDoListInfo.appendChild(detailsList);

    const todoItem = document.createElement('li');
    todoItem.textContent = `To do: ${todo}`;
    detailsList.appendChild(todoItem);

    const requirementsItem = document.createElement('li');
    requirementsItem.textContent = `Requirements: ${requirements}`;
    detailsList.appendChild(requirementsItem);

    const timeItem = document.createElement('li');
    timeItem.textContent = `Time: ${time}`;
    detailsList.appendChild(timeItem);

    const form = document.querySelector('#new-item-form')
    form.reset();

  };

  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-button');
  const handleDelete = function (evt) {
    const toDoList = document.querySelector('#to-do-list');
    toDoList.innerHTML = '';
  };

  deleteButton.addEventListener('click', handleDelete);
});
