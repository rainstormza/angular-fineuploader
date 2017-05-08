import { Component, OnInit } from '@angular/core';
import {NgProgressService} from "ng2-progressbar";


@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit {

  constructor(private pService: NgProgressService) { }

  ngOnInit() {
  	this.pService.start();
  	// setTimeout(this.pService.done(), 5000);
  }

  test() {
  	this.pService.done();
  }

}
