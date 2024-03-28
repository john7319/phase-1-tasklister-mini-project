document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Function to listen for the submit on the form
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    appendToList(e.target.new_task_description.value);
    form.reset();
  });
});

//Function to create, add a list and a button to the ul and listen for a click on the button

function appendToList(list) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteListContent);
  btn.textContent = "x";
  li.textContent = `${list} `;
  li.appendChild(btn);
  document.getElementById("list").appendChild(li);
}

// fuction to delete the parent node "li" when click is invokes

function deleteListContent(e) {
  e.target.parentNode.remove();
}
