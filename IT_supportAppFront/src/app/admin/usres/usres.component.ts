import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { TechnicienUserService } from '../../service/technicien-user.service';
@Component({
  selector: 'app-users',
  templateUrl: './usres.component.html',
  styleUrls: ['./usres.component.css']
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
