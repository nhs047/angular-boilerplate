import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Translate } from "./language-parser.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ Translate ],
    exports: [
        Translate
    ],
    providers: [Translate]
})

export class SharedPipeModule { }
