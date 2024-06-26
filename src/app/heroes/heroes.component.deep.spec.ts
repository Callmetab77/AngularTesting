import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { of } from "rxjs";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroesComponentDeep', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id:1, name: 'SpiderDude', strength: 8},
      {id:2, name: 'Wonderful Woman', strength: 24},
      {id:3, name: 'SpiderGirl', strength: 55},
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should  render each hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    const heroComponentDES = fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponentDES.length).toEqual(3);
    // expect(heroComponentDES[0].componentInstance.hero.name).toEqual('SpiderDude');
    //commented above to just make a loop
    for(let i = 0; i < heroComponentDES.length; i++) {
      expect(heroComponentDES[i].componentInstance.hero).toEqual(HEROES[i])
    }
  });

  // it(`should call heroService.deleteHero wehn Hero Components's delete button is click`, () => {
  //   spyOn(fixture.componentInstance, 'delete');
  //   mockHeroService.getHeroes.and.returnValue(of(HEROES));

  //   fixture.detectChanges();

  //   const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
  //   heroComponents[0].query(By.css('button'))
  //     .triggerEventHandler('click', {stopPropagation: () => {}});

  //   expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0]);
  // });

  //another way to unit test the child component by emitting event
  it(`should call heroService.deleteHero wehn Hero Components's delete button is click`, () => {
    spyOn(fixture.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
    (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);

    expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0]);
  });
});
