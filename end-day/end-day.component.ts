import { Component } from '@angular/core';
// import {};
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';



@Component({
  selector: 'app-end-day',
  templateUrl: './end-day.component.html',
  styleUrls: ['./end-day.component.css']
})
export class EndDayComponent {

  now: Date;
    getDateTimeNow(){
    this.now = new Date();
    }

 

    flag  = false
    endDayStart(){
      this.flag = true;
      this.getDateTimeNow();

    }
    constructor(public projectdialog: MatDialog) {}

    openDialog(): void {
      this.projectdialog.open(ProjectDialogComponent, {
       width: '50%',
       height: '50%'
     });
   }



}
