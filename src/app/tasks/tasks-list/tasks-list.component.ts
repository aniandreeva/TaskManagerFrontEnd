import {Component, OnInit} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Router} from "@angular/router";
import {UsersService} from "../../users/services/users.service";
import {User} from "../../users/models/user.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent implements OnInit {

  users: User[];

  constructor(private tasksService: TasksService,
              private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.usersService.getAll().then(users => {
      this.users = users;

      this.tasksService.getAll().then(tasks => {
        $('#table-tasks').DataTable({
          data: tasks,
          drawCallback: () => {
            $('[data-toggle="tooltip"]').tooltip();

            let that = this;

            $('.details-btn').click(function () {
              let id = $(this).data('id');
              that.router.navigate(['tasks', id]);
            });

            $('.edit-btn').click(function () {
              let id = $(this).data('id');
              that.router.navigate(['tasks/edit/', id]);
            });

            $('.delete-btn').click(function () {
              let id = $(this).data('id');

              that.tasksService.delete(id).then(data => {
                $('#table-tasks').DataTable()
                  .row($('[data-id="' + id + '"]').parents('tr'))
                  .remove()
                  .draw();
              });
            });
          },
          columns: [
            {'data': 'ID', searchable: false},
            {'data': 'Title'},
            {
              // IsComplete
              data: (row) => {
                return '<div class="text-center">' + (row.IsComplete ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>') + '</div>';
              },
              type: 'string'
            },
            {
              // UserID
              data: (row) => {
                let user = this.users.filter(u => u.ID === row.UserID)[0];
                return user ? user.Name : '';
              }
            },
            {
              data: (row) => {
                return '<div class="text-center"><i class="edit-btn fa fa-pencil" data-toggle="tooltip" title="Edit" aria-hidden="true" data-id="' + row.ID + '"></i>' +
                  '<i class="details-btn fa fa-info" data-toggle="tooltip" title="Details" aria-hidden="true" data-id="' + row.ID + '"></i>' +
                  '<i class="delete-btn fa fa-trash" data-toggle="tooltip" title="Delete" aria-hidden="true" data-id="' + row.ID + '"></i></div> '
              }, orderable: false
            }]
        });
      });
    });
  }

}
