import { Component, OnInit } from '@angular/core';
import { Role } from "../../Models/enum/Role";
import { Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";
import {CommonModule, NgClass, NgIf} from "@angular/common";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgIf,CommonModule
  ],
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  currentSection: string = 'admin/dashboard';
  role: Role | null | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

  isAdmin(): boolean {
    return this.role === Role.ADMIN;
  }

  isTechnician(): boolean {
    return this.role === Role.TECHNICIEN;
  }

  isUser(): boolean {
    return this.role === Role.USER;
  }

  loadContent(section: string) {
    this.currentSection = section;
    this.router.navigate([`/${section}`]);
  }
}
