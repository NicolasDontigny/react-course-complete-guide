export class Todo {
  id: string;
  name: string;

  constructor(text: string) {
    this.id = Math.round(Math.random() * 1000000).toString();
    this.name = text;
  }
}
