import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsIndexComponent } from './produits-index.component';

describe('ProduitsIndexComponent', () => {
  let component: ProduitsIndexComponent;
  let fixture: ComponentFixture<ProduitsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsIndexComponent]
    });
    fixture = TestBed.createComponent(ProduitsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
