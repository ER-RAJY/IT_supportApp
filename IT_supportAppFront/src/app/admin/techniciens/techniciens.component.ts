import { TechnicienUserService } from "../../service/technicien-user.service";
import { Component, OnInit } from "@angular/core";
import { Technicien } from "../../Models/Technicien";
import {Router} from "@angular/router";

@Component({
  selector: 'app-techniciens',
  templateUrl: './techniciens.component.html',
  styleUrls: ['./techniciens.component.css']
})
export class TechniciensComponent implements OnInit {
  techniciens: Technicien[] = [];
  newTechnicien: Technicien = new Technicien();
  editTechnicien: Technicien = new Technicien();
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  errorMessage: string = '';

  constructor(private technicienUserService: TechnicienUserService,private router : Router) {}

  ngOnInit(): void {
    this.getTechnicians();
  }



  getTechnicians(): void {
    this.technicienUserService.getTechnicians().subscribe(
      (data: Technicien[]) => {
        this.techniciens = data;
      },
      (error) => {
        console.error('Component error:', error);
        this.errorMessage = 'Error fetching technician data: ' + error.message;
      }
    );
  }



  addTechnicien(): void {
    this.router.navigate(['/technicien']);
    this.technicienUserService.addTechnician(this.newTechnicien).subscribe(
      (data: Technicien) => {
        this.techniciens.push(data);
        this.newTechnicien = new Technicien(); // Reset the form
        this.showAddForm = false; // Hide the form
      },
      (error) => {
        console.error('Component error:', error);
        this.errorMessage = 'Error adding technician: ' + error.message;
      }
    );
  }
}
