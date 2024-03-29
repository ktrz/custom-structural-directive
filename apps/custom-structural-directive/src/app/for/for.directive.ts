import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface ForDirectiveContext<T> {
  $implicit: T;
  index: number;
  first: boolean;
  last: boolean;
  even: boolean;
  odd: boolean;
  count: number;
}

@Directive({
  selector: '[csdFor]',
})
export class ForDirective<T> {
  private items: T[] = [];
  static ngTemplateContextGuard<T>(
    dir: ForDirective<T>,
    ctx: unknown
  ): ctx is ForDirectiveContext<T> {
    return true;
  }

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
    this.items.map((item, index, arr) => {
      this.vcr.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index,
        first: index === 0,
        last: index === arr.length - 1,
        even: (index & 1) === 0,
        odd: (index & 1) === 1,
        count: arr.length,
      });
    });
  }
}
