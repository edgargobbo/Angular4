import { Component, OnInit } from '@angular/core';
import { TemplateService } from './template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  title = 'Template';
  cursos: string[];

  constructor(private templateService: TemplateService) {
    this.cursos = templateService.getCursos();
  }

  ngOnInit() {
  }

}
