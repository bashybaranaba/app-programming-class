import React, { useState } from "react";

const initialTasks: Task[] = [
  { id: 1, name: "Task 1", completed: false },
  { id: 2, name: "Task 2", completed: false },
  { id: 3, name: "Task 3", completed: false },
];

const TasksList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTaskCompleted = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </span>
          <button onClick={() => toggleTaskCompleted(task.id)}>
            {task.completed ? "Uncomplete" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
