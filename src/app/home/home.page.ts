import { Component } from '@angular/core';

@Component
({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage
{
  taskList: Task[] = [];
  phTask: string = "";

  addTask()
  {
    this.taskList.push({ task: this.phTask, done: false, edit: false });
    this.phTask = "";
  }

  updateTask(i: number)
  {
    if(this.taskList[i].edit == true)
    {
      this.taskList[i].done = false;
      this.taskList[i].edit = false;
    }
    else
    {
      this.taskList[i].edit = true;
    }
  }

  removeTask(i: number)
  {
    this.taskList.splice(i, 1);
  }
  
  constructor() {}

}

interface Task
{
  task: string;
  done: boolean;
  edit: boolean;
}

  
