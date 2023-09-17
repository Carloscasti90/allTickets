import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaVIPComponent } from './zona-vip.component';

describe('ZonaVIPComponent', () => {
  let component: ZonaVIPComponent;
  let fixture: ComponentFixture<ZonaVIPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaVIPComponent]
    });
    fixture = TestBed.createComponent(ZonaVIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
