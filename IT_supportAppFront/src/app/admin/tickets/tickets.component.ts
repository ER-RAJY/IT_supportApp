import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../Models/Ticket';
import { TicketService } from '../../service/ticket.service';
import { AuthService } from '../../service/auth.service';
import {Equipements} from "../../Models/Equipements";
import {EquipementService} from "../../service/equipement.service"; // Assuming you have this service

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent  implements OnInit{
  tickets: Ticket[] = [];
  equipmentList: Equipements[] = []; // List of available equipment
  showAddForm = false;
  showEditForm = false;

  newTicket: Ticket = {
    ticketId: 0,
    description: '',
    statut: '',
    utilisateur: null, // This will be set to the current user's ID
    technicien: null,
    equipment: null, // This will be selected from the dropdown
    panne: null
  };

  editTicket: Ticket = {
    ticketId: 0,
    description: '',
    statut: '',
    utilisateur: null,
    technicien: null,
    equipment: null,
    panne: null
  };

  errorMessage: string | null = null;

  constructor(
    private ticketService: TicketService,
    private equipmentService: EquipementService,
    private authService: AuthService // Assuming you have an AuthService to get the current user
  ) {}

  ngOnInit(): void {
    this.getAllTickets();
    this.loadEquipmentList(); // Load equipment list on component initialization
    // this.setCurrentUser(); // Set the current user's ID for the new ticket
  }

  getAllTickets(): void {
    this.ticketService.getAllTickets().subscribe(
      (data) => {
        this.tickets = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching tickets', error);
        this.errorMessage = 'Error fetching tickets. Please try again later.';
      }
    );
  }

  loadEquipmentList(): void {
    this.equipmentService.getEquipements().subscribe(
      (data) => {
        this.equipmentList = data;
        console.log('Equipment list:', data);
      },
      (error) => {
        console.error('Error fetching equipment list', error);
        this.errorMessage = 'Error fetching equipment list. Please try again later.';
      }
    );
  }
  //
  // setCurrentUser(): void {
  //   this.authService.getCurrentUser().subscribe(
  //     (user) => {
  //       this.newTicket.utilisateur = user.id; // Assuming the user object has an 'id' field
  //     },
  //     (error) => {
  //       console.error('Error fetching current user', error);
  //       this.errorMessage = 'Error fetching current user. Please try again later.';
  //     }
  //   );
  // }

  addTicket(): void {
    this.ticketService.addTicket(this.newTicket).subscribe(
      (data) => {
        this.tickets.push(data);
        // Reset the form
        this.newTicket = {
          ticketId: 0,
          description: '',
          statut: '',
          utilisateur: this.newTicket.utilisateur, // Keep the current user ID
          technicien: null,
          equipment: null,
          panne: null
        };
        this.showAddForm = false;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error adding ticket', error);
        this.errorMessage = 'Error adding ticket. Please try again.';
      }
    );
  }

  editTicketDetails(ticket: Ticket): void {
    this.editTicket = { ...ticket }; // Create a copy of the ticket to edit
    this.showEditForm = true;
    this.showAddForm = false;
    this.errorMessage = null;
  }

  updateTicket(): void {
    this.ticketService.editDescriptionTicket(this.editTicket.ticketId, this.editTicket).subscribe(
      (data) => {
        const index = this.tickets.findIndex(t => t.ticketId === data.ticketId);
        if (index !== -1) {
          this.tickets[index] = data;
        }
        this.showEditForm = false;
        // Reset the form
        this.editTicket = {
          ticketId: 0,
          description: '',
          statut: '',
          utilisateur: null,
          technicien: null,
          equipment: null,
          panne: null
        };
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error updating ticket', error);
        this.errorMessage = 'Error updating ticket. Please try again.';
      }
    );
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id).subscribe(
      () => {
        this.tickets = this.tickets.filter(ticket => ticket.ticketId !== id);
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error deleting ticket', error);
        this.errorMessage = 'Error deleting ticket. Please try again.';
      }
    );
  }
}
