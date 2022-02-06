import { Component } from '@angular/core';
import { InputCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  asInputCustomEvent(event: Event) {
    return event as InputCustomEvent;
  }

  onInputChangeAny(inputEvent: any) {
    console.log(inputEvent.detail.value);
  }

  onInputChangeEvent(event: Event) {
    const inputEvent = event as InputCustomEvent;
    console.log(inputEvent.detail.value);
  }

  onInputChangeCustom(inputEvent: InputCustomEvent) {
    console.log(inputEvent.detail.value);
  }
}
