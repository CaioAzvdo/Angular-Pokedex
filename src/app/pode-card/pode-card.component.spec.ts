import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodeCardComponent } from './pode-card.component';

describe('PodeCardComponent', () => {
  let component: PodeCardComponent;
  let fixture: ComponentFixture<PodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
