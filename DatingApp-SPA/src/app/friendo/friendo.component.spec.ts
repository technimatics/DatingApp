/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FriendoComponent } from './friendo.component';

describe('FriendoComponent', () => {
  let component: FriendoComponent;
  let fixture: ComponentFixture<FriendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
