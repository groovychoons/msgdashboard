import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueViewComponent } from './revenue-view.component';

describe('RevenueViewComponent', () => {
  let component: RevenueViewComponent;
  let fixture: ComponentFixture<RevenueViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
