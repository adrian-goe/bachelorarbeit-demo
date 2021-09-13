import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListEntryComponent } from './team-list-entry.component';

describe('TeamListEntryComponent', () => {
  let component: TeamListEntryComponent;
  let fixture: ComponentFixture<TeamListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
