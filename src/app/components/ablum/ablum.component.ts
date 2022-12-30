import { Component, OnInit } from '@angular/core';
import { AllFunctionsService } from 'src/app/services/functions/all-functions.service';
@Component({
  selector: 'app-ablum',
  templateUrl: './ablum.component.html',
  styleUrls: ['./ablum.component.scss']
})
export class AblumComponent implements OnInit {
  private AblumId = [
    '3lZ0sW4znNieFHxGdyWXCj',
    '4nfpHvg7KFcAUTg6yajpvN',
    '5tFSjs5VsM2EwoA2Px6jqo',
    '1ZnJrvDY8ih3ppPWR2Tc2a',
    '0S4pP8MBY9p7ngFWIZQAJv',
    '6al2VdKbb6FIz9d7lU7WRB',
    '5tFSjs5VsM2EwoA2Px6jqo',
  ]
  constructor(
    private  allFunctionsService :  AllFunctionsService
  ) { }

  ngOnInit(): void {
    const ids = this.AblumId.toString()
    this.allFunctionsService.getAllAblums(ids,'VN').subscribe(res=>{
     this.allFunctionsService.createData(res,'albums')

    })
  }

}
