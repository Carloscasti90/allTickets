import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaPalcosComponent } from './zona-palcos.component';

describe('ZonaPalcosComponent', () => {
  let component: ZonaPalcosComponent;
  let fixture: ComponentFixture<ZonaPalcosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaPalcosComponent]
    });
    fixture = TestBed.createComponent(ZonaPalcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
