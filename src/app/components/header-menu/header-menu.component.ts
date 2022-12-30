import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { AllFunctionsService } from 'src/app/services/functions/all-functions.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  imgUrl?: string = '';
  userName: string = '';
  isSearch?: boolean;
  @Output() searchData = new EventEmitter<any>();
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  constructor(private profileService: ProfileService, private router: Router, private allFunctionsService: AllFunctionsService) {
    this.router.events.subscribe((res: any) => {
      const flag = res['url'] == '/search';
      return (this.isSearch = flag);
    });

  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((res) => {
      this.imgUrl = res?.images[0]?.url;
      this.userName = res?.display_name;
    });
  }
  onSearchChange(searchValue: any): void {
    this.allFunctionsService.searchData('track',searchValue.value).subscribe((res)=>{
      this.searchData.emit(res)
    })
  }
}
