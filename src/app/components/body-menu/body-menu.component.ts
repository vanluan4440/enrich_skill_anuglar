import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AllFunctionsService } from 'src/app/services/functions/all-functions.service';
@Component({
  selector: 'app-body-menu',
  templateUrl: './body-menu.component.html',
  styleUrls: ['./body-menu.component.scss'],
})
export class BodyMenuComponent implements OnInit {
  private playListId = [
    '37i9dQZF1EVHGWrwldPRtj',
    '7gFvnbcxQVwfcJxvt8vKpi',
    '37i9dQZF1EVHGWrwldPRtj',
    '7gFvnbcxQVwfcJxvt8vKpi',
    '37i9dQZF1EVHGWrwldPRtj',
    '7gFvnbcxQVwfcJxvt8vKpi',
    '37i9dQZF1DX0F4i7Q9pshJ',
    '37i9dQZF1EVKuMoAJjoTIw',
    '37i9dQZEVXcD00dV89nGna',
    '37i9dQZF1DWYPc4oQ0ynkq',
    '37i9dQZF1EVHGWrwldPRtj',
    '7gFvnbcxQVwfcJxvt8vKpi',
    '37i9dQZF1EVHGWrwldPRtj',
    '7gFvnbcxQVwfcJxvt8vKpi',
    '37i9dQZF1EVHGWrwldPRtj',
    '7gFvnbcxQVwfcJxvt8vKpi',
    '37i9dQZF1DX0F4i7Q9pshJ',
    '37i9dQZF1EVKuMoAJjoTIw',
    '37i9dQZEVXcD00dV89nGna',
    '37i9dQZF1DWYPc4oQ0ynkq',
    '37i9dQZF1EIdr6CLfTmq2O'
  ];
  dataPlayList: Subject<any> = new Subject();
  dataPlayListObservable = this.dataPlayList.asObservable();
  dataShow: any[] = [];
  heightScroll: number = 0
  constructor(private allFunctionsService: AllFunctionsService) {
    this.heightScroll = window.innerHeight - 200
  }

  ngOnInit(): void {
    this.playListId.forEach((id) => {
      this.allFunctionsService.getPlayListById(id).subscribe((data) => {
        if (data) {
          this.dataPlayList.next(data);
        }
      });
    });

    this.dataPlayListObservable.subscribe((data) => {
      this.dataShow.push(data);
    });
    this.allFunctionsService.loadAll().subscribe((res)=>{

      if(res['data'][`${res.type}`]?.items === undefined){
        this.dataShow = res['data'][`${res.type}`]
      }
      else{
        this.dataShow = res['data'][`${res.type}`]?.items
      }
    })
  }
  stopEvent($event: any){
    $event.stopPropagation()
  }
  urlData(item:any){
    return `/${item?.type}`
  }
}

