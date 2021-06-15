import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../../Services/contact.service';
import { dummyContactList } from '../../Services/mock-data.spec';

import { CommunityComponent } from './community.component';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;
  let service: ContactService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityComponent ],
      providers: [ MatSnackBar, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service to contacts', () => {
    let spy = spyOn(service,'getCommunity').and.resolveTo(dummyContactList);
    service.getCommunity();
    expect(spy).toHaveBeenCalled();
  });

  it('should load contacts list', async () => {
    spyOn(service,'getCommunity').and.resolveTo(dummyContactList);
    await component.loadCommunity();
    expect(component.contactList.length).toBeGreaterThan(0);
  });

  it('should not load contacts list', () => {
    spyOn(service,'getCommunity').and.rejectWith({});
    component.loadCommunity();
    expect(component.contactList.length).toBe(0);
  });

  it('should add contact to current user contact list', () => {
    let spy = spyOn(service,'addContact').and.resolveTo({});
    component.addContact(dummyContactList[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('should remove contact of current user contact list', () => {
    let spy = spyOn(service,'removeContact').and.resolveTo({});
    component.removeContact(dummyContactList[0]._id);
    expect(spy).toHaveBeenCalled();
  });

  it('should get list of contacts user', () => {
    let spy = spyOn(service,'getContactsFromUser').and.resolveTo([]);
    component.getContactsFromUser();
    expect(spy).toHaveBeenCalled();
  });

  it('should not add contact to user', () => {
    let spy = spyOn(service,'addContact').and.rejectWith({});
    component.addContact(dummyContactList[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('should not remove contact', () => {
    let spy = spyOn(service,'removeContact').and.rejectWith({});
    component.removeContact(dummyContactList[0]._id);
    expect(spy).toHaveBeenCalled();
  });

  it('should not get list of contacts user', () => {
    let spy = spyOn(service,'getContactsFromUser').and.rejectWith([]);
    component.getContactsFromUser();
    expect(spy).toHaveBeenCalled();
  });

  it('should not get list and clear view of contacts', () => {
    spyOn(service,'getContactsFromUser').and.rejectWith([]);
    component.getContactsFromUser();
    expect(component.contactList.length).toBe(0);
  });

});
