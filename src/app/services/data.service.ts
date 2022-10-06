import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any
  currentAcno:any

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:10000,transcations:[]},
    1001:{acno:1001,username:"anu",password:123,balance:20000,transcations:[]},
    1002:{acno:1002,username:"joyal",password:123,balance:150000,transcations:[]},
    1003:{acno:1003,username:"anaga",password:123,balance:100000,transcations:[]},
  }


  constructor() { }
  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      // console.log(userDetails);
      
      return true
    }
  }
  login(acnum:any,psw:any) {
   
    let userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        this.currentuser=userDetails[acnum]['username']
        this.currentAcno=acnum
        return true

      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
        alert('user not exist')
        return false
      }

    }
    deposit(acno: any, pswrd: any, amt: any) {
      let userDetails = this.userDetails
      var amount = parseInt(amt)
      if (acno in userDetails) {
        if (pswrd == userDetails[acno]['password']) {
          userDetails[acno]['balance'] += amount
          userDetails[acno]['transcations'].push({type:'CREDIT',amount})
          return userDetails[acno]['balance']
        }
        else {
          alert('incurrect password')
        }
      }
      
        
      
    
    }
    withdraw(acno1:any,pswrd1:any,amt1:any){
      let userDetails=this.userDetails
      var amount=parseInt(amt1)//converting string input data
      if(acno1 in userDetails){
        if(pswrd1==userDetails[acno1]['password']){
          if(amount>=userDetails[acno1]['balance']){
            alert('insufficient balance')
            return false

          }
          else{
          userDetails[acno1]['balance']-=amount
          userDetails[acno1]['transcations'].push({type:'DEBIT',amount})

          return userDetails[acno1]['balance']
        }
        }
        else{
          alert('incurrect password')
        }
      }

    }
    
  getTranscations(acno:any){
   return this.userDetails[acno]['transcations']

  }
    
}
