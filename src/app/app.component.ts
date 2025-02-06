import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'project-crud';

  DataUsers = []

  constructor(public dataGetApi: DataService,private authService:AuthService) {

  }
  ngOnInit(): void {
    // this.dataGetApi.getData().subscribe(response =>{
    //   console.log("api called:::::",response);
    //   this.DataUsers = response.
    // });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  

  
}
