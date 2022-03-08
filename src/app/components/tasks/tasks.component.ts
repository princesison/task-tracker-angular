import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/Task';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }
}
