import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListeJoueursComponent } from './liste-joueur.component';

describe('ListeJoueursComponent', () => {
  let component: ListeJoueursComponent;
  let fixture: ComponentFixture<ListeJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ListeJoueursComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
