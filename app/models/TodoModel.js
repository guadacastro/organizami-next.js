// models/TodoList.js
export class Task {
    constructor(text, completed = false) {
      this.id = Math.random().toString(36).substr(2, 9); // Unique ID for each task
      this.text = text;
      this.completed = completed;
    }
  
    toggle() {
      this.completed = !this.completed;
    }
  
    updateText(newText) {
      this.text = newText;
    }
  }
  
  export class TodoList {
    constructor(title) {
      this.id = Math.random().toString(36).substr(2, 9); // Unique ID for each list
      this.title = title;
      this.tasks = [];
    }
  
    addTask(text) {
      const newTask = new Task(text);
      this.tasks.push(newTask);
    }
  
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  
    updateTitle(newTitle) {
      this.title = newTitle;
    }
  }
  