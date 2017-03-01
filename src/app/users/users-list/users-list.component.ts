import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.usersService.getAll().then(users => {
      $('#table-users').DataTable({
        data: users,
        drawCallback: ()=> {
          $('[data-toggle="tooltip"]').tooltip();

          let that = this;

          $('.details-btn').click(function () {
            let id = $(this).data('id');
            that.router.navigate(['users', id]);
          });

          $('.edit-btn').click(function () {
            let id = $(this).data('id');
            that.router.navigate(['users/edit/', id]);
          });

          $('.delete-btn').click(function () {
            let id = $(this).data('id');
            that.usersService.delete(id).then(data => {
              $('#table-users').DataTable()
                .row($('[data-id="' + id + '"]').parents('tr'))
                .remove()
                .draw();
            });
          });
        },
        columns: [
          {'data': 'ID', searchable: false},
          {'data': 'Name'},
          {'data': 'Email'},
          {
            data: (row) => {
              return '<div class="text-center"><i class="details-btn fa fa-info" data-toggle="tooltip" title="Details" aria-hidden="true" data-id="' + row.ID + '"></i>' +
                '<i class="edit-btn fa fa-pencil" data-toggle="tooltip" title="Edit" aria-hidden="true" data-id="' + row.ID + '"></i>' +
                '<i class="delete-btn fa fa-trash" data-toggle="tooltip" title="Delete" aria-hidden="true" data-id="' + row.ID + '"></i></div>'
            }
          , orderable: false}]
      });
    });
  }

}
