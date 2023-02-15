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

  GmailLink = "mailto:yfezeu.emma@gmail.com";
  GithubLink = "https://github.com/FYE237";
  DiscordLink = "https://discordapp.com/users/FYE#6146";

 

}
