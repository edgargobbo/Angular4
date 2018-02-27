import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TemplateService } from './template.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent
  ],
  providers: [
    TemplateService
  ]
})
export class TemplateModule {
}
