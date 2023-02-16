import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionAffichageService } from '../service/gestion-affichage.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private router: Router , private myservice: GestionAffichageService) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('');
    this.myservice.hidefooter();
  }


  showSkills() {
    this.router.navigateByUrl('MySkills');
    this.myservice.hidefooter();
  }

  goToProjects() {
    this.router.navigateByUrl('Projects');
    this.myservice.hidefooter();
  }

  showContacts() {
    this.router.navigateByUrl('Contacts');
    this.myservice.showfooter();
  }

  goToAboutMe() {
    this.router.navigateByUrl('AboutMe');
    this.myservice.hidefooter();
  }

}
