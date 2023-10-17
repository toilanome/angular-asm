import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  removeItem(id:number|string) {
    const confirm = window.confirm("Chắc không")
  }

  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
}
