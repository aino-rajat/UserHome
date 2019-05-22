import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }   

  ngOnInit() {
  }
  
  login():void{
    this.dialog.open(LoginComponent,{
      width: '100vw', height: '50vw'
    });
  }
}


