import { Component, OnInit } from '@angular/core';
import { AllFunctionsService } from 'src/app/services/functions/all-functions.service';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  playListData: any;
  constructor(private allFunctionsService: AllFunctionsService) {}

  ngOnInit(): void {
    this.allFunctionsService.getPlayLists().subscribe((playList) => {
      this.playListData = playList?.items;
      console.log(this.playListData);

    });
  }
  getIframePlayList(type:string, id: string){
    console.log(type);
    console.log(id);


  }
}
