import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {

  constructor() { }

  getCursos() {
    return ['Java', 'Node', 'Angular'];
  }

}
