import { Component,OnInit } from '@angular/core';
import { SwitchService } from './switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  constructor(private switchService:SwitchService){}
  ngOnInit(){

  }

  previousWork(){
  this.switchService.changeOne=2;
  }

}


