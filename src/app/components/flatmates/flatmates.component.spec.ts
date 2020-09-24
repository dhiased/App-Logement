import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlatmatesComponent } from './flatmates.component';

describe('FlatmatesComponent', () => {
  let component: FlatmatesComponent;
  let fixture: ComponentFixture<FlatmatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatmatesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlatmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
