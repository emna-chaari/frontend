import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Tickets } from 'src/app/views/admin/ajouter-ticket/tickets';
import { User } from 'src/app/views/admin/user';

@Component({
  selector: 'app-liste-ticket',
  templateUrl: './liste-ticket.component.html',
  styleUrls: ['./liste-ticket.component.css']
})
export class ListeTicketComponent implements OnInit {


  showForm=false;
  source_demande=['Email','Téléphone','Directe','Autre...'];
  type=['Demande','Incident'];
  categorie=['Panne Matérielle','Panne Logiciel','Panne Réseau'];
  impact=['Très Haute','Haute','Moyenne','Basse','Très Basse'];
  urgence=['Très Haute','Haute','Moyenne','Basse','Très Basse'];
  statut=['Nouveau','En cours','Traité','Résolu','Clos']

  tickets:Tickets[]=[];
  types:any;
  t:Tickets={
    id:'',
    title:'',
    description:'',
    dateOpened:'',
    dateClosed:'',
    lastUpdated:'',
    updates:'',
    createdBy:'',
    assignedTo:'',
    requestedBy:'',
    source_demande:'',
    impact:'',
    urgence:'',
    priority:'',
    category:'',
    type:'',
    ticketStatus:''
   
  }
  user_:User={
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    adress:'',
    phone_number:'',
    password:'',
    role:''
  }

  constructor(private ts:TicketService,private route:Router) { }

  //  getTicket(){
  //   this.ts. fetchTicketListByAssignedTo().subscribe(data => {
  //     console.log(data)
  //     console.log(this.tickets);
  //     console.log("hello")
  //     this.tickets = data;
  //   });
  // }

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
//  this.getTicket();
 this.getTicketList();
}

// search(){
//   if(this.statuts ==""){
//     this.ngOnInit();
//   }else{
//     this.tickets=this.tickets.filter(res=>{
//       return res.statut.toLocaleLowerCase().match(this.statuts.toLocaleLowerCase());
//     })
//   }
// }

getTicketList() {
  this.ts.fetchTicketList().subscribe(
    data => {
      console.log(data);
      this.tickets = data;
    },
    error => {
      console.error(error)
    }
  )
}


}
