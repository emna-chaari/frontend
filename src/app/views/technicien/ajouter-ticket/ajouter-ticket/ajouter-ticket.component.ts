import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ajouter-ticket',
  templateUrl: './ajouter-ticket.component.html',
  styleUrls: ['./ajouter-ticket.component.css']
})
export class AjouterTicketComponent implements OnInit {
  source_demande=[,'Email','Téléphone','Directe','Autre...'];
  type=['','Demande','Incident'];
  categorie=['','Panne Matérielle','Panne Logiciel','Panne Réseau'];
  impact=['','Très Haute','Haute','Moyenne','Basse','Très Basse'];
  urgence=['','Très Haute','Haute','Moyenne','Basse','Très Basse'];
  statut=['','Nouveau','En cours','Traité','Résolu','Clos']

  constructor() { }


   
 
  
   date1= new Date();
   currentYear=this.date1.getUTCFullYear();
   currentMonth=this.date1.getUTCMonth()+1;
   currentDay=this.date1.getUTCDate();
   TodayDate:any;
   finalMonth:any;
   finalDay:any;
  ngOnInit(): void {
    if(this.currentMonth<10){
      this.finalMonth="0"+this.currentMonth;
    }else{
      this.finalMonth=this.currentMonth;
    }
 
  if(this.currentDay<10){
    this.finalDay="0"+this.currentDay;
  }else{
    this.finalDay=this.currentDay;
  }
  this.TodayDate=this.currentYear +"-" +this.finalMonth +"-"+ this.finalDay;
}

}
