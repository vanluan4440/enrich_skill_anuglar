import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['code'] && params['state']) {
        this.loginService.getToken(params['code']).subscribe((token)=>{
          console.log(token);
          localStorage.setItem('token',JSON.stringify(token))
          this.router.navigateByUrl('/')
        })
      } else {
        this.loginService.getAuthCode();
      }
    });
  }

  ngOnInit(): void {}
}
