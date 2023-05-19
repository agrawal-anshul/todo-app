import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoAppServiceService {

  constructor() { }

  getTodos():Task[]{
    return [
      {
        'id':0,
        'task':'Make to do list'
      },
      {
        'id':1,
        'task':'Check off the first thing'
      },
      {
        'id':2,
        'task':'Ralise you have already accomplished 2 things.🥹'
      },
      {
        'id':3,
        'task':'Reward yourself with a nap / Panic.😂'
      },
    ]
  }
}
