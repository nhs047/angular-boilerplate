import { Injectable } from "@angular/core";
import { DialogMainComponent, DialogRef } from "../components/dialog.component";

@Injectable()
export class DialogService {
  private dialogRef: any;
  constructor(public dialog: DialogRef) { }

  openModal(data: any) {
    this.dialogRef = this.dialog.open(DialogMainComponent, data);
  }

  getAfterOpen() {
    return this.dialogRef.afterOpen();
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
