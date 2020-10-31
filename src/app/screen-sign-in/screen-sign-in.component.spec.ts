import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSignInComponent } from './screen-sign-in.component';

describe('ScreenSignInComponent', () => {
  let component: ScreenSignInComponent;
  let fixture: ComponentFixture<ScreenSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
