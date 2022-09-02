import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemDialogComponent } from './book-item-dialog.component';

describe('BookItemDialogComponent', () => {
  let component: BookItemDialogComponent;
  let fixture: ComponentFixture<BookItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
