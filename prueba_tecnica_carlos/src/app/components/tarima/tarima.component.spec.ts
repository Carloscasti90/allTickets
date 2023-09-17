import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarimaComponent } from './tarima.component';

describe('TarimaComponent', () => {
  let component: TarimaComponent;
  let fixture: ComponentFixture<TarimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarimaComponent]
    });
    fixture = TestBed.createComponent(TarimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
