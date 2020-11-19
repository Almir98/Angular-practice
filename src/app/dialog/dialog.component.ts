import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private router: Router,public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  }

  onNoClick()
  {
    this.dialogRef.close();
    this.router.navigate(['/employee']);
  }

  onYesClick()
  {
    this.dialogRef.close();
    this.router.navigate(['/dialogDetails']);
  }


}
