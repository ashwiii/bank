import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconform',
  templateUrl: './deleteconform.component.html',
  styleUrls: ['./deleteconform.component.css']
})
export class DeleteconformComponent implements OnInit {

  @Input()item:string | undefined

 @Output() onCancel=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

}
