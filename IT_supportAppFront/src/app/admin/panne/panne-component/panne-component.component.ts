import { Component, OnInit } from '@angular/core';
import { PanneService } from '../../../service/Panne.Service';
import { Panne } from '../../../Models/Panne';

@Component({
  selector: 'app-panne',
  templateUrl: './panne-component.component.html',
  styleUrls: ['./panne-component.component.css']
})
export class PanneComponent implements OnInit {
  pannes: Panne[] = [];
  errorMessage: string = '';
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  newPanne: Panne = { panneId: 0, name: '' };
  editPanne: Panne = { panneId: 0, name: '' };

  constructor(private panneService: PanneService) {}

  ngOnInit(): void {
    this.loadPannes();
  }

  loadPannes(): void {
    this.panneService.getPannes().subscribe(
      (data) => {
        this.pannes = data;
      },
      (error) => {
        console.error('Component error:', error);
        this.errorMessage = 'Error fetching fault data: ' + error;
      }
    );
  }

  addPanne(): void {
    if (!this.newPanne.name.trim()) {
      this.errorMessage = 'Name is required.';
      return;
    }

    this.panneService.addPanne(this.newPanne).subscribe(
      (panne) => {
        this.pannes.push(panne);
        this.newPanne = { panneId: 0, name: '' }; // Reset form
        this.showAddForm = false; // Hide form
        console.log('Panne added:', panne);
      },
      (error) => {
        console.error('Error adding panne:', error);
        this.errorMessage = 'Error adding fault data: ' + error;
      }
    );
  }

  editPanneDetails(panne: Panne): void {
    this.editPanne = { ...panne }; // Load panne details into editPanne
    this.showEditForm = true;
  }

  updatePanne(): void {
    if (!this.editPanne.name.trim()) {
      this.errorMessage = 'Name is required.';
      return;
    }

    this.panneService.editPanne(this.editPanne.panneId, this.editPanne).subscribe(
      (panne) => {
        const index = this.pannes.findIndex(p => p.panneId === panne.panneId);
        if (index !== -1) {
          this.pannes[index] = panne;
        }
        this.editPanne = { panneId: 0, name: '' }; // Reset form
        this.showEditForm = false; // Hide form
        console.log('Panne updated:', panne);
      },
      (error) => {
        console.error('Error updating panne:', error);
        this.errorMessage = 'Error updating fault data: ' + error;
      }
    );
  }

  deletePanne(id: number): void {
    this.panneService.deletePanne(id).subscribe(
      () => {
        this.pannes = this.pannes.filter(p => p.panneId !== id);
        console.log('Panne deleted:', id);
      },
      (error) => {
        console.error('Error deleting panne:', error);
      }
    );
  }
}
