import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactService } from '../../Services/contact.service';
import { dummyContactList } from '../../Services/mock-data.spec';

import { CommunityComponent } from './community.component';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;
  let service: ContactService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityComponent ]
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

});
