import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-start-day',
  templateUrl: './start-day.component.html',
  styleUrls: ['./start-day.component.css']
})
export class StartDayComponent {

    private from1 = "Hello from StartDayComponent";

    constructor(private router: Router,
                private service: SenderService){
      
    }
    now: Date;
    getDateTimeNow(){
    this.now = new Date();
    }

    goto2(){
      this.service.variable1 = this.from1;
    }

    flag  = false
    startDayStart(){
      this.flag = true;
      this.getDateTimeNow();

    }
 
} 
