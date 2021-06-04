import { Priority } from './priority.enum';

export interface ITodo {
  name: string;
  addedOn: Date;
  id: number;
  priority: Priority;
}
