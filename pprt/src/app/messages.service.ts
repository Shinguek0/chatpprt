import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// typescript function that generate a random ID in string format
export function generateId(): string {
  const randomString: string = Math.random().toString(36).substring(2, 10);
  return randomString + Date.now();
}

export interface Item {
  id: string;
  name: string;
}
 
@Injectable({
  providedIn: "root",
})
export class MessagesService {
  private itemsSource = new BehaviorSubject<Item[]>([]);
  public items$ = this.itemsSource.asObservable();

  constructor() {}

  addMessage(item: Item) {
    const items = this.itemsSource.getValue();
    items.push(item);
    this.itemsSource.next(items);
  }
}
