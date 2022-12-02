import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractDeedsComponent } from './abstract-deeds.component';

describe('AbstractDeedsComponent', () => {
  let component: AbstractDeedsComponent;
  let fixture: ComponentFixture<AbstractDeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractDeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractDeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
