import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablistComponent } from './tablist.component';

describe('TablistComponent', () => {
  let component: TablistComponent;
  let fixture: ComponentFixture<TablistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
