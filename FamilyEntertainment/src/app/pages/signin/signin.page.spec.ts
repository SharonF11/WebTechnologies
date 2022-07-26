import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from "@angular/router";

import { SigninPage } from './signin.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPage ],
      imports: [
        IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninPage);
    router = TestBed.get(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to the home page on signup', () => {
    spyOn(router, 'navigate');

    component.signup();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
