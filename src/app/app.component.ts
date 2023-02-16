import { Component } from '@angular/core';
import { GestionAffichageService } from './service/gestion-affichage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  

  constructor(private myservice: GestionAffichageService) { }

  ngOnInit() {
      this.myservice.hidefooter();
  }

  getValue(){
    return this.myservice.getvalueFooter();
  }

}
