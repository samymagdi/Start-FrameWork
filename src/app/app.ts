import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./compontents/navbar/navbar";
import { Footer } from "./compontents/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app1';
}
