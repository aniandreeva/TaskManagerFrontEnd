import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SprintsService} from "../services/sprints.service";
import {Sprint} from "../models/sprint.model";

@Component({
  selector: 'app-sprints-list',
  templateUrl: './sprints-list.component.html'
})
export class SprintsListComponent implements OnInit {

  sprints: Sprint[];

  constructor(private sprintsService: SprintsService,
              private router: Router) {
  }

  ngOnInit() {
    this.sprintsService.getAll().then(sprints => {

      $('#table-sprints').DataTable({
        data: sprints,
        drawCallback: () => {
          $('[data-toggle="tooltip"]').tooltip();

          let that = this;

          $('.details-btn').click(function () {
            let id = $(this).data('id');
            that.router.navigate(['sprints', id]);
          });

          $('.edit-btn').click(function() {
            let id = $(this).data('id');
            that.router.navigate(['sprints/edit/', id]);
          });

          $('.delete-btn').click(function() {
            let id = $(this).data('id');
            that.sprintsService.delete(id).then(data => {
              $('#table-sprints').DataTable()
                .row($('[data-id="' + id + '"]').parents('tr'))
                .remove()
                .draw();
            })
          });
        },
        columns: [
          {'data': 'ID', searchable: false},
          {
            data: (row) => {
              return moment(row.StartDate).format("LL");
            }
          },
          {
            data: (row) => {
              return moment(row.EndDate).format("LL");
            }
          },
          {'data': 'Description'},
          {
            data: (row) => {
              return '<div class="text-center"><i class="details-btn fa fa-info" data-toggle="tooltip" title="Details" aria-hidden="true" data-id="' + row.ID + '"></i>' +
                '<i class="edit-btn fa fa-pencil" data-toggle="tooltip" title="Edit" aria-hidden="true" data-id="' + row.ID + '"></i>' +
                '<i class="delete-btn fa fa-trash" data-toggle="tooltip" title="Delete" aria-hidden="true" data-id="' + row.ID + '"></i></div>'
            }
            , orderable: false
          }]
      });
    });
  }

}
