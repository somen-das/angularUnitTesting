import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Data {
    name:String,
    email:String,
    Phone:Number,
    website:String
    company:Object
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, AfterViewInit {
  textContent(textContent: any) {
    throw new Error('Method not implemented.');
  }

  public sort!: MatSort;
  public ELEMENT_DATA : any[] = [];
  
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  public displayedColumns: String[] = [
    "Name",
    "Email",
    "Phone",
    "Website",
    "CompanyName"
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.viewUsersData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  viewUsersData() {
    this.api.getData().subscribe((res: any) => {
      res.map((res: any) => {
        // this.ELEMENT_DATA = res;
         this.ELEMENT_DATA.push(res);
      })
    this.dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    })
    console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator;
    }
  }
}


