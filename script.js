const todolist = [{name: "Sleep",
   time: "9:38",
  completed: false
}];
   render();
 
function render(){
    let todolistHtml ='';
    
    for (let i = 0; i<todolist.length; i++){
      const to = todolist[i];
      const name = to.name;
      const time = to.time;
      const completed = to.completed
      const div = `
        <div class ="output">
          <input class ="checkbox" type="checkbox" ${to.completed ? 'checked' : ''}
            onclick="todolist[${i}].completed = this.checked; render();">
          <div class="content ${to.completed ? 'completed' : ''}">${name} at ${time}</div>
          <button class = "remove" onclick="
            todolist.splice(${i},1);
            render();" >-</button>
        </div>`;
      todolistHtml += div;
    }
    
    document.querySelector(".work").innerHTML = todolistHtml;

  
}

function add() {
  const todo = document.querySelector(".list");
  const name = todo.value;
  
  const todotime = document.querySelector(".time");
  const time = todotime.value;
  
  
  todolist.push({
    name: name,
    time: time,
    completed: false
  });
  todo.value ="";
  render();
}