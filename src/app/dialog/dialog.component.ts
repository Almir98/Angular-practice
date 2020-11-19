import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogDetailsComponent } from './dialogDetails/dialogDetails.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private router: Router,public dialogRef: MatDialogRef<DialogComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onNoClick()
  {
    this.dialogRef.close();
  }

  onYesClick()
  {
    this.router.navigate(['/dialogDetails'])
    this.dialog.closeAll();
  }


}
