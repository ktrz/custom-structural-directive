import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[csdIf]',
})
export class IfDirective implements OnInit {
  private show = false;

  @Input() set csdIf(show: boolean) {
    this.show = show;
    this.displayTemplate(show);
  }

  @Input() csdIfThen?: TemplateRef<unknown>;
  @Input() csdIfElse?: TemplateRef<unknown>;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.displayTemplate(this.show);
  }

  private displayTemplate(condition: boolean) {
    this.vcr.clear();
    if (condition) {
      this.vcr.createEmbeddedView(this.csdIfThen || this.templateRef);
    } else {
      if (this.csdIfElse) {
        this.vcr.createEmbeddedView(this.csdIfElse);
      }
    }
  }
}
