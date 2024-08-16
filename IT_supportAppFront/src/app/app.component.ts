import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JwtService} from "./service/jwt-service";
import {Role} from "./Models/enum/Role";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'IT_supportAppFront';

  ngOnInit(): void {
    document.documentElement.classList.add('dark');
  }



}
