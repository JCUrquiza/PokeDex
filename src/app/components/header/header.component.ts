import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeAppService } from '../../services/poke-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(  ) { }

  ngOnInit() {
  }

}
