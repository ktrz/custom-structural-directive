import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForDirective } from './for.directive';

@NgModule({
  declarations: [ForDirective],
  exports: [ForDirective],
  imports: [CommonModule],
})
export class ForModule {}
