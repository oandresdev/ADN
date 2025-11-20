import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantCheckComponent } from './mutant-check.component';

describe('MutantCheckComponent', () => {
  let component: MutantCheckComponent;
  let fixture: ComponentFixture<MutantCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutantCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MutantCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
