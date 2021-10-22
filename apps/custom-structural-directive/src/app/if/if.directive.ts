import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[csdIf]',
})
export class IfDirective {
  @Input() set csdIf(show: boolean) {
    this.displayTemplate(show)
  }

  @Input() csdIfElse?: TemplateRef<unknown>;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

  private displayTemplate(condition: boolean) {
    this.vcr.clear();
    if (condition) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else {
      if(this.csdIfElse) {
        this.vcr.createEmbeddedView(this.csdIfElse)
      }
    }
  }
}
