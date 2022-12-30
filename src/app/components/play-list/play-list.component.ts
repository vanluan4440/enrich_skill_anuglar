import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AllFunctionsService } from 'src/app/services/functions/all-functions.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent implements OnInit {
  data: any;
  iframeHTML$: any;

  constructor(
    private route: ActivatedRoute,
    private allFunctionsService: AllFunctionsService,
    private sanitizer: DomSanitizer
  ) {
    this.route.params.subscribe((param: Params) => {
      this.allFunctionsService
        .getIFrameSpotify(param['type'], param['id'])
        .subscribe((iframe) => {
          this.iframeHTML$ = iframe?.html.replace(
            '352',
            `${window.innerHeight}`
          );
        });
    });
  }

  ngOnInit(): void {}
  setIndex(i: number) {
    if (String(i).length == 1) {
      return `0${i}`;
    }
    return i;
  }
  converting(ms: number) {
    const min = Math.floor((ms / 1000 / 60) << 0);
    const sec = Math.floor((ms / 1000) % 60);
    if (String(min).length == 1 && String(sec).length > 1) {
      return `0${min}:${sec}`;
    }
    if (String(sec).length == 1 && String(min).length > 1) {
      return `${min}:0${sec}`;
    }
    if (String(sec).length == 1 && String(min).length == 1) {
      return `0${min}:0${sec}`;
    }
    return `${min}:${sec}`;
  }

  byPassHtml(html: any) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
