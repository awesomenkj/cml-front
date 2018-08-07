import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public requests: BehaviorSubject<any[]> = new BehaviorSubject([]);

  public constructor(private db: AngularFirestore) {
    this.getRequests().subscribe((requests) => {
      this.requests.next(requests);
    });
  }

  public getRequests = () => {
    return this.db.collection('cml-pool-requests', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.orderBy('createdAt', 'asc');
      return query;
    }).snapshotChanges();
  }

  public getRequestsValues = () => {
    return this.db.collection('cml-pool-requests', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.orderBy('createdAt', 'asc');
      return query;
    }).valueChanges();
  }

  public retryRequest = (requestId) => {
    return this.db.collection('cml-pool-requests').doc(requestId).set({
      status: 0,
      trial: 0,
      updatedAt: new Date().toDateString()
    }, {merge: true});
  }
}
