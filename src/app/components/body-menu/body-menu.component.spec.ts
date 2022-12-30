import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMenuComponent } from './body-menu.component';

describe('BodyMenuComponent', () => {
  let component: BodyMenuComponent;
  let fixture: ComponentFixture<BodyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
