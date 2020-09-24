import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { House1Component } from './house1.component';

describe('House1Component', () => {
  let component: House1Component;
  let fixture: ComponentFixture<House1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ House1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(House1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
