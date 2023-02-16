import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  fileName = "cv_FEZEU_YOUMBI_Emmanuel.pdf";
  sourcePath = "assets/cv (1).pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
