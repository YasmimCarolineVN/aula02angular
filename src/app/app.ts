import { Component, signal } from '@angular/core';
import { Pai } from './components/pai/pai';
import { Filho } from './components/filho/filho';


@Component({
  selector: 'app-root',
  imports: [Pai,Filho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
 titulo: string ='Teste';
 urlImage ="https://th.bing.com/th/id/OIP.ggVEFA2uuXv0uRKdNjdVCwHaHa?w=164&h=180&c=7&r=0&o=7&pid=1.7&rm=3";

 private mensagem: string = "minha Mensagem";

getMensagem() {
  return this.mensagem;
 }
}
