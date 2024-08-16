import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: true,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

  constructor(private authService: AuthService, private router: Router) { }

    logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
    }


}
