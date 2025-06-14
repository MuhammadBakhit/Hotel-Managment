import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent {
 itemName: string = '';
  visible: boolean = true;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.itemName = this.config.data?.facility?.name || 'this item';
  }

  cancelDelete() {
    this.ref.close(false);
  }

  confirmDelete() {
    this.ref.close(true);
  }
}
