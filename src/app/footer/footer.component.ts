import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  GmailLink = "";
  GithubLink = "https://github.com/FYE237";
  DiscordLink = "";

  ImagePath = "../../assets/images/svgs/github.svg";

}
