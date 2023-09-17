import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaGeneralComponent } from './zona-general.component';

describe('ZonaGeneralComponent', () => {
  let component: ZonaGeneralComponent;
  let fixture: ComponentFixture<ZonaGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaGeneralComponent]
    });
    fixture = TestBed.createComponent(ZonaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
