import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Particlon';
  ngOnInit(): void {
     this.goHome();
  }
  constructor(private router: Router) { }
    goHome(){
    this.router.navigate(['UserHome']); 
    console.log("In gohome method");
    }
}
