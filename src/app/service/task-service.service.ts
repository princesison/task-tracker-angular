import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../interface/Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  getTask(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
