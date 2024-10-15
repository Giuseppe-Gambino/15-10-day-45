import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetPostComponent } from './preset-post.component';

describe('PresetPostComponent', () => {
  let component: PresetPostComponent;
  let fixture: ComponentFixture<PresetPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresetPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
