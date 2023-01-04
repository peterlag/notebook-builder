import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  stepNumber: number = 1;

  @Output() stepNumberEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  nextStep(){
    ++this.stepNumber;
    this.stepNumberEvent.emit(this.stepNumber)
  }

  previousStep(){
    --this.stepNumber;
    this.stepNumberEvent.emit(this.stepNumber)
  }

  openWhatsapp(){
    window.open("https://wa.me/573233327377?text=Resumen+de+tu+diseño%0A%0Aportada:2%0Adimensiones:13x25cm%0Ahoja:cuadriculada");
  }
}
