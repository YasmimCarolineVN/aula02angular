import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.css'
})
export class Filho {
  @Input() nome = signal('')
}
