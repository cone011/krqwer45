import React, { Component, useState } from "react";

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

const App = () => {
  const DATA_TASK = [
    { id: 1, name: "Sacar la ropa", done: false },
    { id: 2, name: "Hacer la cama", done: true },
    { id: 3, name: "Leer un rato", done: false },
  ];
  const [newTask, SetNewTask] = useState("");
  const [tasks, SetTasks] = useState(DATA_TASK);
  const [color, setColor] = useState(false);
  const onSubmitData = (event) => {
    event.preventDefault();
    if (newTask.length === 0 || newTask === "") {
      setColor(true);
      return;
    }
    event.target.reset();
    const newDataTaks = { id: Math.random(), name: newTask, done: false };
    SetTasks([...tasks, newDataTaks]);
    SetNewTask("");
  };
  const onValueChangeHandler = (event) => {
    let valueEnter = event.target.value;
    if (valueEnter.length === 0 || valueEnter === "") {
      setColor(true);
      return;
    }
    SetNewTask(valueEnter);
  };
  const onDisplayWord = (id) => {
    const findTask = tasks.map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    SetTasks(findTask);
  };
  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {tasks.map((task, index) => (
            <li
              key={task.id}
              className={task.done ? "done" : ""}
              onClick={() => onDisplayWord(task.id)}
            >
              {task.name}
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmitData}>
          <input
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            className={color ? "error" : ""}
            value={newTask}
            onChange={onValueChangeHandler}
          />
        </form>
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tasks: [
//         { id: 1, name: "Sacar la ropa", done: false },
//         { id: 2, name: "Hacer la cama", done: true },
//         { id: 3, name: "Leer un rato", done: false }
//       ],
//       newTask: ''
//     }
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <div className="list">
//           <h3>Por hacer:</h3>
//           <ul className="todo">
//             {this.state.tasks.map((task, index) => <li key={task.id}>{task.name}</li>)}
//           </ul>
//           <form>
//             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

export default App;
