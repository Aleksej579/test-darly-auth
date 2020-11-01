import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegComponent } from './page-reg.component';

describe('PageRegComponent', () => {
  let component: PageRegComponent;
  let fixture: ComponentFixture<PageRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
