import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibaryComponent } from './my-libary.component';

describe('MyLibaryComponent', () => {
  let component: MyLibaryComponent;
  let fixture: ComponentFixture<MyLibaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
