import { Component, OnInit } from '@angular/core';
import { GestionAffichageService } from '../service/gestion-affichage.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private myService : GestionAffichageService) {      this.myService.showfooter();
  }

  ngOnInit(): void {
  }



}
