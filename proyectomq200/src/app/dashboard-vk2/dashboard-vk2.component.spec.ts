import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent_vk2 } from './dashboard-vk2.component';

describe('DashboardComponent_vk2', () => {
  let component: DashboardComponent_vk2;
  let fixture: ComponentFixture<DashboardComponent_vk2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent_vk2]
    });
    fixture = TestBed.createComponent(DashboardComponent_vk2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
