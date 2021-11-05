import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[csdFor]',
})
export class ForDirective<T> {
  private items: T[] = [];

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

  @Input() set csdForOf(items: T[]) {
    this.items = items;
    this.renderItems();
  }

  private renderItems(): void {
    this.vcr.clear();
    this.items.map(() => {
      this.vcr.createEmbeddedView(this.templateRef);
    });
  }
}
