import { Component } from '@angular/core';
import { faCoffee,faSearch,faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  
  faCoffee = faCoffee;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUser= faUser
}
