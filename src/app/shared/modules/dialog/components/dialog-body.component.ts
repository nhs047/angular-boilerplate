import { Component, OnInit, Input, Output, TemplateRef, ViewContainerRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-body',
  template: `<div>
                <mat-progress-bar *ngIf="isLoadingEnable" mode="indeterminate"></mat-progress-bar>
            </div>`,
  styles: []
})
export class DialogBodyComponent implements OnInit {
    @Input() template : TemplateRef<any>;
    @Input() isLoadingEnable:boolean=false;
    @Output() clicked : EventEmitter<any> = new EventEmitter<any>();
  constructor(private vcr : ViewContainerRef) {}

  ngOnInit() {
	  this.vcr.createEmbeddedView(this.template);
  }
}
