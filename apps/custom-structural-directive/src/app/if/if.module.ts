import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDirective } from './if.directive';

@NgModule({
  declarations: [
    IfDirective
  ],
  exports: [
    IfDirective
  ],
  imports: [
    CommonModule
  ]
})
export class IfModule { }
