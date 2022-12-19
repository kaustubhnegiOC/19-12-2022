import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showStartDayChild(){
  }
  // //  const dispStartDay = <app-start-day> </app-start-day>
  //     const sel = <app-start-day> </app-start-day>
  //   return <app-start-day> </app-start-day>;

      valSd = false;
      valEd = false;
      valR  = false;
      
      setValTrueSd(){
        this.valEd = false
        this.valSd = true;
        this.valR  = false;
      }
    
      setValFalseSd(){
    
        this.valEd = false;
        this.valSd = false;
        this.valR  = false;
    
      }
    
      setValTrueEd(){
    
        this.valEd = true;
        this.valSd = false;
        this.valR  = false;
    
      }
    
      setValFalseEd(){
    
        this.valEd = false;
        this.valSd = false;
        this.valR  = false;
      }
    
      setValTrueR(){
    
        this.valEd = false;
        this.valSd = false;
        this.valR  = true;
      }
    
      setValFalseR(){
        this.valEd = false;
        this.valSd = false;
        this.valR  = false;
      }
    

  }
  

  


