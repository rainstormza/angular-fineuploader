import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-loading-bar2',
  templateUrl: './loading-bar2.component.html',
  styleUrls: ['./loading-bar2.component.css']
})
export class LoadingBar2Component implements OnInit {

  constructor(private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
  }

  startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }

}
