import { Component, Input, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {

@Input() hasHeader:boolean;
@Input() hasFooter:boolean;

  constructor(private router: Router) { }

  ngOnInit() {}
  goToParties(){
    this.router.navigate(['parties']);
  }
}
