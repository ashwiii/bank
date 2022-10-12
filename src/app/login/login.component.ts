import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm = this.fb.group({
    acnum: ['', [Validators.required, Validators.pattern('[0-9]+')]], 
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]

  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }
  login() {
    var acnum = this.loginForm.value.acnum
    var psw = this.loginForm.value.psw

   const result= this.ds.login(acnum,psw)
   if(this.loginForm.valid){
   if(result){
     alert('login success')
     this.router.navigateByUrl('dashboard')
   }
  }
  else{
    alert('enter valid format')
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