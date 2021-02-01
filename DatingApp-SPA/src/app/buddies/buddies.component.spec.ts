/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuddiesComponent } from './buddies.component';

describe('BuddiesComponent', () => {
  let component: BuddiesComponent;
  let fixture: ComponentFixture<BuddiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuddiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
