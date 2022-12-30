import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllFunctionsService } from 'src/app/services/functions/all-functions.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
   private allFunctionsService: AllFunctionsService
  ) {

   }

  ngOnInit(): void {
  }
  dataSearch($event:any){
    this.allFunctionsService.createData($event,'tracks')
  }
  ngOnDestroy() {
  }
}
