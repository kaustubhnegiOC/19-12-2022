import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from '../sender.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  
  constructor(private router: Router,
    private service: SenderService){

}

ngOnInit(): void{

  console.log(this.service.variable1 + "through ngOngIt from Report Component");
}



}
