let todos = JSON.parse(localStorage.getItem("todos")) || [];

const addToDo = function(e) {
    e.preventDefault();

    const input = document.querySelector('[name = add-todo]');
    const content = input.value;
    input.value = "";
    
    // cretaet toDo 
    const toDo = new ToDo(content, "false");

    todos.push(toDo);

    const arr = populateList(todos);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    // debugger;
    e.currentTarget.reset();
};

// el.innerHTML += '<p>Hello World!</p>'
const populateList = function(todos) {
   const unlist = document.querySelector(".todos");
   unlist.innerHTML = "";
   todos.map((el, i) => {
      
      // return `<li>
      //       <label> ${el.value} </label>
      //       <input type="checkbox" value="true" ></input>
      //    </li>`
      //   debugger;
        const label = document.createElement('label');
        label.innerHTML = el.value;
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = el.done? true : false;

        const li = document.createElement('li');
        li.append(checkbox);
        li.append(label);
        unlist.append(li);
    });    
}

function ToDo(value, done) {
    this.value = value;
    this.status = done;
};

const form = document.querySelector(".add-todo-form");
form.addEventListener("submit", addToDo);



