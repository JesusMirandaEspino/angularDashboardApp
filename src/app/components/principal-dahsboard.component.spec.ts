import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDahsboardComponent } from './principal-dahsboard.component';

describe('PrincipalDahsboardComponent', () => {
  let component: PrincipalDahsboardComponent;
  let fixture: ComponentFixture<PrincipalDahsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalDahsboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
