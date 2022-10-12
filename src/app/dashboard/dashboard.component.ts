import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user=""


  acno = ""
  pswrd = ""
  amt = ""


  acno1 = ""
  pswrd1 = ""
  amt1 = ""

  sDetails:any
  userDetails: any;


  acntnum:any

  

  constructor(private ds:DataService,private router:Router) {
    this.user=this.ds.currentuser

    this.sDetails=new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentuser')){
      alert('please login first')
      this.router.navigateByUrl('')
    }

  }
  deposit(){
    var acno=this.acno
    var pswrd=this.pswrd
    var amt=this.amt

    const result=this.ds.deposit(acno,pswrd,amt)
    if(result){
      alert(`${amt} is credited,new balance is ${result}`)

    }
    
  }
  withdraw(){
    var acno1=this.acno1
    var pswrd1=this.pswrd1
    var amt1=this.amt1

    const result=this.ds.withdraw(acno1,pswrd1,amt1)
    if(result){
      alert(`${amt1} is debited,new balance is ${result}`)
    }

  }
  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentAcno')

    this.router.navigateByUrl('')
  }

deleteconfirm(){
  this.acntnum=JSON.parse(localStorage.getItem('currentAcno') || '')


}
oncancelnew(){
  this.acntnum=""
}
  

}

