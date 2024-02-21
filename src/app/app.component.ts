import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actions : Array<any> =[
  {title:"Home" , "route":"/home", icon : "house"},
  {title:"Products" , "route":"/products", icon : "bag"},
  {title:"New Product" , "route":"/newProduct", icon : "file-earmark-arrow-down"}
  ];
  // Methode pour visualiser dans quelle onglet on se trouve
  currentAction :any;

  setCurrentAction(action :any){
  this.currentAction=action;

  }
}
