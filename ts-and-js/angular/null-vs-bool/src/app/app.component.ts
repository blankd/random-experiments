import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'null-vs-bool';
  nullFirst: string[] = [];
  boolFirst: string[] = [];

  private genRandomString(len: number = 15) {
    return Math.random().toString(36).substring(2, len) + Math.random().toString(36).substring(2, len);
  }
}
