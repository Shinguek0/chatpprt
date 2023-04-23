import { Component } from '@angular/core';
import { MessagesService, Item, generateId } from "../messages.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})

export class ChatComponent {
  contagem = 0;

  nome = 'Lucas';
  idade = 0;
 
  alunos = [
    { nome: 'Lucas', idade: 20 },
    { nome: 'Bruna', idade: 19 },
  ];
  newMessageText: string = "";
  errorMessage: string | null = null;

  constructor(public MessagesService: MessagesService) {}

  addMessage(){
    const newMessage: Item = {
      id: generateId(),
      name: this.newMessageText,
    };

    if (newMessage.name !== "") {
      this.MessagesService.addMessage(newMessage);
      this.newMessageText = "";
      this.errorMessage = null;
    } else {
      this.errorMessage = "ERRORRRRReeeeeeeeeeeeeeeeeeeeeeeeee";
    }
  }
  incrementar() {
    this.contagem++;
  }
  decrementar() {
    this.contagem--;
  }
  adicionaAluno(aluno: { nome: string; idade: number }) {
    this.alunos.push(aluno);
  }
}
