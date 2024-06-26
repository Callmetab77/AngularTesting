import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroComponent } from "./hero.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {id:1, name: 'SpiderDude', strength: 8}
    expect(fixture.componentInstance.hero.name).toEqual('SpiderDude');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = {id:1, name: 'SpiderDude', strength: 8}
    fixture.detectChanges();

    let debugElementAnchor = fixture.debugElement.query(By.css('a'));

    expect(debugElementAnchor.nativeElement.textContent).toContain('SpiderDude');
    //expect(fixture.nativeElement.querySelector('a').textContent).toContain('SpiderDude');
  });

});
