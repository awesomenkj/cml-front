import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss']
})
export class RequestsListComponent implements OnInit {

  public requests;
  public loaded = false;

  public constructor(private requestService: RequestService) { }

  public ngOnInit() {
    this.requestService.requests.subscribe((requests) => {
      this.requests = [];
      requests.forEach((request) => {
        const data = request.payload.doc.data();
        const id = request.payload.doc.id;
        const object = { id, ...data};
        this.requests.push(object);
      });
      // this.requests = requests
      this.loaded = true;
    });
  }

  public retryRequest = (requestId) => {
    this.requestService.retryRequest(requestId);
  }

}
