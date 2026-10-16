import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticContent } from './static-content';

describe('StaticContent', () => {
  let component: StaticContent;
  let fixture: ComponentFixture<StaticContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticContent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
