
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../models/team';
import { TeamComponent } from '../team/team.component';
import { TeamsService } from '../../services/teams-service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'ns-tablist',
  standalone: true,
  imports: [CommonModule],
  // Note: 'styleUrl' should be 'styleUrls' (plural) in Angular
  templateUrl: './tablist.component.html',
  styleUrl: './tablist.component.css'
})
export class TablistComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.teams$.subscribe((teams) => {
      this.teams = teams;
    });

  }
  deleteTeam(title: string): void {
    this.teamsService.deleteTeam(title);
  }


  // exportToExcel(): void {
  //   // Préparer les données pour l'exportation
  //   const worksheetData = this.teams.map(team => ({
  //     Nom: team.title,
  //     Prix: team.price
  //   }));

  //   // Créer une feuille de calcul
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(worksheetData);

  //   // Créer un classeur
  //   const workbook: XLSX.WorkBook = {
  //     Sheets: { 'Équipes': worksheet },
  //     SheetNames: ['Équipes']
  //   };

  //   // Générer le fichier Excel
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  //   // Créer un Blob pour le téléchargement
  //   const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  //   // Télécharger le fichier
  //   saveAs(data, 'equipes.pdf');
  // }

  exportToPDF(): void {
    const doc = new jsPDF();

    // Données de la table
    const rows = this.teams.map(team => [
      team.title ?? '',
      team.price ?? 0
    ]);
    

    // Générer le tableau
    autoTable(doc, {
      head: [['Nom', 'Prix']],
      body: rows
    });

    // Sauvegarder le fichier
    doc.save('equipes.pdf');
  }
}
