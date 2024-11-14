import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/model/chambre.model/chambre.model.module';
import { ChambreService } from 'src/app/service/chambre-service.service';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
})
export class ChambreListComponent implements OnInit {
  chambres: Chambre[] = [];
  selectedChambre: Chambre | null = null;
  isEditing = false;
  newChambre: Chambre = { idChambre: 0, numeroChambre: 0, typeC: '' }; // Initialize with default values

  constructor(private chambreService: ChambreService) {}

  ngOnInit(): void {
    this.getChambres();
  }

  getChambres(): void {
    this.chambreService.getChambres().subscribe((data) => {
      this.chambres = data;
    });
  }

  addChambre(): void {
    console.log(this.newChambre); // Check the payload before sending
    this.chambreService.addChambre(this.newChambre).subscribe(
      (createdChambre) => {
        this.chambres.push(createdChambre);
        this.newChambre = { idChambre: 0, numeroChambre: 0, typeC: '' }; // Reset the form
      },
      (error) => {
        console.error('Error adding chambre:', error); // Log any errors
      }
    );
  }
  

  editChambre(chambre: Chambre): void {
    this.isEditing = true;
    this.selectedChambre = { ...chambre };
  }

  saveChambre(): void {
    if (this.selectedChambre) {
      this.chambreService.updateChambre(this.selectedChambre).subscribe(() => {
        this.getChambres();
        this.isEditing = false;
        this.selectedChambre = null;
      });
    }
  }

  deleteChambre(chambreId: number): void {
    this.chambreService.deleteChambre(chambreId).subscribe(() => {
      this.chambres = this.chambres.filter(c => c.idChambre !== chambreId);
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.selectedChambre = null;
  }
}
