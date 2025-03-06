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
  errorMessage: string = "";

  onClick($event: any) {
    console.log("Button is clicked", $event);
    window.open(this.url, "_blank");
  }

  validateName(name: string) {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!namePattern.test(name)) {
      this.errorMessage = "Name is incorrect! Must start with a capital letter and have at least 3 letters.";
    } else {
      this.errorMessage = "";
    }
  }
}
