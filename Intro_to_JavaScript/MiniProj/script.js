
let input = document.getElementById("taskInput");
let button = document.getElementById("addTask");
let button2 = document.getElementById("removeTask");
let list = document.getElementById("taskList");

button.addEventListener("click", function() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});


button2.addEventListener("click", function() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let newList = list.getElementsByTagName("li");
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].textContent === taskText) {
      list.removeChild(newList[i]);
    }
  }
  input.value = "";
});