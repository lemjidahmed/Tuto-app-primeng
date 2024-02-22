import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label:'Tutorials',
        icon:'pi pi-fw pi-file',
        routerLink: '/tutorials'
      },
      {
        label:'Add',
        icon:'pi pi-fw pi-plus',
        routerLink: '/add'
      }
      ];
  }
}
