import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { SharedPipeModule } from '../../pipes/shared-pipe.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogBodyComponent } from './components/dialog-body.component';
import { DialogMainComponent, DialogRef } from './components/dialog.component';
import { DialogService } from './serivces/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'lt-sm', 'lt-md', 'lt-lg', 'lt-xl', 'gt-xs', 'gt-sm', 'gt- md', 'gt-lg']
    }),
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    SharedPipeModule,
    MatProgressBarModule
  ],
  declarations: [DialogBodyComponent, DialogMainComponent],
  exports: [DialogBodyComponent, DialogMainComponent],
  providers: [DialogRef, DialogService],
  entryComponents: [DialogMainComponent]
})
export class DialogModule { }
export * from './serivces/dialog.service';