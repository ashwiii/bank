import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "your perfect banking partner"
  acnt = 'enter your acnt no'

  acno = ''
  psw = ''

  

  constructor(private router:Router,private ds:DataService ) { }

  ngOnInit(): void {
  }
  login() {
    var acnum = this.acno
    var psw = this.psw

   const result= this.ds.login(acnum,psw)
   if(result){
     alert('login success')
     this.router.navigateByUrl('dashboard')
   }
   
  }

    // login(a:any,b:any){

    //      console.log(a.value);
    //      console.log(b.value);

    //      var acnum=a.value
    //      var psw=b.value



    //   // var acnum=this.acno
    //   // var psw=this.psw
    //   let userDetails=this.userDetails
    //   if(acnum in userDetails){
    //     if(psw==userDetails[acnum]['password']){
    //       alert('login success')
    //     }
    //     else{
    //       alert('user not exist')
    //     }

    //   }

    //   alert('success')
    // }
    // acnoChange(event:any){
    //   this.acno=event.target.value


    // }
    // passchange(event:any){
    //   this.psw=event.target.value
    // }



}