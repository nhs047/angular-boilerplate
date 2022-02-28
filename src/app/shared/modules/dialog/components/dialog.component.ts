import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-main',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogMainComponent implements OnInit {

  public disableConfirm = false;
  isLoadingEnable = false;
  ESCAPE_KEYCODE = 27;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    if (this.data.closeEvent) {
      this.data.closeEvent.subscribe(() => {
        this.dialogRef.close(false);
      });
    }

    this.dialogRef.afterClosed().subscribe(() => {
      this.onClose();
    });

  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === this.ESCAPE_KEYCODE) {
      this.dialogRef.close();
    }
  }


  onClick(data: any) {
    if (data && this.data && this.data.data) { this.dialogRef.close(this.data.data); } else { this.dialogRef.close(data); }
  }

  onConfirm() {
    if (this.data && this.data.functions && this.data.functions.confirm) {
      this.isLoadingEnable = true;
      this.disableConfirm = true;
      this.data.functions.confirm((result: any) => {
        this.isLoadingEnable = false;
        if (result) {
          this.dialogRef.close();
          // this.disableConfirm = false;
        } else {
          this.disableConfirm = false;
        }
      });
    }
  }

  onSave() {
    if (this.data && this.data.functions && this.data.functions.save) {
      this.data.functions.save((result:any) => {
        if (result) { this.dialogRef.close(); }
      });
    }
  }

  onCancel() {
    if (this.data && this.data.functions && this.data.functions.cancel) {
      this.data.functions.cancel((result: any) => {
        if (result) { this.dialogRef.close(); }
      });
    } else {
      this.dialogRef.close(false);
    }
  }

  onClose() {
    if (this.data && this.data.functions && this.data.functions.close) {
      const results = 'closed';
      this.data.functions.close((result: any) => {
        if (result) { this.dialogRef.close(); }
      });
    }
  }
}

export class DialogRef extends MatDialog { }