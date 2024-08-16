import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user";
import {TechnicienUserService} from "../../service/technicien-user.service";
import {SideBarComponent} from "../../side-bar/side-bar/side-bar.component";
import {NavBarComponent} from "../../nav-bar/nav-bar/nav-bar.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

// @ts-ignore
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.html'],
  imports: [
    NavBarComponent,
    SideBarComponent,
    FormsModule,
    NgForOf,
    NgIf
  ],

  standalone: true
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User();
  editUser: User = new User();
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  errorMessage: string = '';

  constructor(private technicienUserService: TechnicienUserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.technicienUserService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Component error:', error);
        this.errorMessage = 'Error fetching user data: ' + error.message;
      }
    );
  }

  addUser(): void {
    this.technicienUserService.addUser(this.newUser).subscribe(
      (data: User) => {
        this.users.push(data);
        this.newUser = new User(); // Reset the form
        this.showAddForm = false; // Hide the form
      },
      (error) => {
        console.error('Component error:', error);
        this.errorMessage = 'Error adding user: ' + error.message;
      }
    );
  }

  // Optional: Add methods for editing and deleting users
}
