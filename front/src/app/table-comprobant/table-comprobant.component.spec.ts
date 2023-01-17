import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComprobantComponent } from './table-comprobant.component';

describe('TableComprobantComponent', () => {
  let component: TableComprobantComponent;
  let fixture: ComponentFixture<TableComprobantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComprobantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComprobantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
