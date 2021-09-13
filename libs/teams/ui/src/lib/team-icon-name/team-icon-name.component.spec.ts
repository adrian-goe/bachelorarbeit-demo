import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIconNameComponent } from './team-icon-name.component';

describe('TeamIconNameComponent', () => {
  let component: TeamIconNameComponent;
  let fixture: ComponentFixture<TeamIconNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamIconNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIconNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
