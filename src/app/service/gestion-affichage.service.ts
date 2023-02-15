import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionAffichageService {

  
  constructor() {}

  showFooter !: boolean;

  showfooter(){
    this.showFooter = true;
  }

  hidefooter(){
    this.showFooter = false;
  }

  getvalueFooter(){
    return this.showFooter;
  }

}
