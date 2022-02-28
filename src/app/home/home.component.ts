import { Component } from '@angular/core';
import { Translate } from '../shared/pipes/language-parser.pipe';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  /**
   *
   */
  constructor() { }
  title = 'Home';
}
