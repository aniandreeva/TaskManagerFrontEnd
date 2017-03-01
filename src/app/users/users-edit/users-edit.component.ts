import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html'
})
export class UsersEditComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      let id = +params['id'];

      if (id) {
        this.usersService.getById(id).then(
          (data) => {
            this.user = data;
          });
      }
    });
  }

  editUser() {
    this.usersService.save(this.user).then(() => {
      this.router.navigate(['users']);
    });
  }

}
