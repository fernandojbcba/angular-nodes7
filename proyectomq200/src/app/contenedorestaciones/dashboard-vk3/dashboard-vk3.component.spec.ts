import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent_vk3 } from './dashboard-vk3.component';

describe('DashboardComponent_vk3', () => {
  let component: DashboardComponent_vk3;
  let fixture: ComponentFixture<DashboardComponent_vk3>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent_vk3]
    });
    fixture = TestBed.createComponent(DashboardComponent_vk3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
