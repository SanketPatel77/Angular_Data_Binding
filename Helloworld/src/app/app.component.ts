import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
  imageUrl = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM"
        alt="BridgeLabz logo"
  url = "http://localhost:4200/"
  ngOnInit(): void{
    this.title = "Hello from BridgeLabz";
  }

  onClick($event: any){
    console.log("Button is clicked", $event);
    window.open(this.url,"_blank");
  }
}
