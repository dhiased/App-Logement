import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { House2Component } from './house2.component';

describe('House2Component', () => {
  let component: House2Component;
  let fixture: ComponentFixture<House2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ House2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(House2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
