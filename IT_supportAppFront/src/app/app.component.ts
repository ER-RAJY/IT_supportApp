import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JwtService} from "./service/jwt-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'IT_supportAppFront';
  admin : boolean = false;
  constructor(
    private router:Router, private service: JwtService ) {}

  ngOnInit(): void {
    this.checkpath();
    this.router.events.subscribe(() => this.checkpath());
  }

  protected checkpath() {
    const url = this.router.url;
    this.admin = url.startsWith('/admin');
  }

  logout(){
    this.service.logout();
    this.router.navigate(['login']);
  }
}
