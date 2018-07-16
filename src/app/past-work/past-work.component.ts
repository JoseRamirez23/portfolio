import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
    selector: 'past-work',
    templateUrl:'./past-work.component.html',
    styleUrls:['./past-work.component.css']
})

export class PastWorkComponent implements OnInit{
   
    constructor(private switchService:SwitchService){}
    ngOnInit(){}

    backToFirst(){
        this.switchService.changeOne=1;
    }
}