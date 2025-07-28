import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddButtonComponent } from '../user-list/user-add-button.component';

describe('UserAddButtonComponent', () => {
  let component: UserAddButtonComponent;
  let fixture: ComponentFixture<UserAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
