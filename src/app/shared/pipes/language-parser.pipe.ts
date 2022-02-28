import { PipeTransform, Pipe } from '@angular/core';
import languages from '../../root/language/language.json';

@Pipe({name: 'translate'})

export class Translate implements PipeTransform {
  constructor() { }

  transform (value: string): any {   
    let lang = Object.assign(languages);
    return lang[value]?lang[value]: value;
  }
  
}