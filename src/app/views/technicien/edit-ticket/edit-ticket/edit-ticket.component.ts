import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  source_demande=['Email','Téléphone','Directe','Autre...'];
  type=['Demande','Incident'];
  categorie=['Panne Matérielle','Panne Logiciel','Panne Réseau'];
  impact=['Très Haute','Haute','Moyenne','Basse','Très Basse'];
  urgence=['Très Haute','Haute','Moyenne','Basse','Très Basse'];
  statut=['Nouveau','En cours','Traité','Roslu','Clos'];
 
    ngOnInit(): void {

 

    }

}
