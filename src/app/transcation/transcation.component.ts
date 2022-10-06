import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent implements OnInit {
  acno:any
  transcation:any

  constructor(private router:Router,private ds:DataService) { 
   this.acno= this.ds.currentAcno
   this.transcation= this.ds.getTranscations(this.acno)
   console.log(this.transcation);
   
  }
  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl('dashboard')
  
  }

}
