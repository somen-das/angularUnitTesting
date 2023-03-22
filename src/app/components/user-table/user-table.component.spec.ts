import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserTableComponent } from "./user-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ApiService } from "src/app/service/api.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { off } from "process";

describe("UserTableComponent", () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
      declarations: [UserTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`ELEMENT_DATA check`, () => {
    const fixture = TestBed.createComponent(UserTableComponent);
    const component = fixture.componentInstance;
    expect(component.ELEMENT_DATA).toEqual([]);
  });

  it(`Get all user Details`, () => {
    const fixture = TestBed.createComponent(UserTableComponent);
    const comp = fixture.componentInstance;
    // spyOn(comp, "viewUsersData").and.returnValue(true);
    const service = fixture.debugElement.injector.get(ApiService);
    const responce: any[] = [
      {
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
        },
      },
    ];
    spyOn(comp, "viewUsersData").and.returnValue(of(responce));

    comp.viewUsersData();
    expect(comp.viewUsersData).toEqual(responce);
  });
});
