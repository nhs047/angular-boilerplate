


import { BehaviorSubject } from 'rxjs';
import { Injectable, NgModule, OnInit, PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class CommonService {
    public static title: BehaviorSubject<string>;

    constructor() {}

    ngOnInit() { }
  
}
