/// <reference types="fine-uploader" />
import { Component, OnInit } from '@angular/core';
// declare var qq:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app works!';

  	uploader: FineUploader.qq;
	uiOptions: FineUploader.UIOptions;
	coreEvents: FineUploader.CoreEvents;


  constructor() { }

  ngOnInit() {
  	/**
	 * Prepare/set options for the core + UI FineUploader
	 */
	this.uiOptions = {
	    element: document.getElementById('fine-uploader-gallery'),
	    template: "qq-template-gallery",
	    autoUpload: false,
        debug: true
	}

	/**
	 * Instantiate the FineUploader and pass in the uiOptions
	 */
	let uploader: FineUploader.qq = new qq.FineUploader(this.uiOptions);
	 }
}


// https://fineuploader.com/demos.html
