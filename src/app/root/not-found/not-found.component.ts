import { Component, OnInit } from "@angular/core";
import { Translate } from "src/app/shared/pipes/language-parser.pipe";

@Component({
    selector: "app-not-found",
    template: `<div id="error-404" fxLayout="column" fxLayoutAlign="center center">
    <div class="content" fxLayout="column" fxLayoutAlign="center center">
      <div class="error-code">404</div>
      <div class="message mb-16">{{ 'NOT_FOUND_TEXT' | translate}}</div>
      <a class="back-link" [routerLink]="'/'">{{ 'GO_BACK_DASHBOARD' | translate}}</a>
    </div>
  </div>`,
    styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent {

    constructor () { }
}
