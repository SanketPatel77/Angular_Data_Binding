import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  imageUrl = "assets/BL_logo_square_png.png";
  url = "http://localhost:4200/";
  userName: string = "";

  onClick($event: any) {
    console.log("Button is clicked", $event);
    window.open(this.url, "_blank");
  }
}
