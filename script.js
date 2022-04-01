const addTodo = document.querySelector(".add");
const list = document.querySelector(".list-group");
const search = document.querySelector(".search .input");
const generateEl = (todo) => {
  const html = `
    <li class="list-group-item">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
};

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addTodo.add.value.trim();
  if (todo.length) {
    generateEl(todo);
    addTodo.reset();
  }
});

// delete
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filter = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("hide");
    });
  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("hide");
    });
};

// Filtering
search.addEventListener("keyup", (e) => {
  const term = search.value.trim().toLowerCase();
  console.log(term);
  filter(term);
});
