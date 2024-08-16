import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../../service/equipement.service';
import { Equipements } from '../../Models/Equipements';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipements: Equipements[] = [];
  showAddForm = false;
  showEditForm = false;
  newEquipment: Equipements = { equipementId: 0, name: '',  description: '', statut: 'DISPONIBLE' };
  editEquipment: Equipements = { equipementId: 0, name: '', description: '', statut: 'DISPONIBLE' };
  selectedFile: File | null = null;

  errorMessage: string = '';

  readonly statuses: { [key: string]: string } = {
    DISPONIBLE: 'Disponible',
    NONDISPONIBLE: 'Non disponible'
  };

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.getEquipements();
  }

  getEquipements(): void {
    this.equipementService.getEquipements().subscribe(
      data => {
        this.equipements = data;
      },
      error => {
        console.error('Error fetching equipment data', error);
        this.errorMessage = 'Error fetching equipment data.';
      }
    );
  }

  addEquipement(): void {
    this.equipementService.addEquipement(this.newEquipment).subscribe(
      () => {
        this.getEquipements();
        this.showAddForm = false;
        this.newEquipment = { equipementId: 0, name: '', description: '', statut: 'DISPONIBLE' };
      },
      error => {
        console.error('Error adding equipment', error);
        this.errorMessage = 'Error adding equipment. ' + error.message;
      }
    );
  }


  editEquipementDetails(equipement: Equipements): void {
    this.editEquipment = { ...equipement };
    this.showEditForm = true;
  }

  updateEquipement(): void {
    this.equipementService.editEquipement(this.editEquipment.equipementId, this.editEquipment).subscribe(
      () => {
        this.getEquipements();
        this.showEditForm = false;
      },
      error => {
        console.error('Error updating equipment', error);
        this.errorMessage = 'Error updating equipment. ' + error.message;
      }
    );
  }

  deleteEquipement(id: number): void {
    this.equipementService.deleteEquipement(id).subscribe(
      () => {
        this.getEquipements();
      },
      error => {
        console.error('Error deleting equipment', error);
        this.errorMessage = 'Error deleting equipment.';
      }
    );
  }
}
