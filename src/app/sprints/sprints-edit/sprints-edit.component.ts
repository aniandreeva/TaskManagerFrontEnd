import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {SprintsService} from "../services/sprints.service";
import {Sprint} from "../models/sprint.model";

@Component({
  selector: 'app-sprints-edit',
  templateUrl: './sprints-edit.component.html'
})
export class SprintsEditComponent implements OnInit {

  sprint: Sprint;

  constructor(private sprintsService: SprintsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.sprint = new Sprint();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];

      if(id) {
        this.sprintsService.getById(id).then(
          (data) => {
            this.sprint = data;
            this.sprint.StartDate = moment(data.StartDate).format('LL');
            this.sprint.EndDate = moment(data.EndDate).format('LL');
          });
      }

      this.initDatePicker();

    });
  }

  editSprint() {
    this.sprintsService.save(this.sprint).then(() => {
      this.router.navigate(['sprints'])
    });
  }


  private initDatePicker() {
    $('#start-date-datetimepicker').datetimepicker({
      format: 'LL'
    }).on("dp.change", function (e) {
      $('#end-date-datetimepicker').data("DateTimePicker").minDate(e.date);
    });

    $('#end-date-datetimepicker').datetimepicker({
      useCurrent: false,
      format: 'LL'
    }).on("dp.change", function (e) {
      $('#start-date-datetimepicker').data("DateTimePicker").maxDate(e.date);
    });
  }
}
