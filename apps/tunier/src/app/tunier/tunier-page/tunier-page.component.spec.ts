import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunierPageComponent } from './tunier-page.component';

describe('TunierPageComponent', () => {
  let component: TunierPageComponent;
  let fixture: ComponentFixture<TunierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunierPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
