import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../interface/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
