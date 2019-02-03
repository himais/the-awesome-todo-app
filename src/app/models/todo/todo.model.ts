import { TaskStatus } from "../task-status/task-status.model";

export class TodoModel {
  id: number;
  description: string;
  status: TaskStatus;

  constructor(task: string) {
    this.id = Math.floor(Math.random() * 100 + 1);
    this.description = task;
    this.status = new TaskStatus();
  }
}
