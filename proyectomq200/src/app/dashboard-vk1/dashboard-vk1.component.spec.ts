import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent_vk1 } from './dashboard-vk1.component';

describe('DashboardComponent_vk1', () => {
  let component: DashboardComponent_vk1;
  let fixture: ComponentFixture<DashboardComponent_vk1>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent_vk1]
    });
    fixture = TestBed.createComponent(DashboardComponent_vk1
      );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
