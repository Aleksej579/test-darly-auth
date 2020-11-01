import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTargetComponent } from './page-target.component';

describe('PageTargetComponent', () => {
  let component: PageTargetComponent;
  let fixture: ComponentFixture<PageTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
