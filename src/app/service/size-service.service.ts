import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeServiceService {

  clientWidth: BehaviorSubject<number> = new BehaviorSubject(0);
  clientHeight: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }
}
