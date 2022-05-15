import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../Services/users.service";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.scss']
})
export class UserScreenComponent implements OnInit {
  public userlist: any;
  public id = new FormControl('');
  public name = new FormControl('');
  public relation = new FormControl('');
  public website = new FormControl('');
  public company = new FormControl('');

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      console.log(data)
      this.userlist = data;
    })
  }

}
