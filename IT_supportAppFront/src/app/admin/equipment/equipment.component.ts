import {Component, OnInit} from '@angular/core';
import {EquipementService} from "../../service/equipement.service";
import {Equipements} from "../../Models/Equipements";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit{

  equipements : Equipements[] = [];
  constructor(private equipementService :EquipementService) {
  }
  ngOnInit() {
    this.getEquipements();
  }

  getEquipements() : void {
    this.equipementService.getEquipements().subscribe(data => {
      this.equipements = data;
    })
  }


}
