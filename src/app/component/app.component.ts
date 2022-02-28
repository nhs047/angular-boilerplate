import { Subject } from 'rxjs/internal/Subject';
import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { filter, map, mergeMap, takeUntil } from "rxjs/operators";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Translate } from '../shared/pipes/language-parser.pipe';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  _unsubscribe: Subject<any>;
  title: string = "";

  constructor(
      private activatedRoute: ActivatedRoute, 
      private router: Router, 
      private translate: Translate, 
      private observer: BreakpointObserver,
      private cdr: ChangeDetectorRef
    ) {
        this._unsubscribe = new Subject();
    }

  ngOnInit() {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      mergeMap((route) => route.data),
      map((data) => {
          return data.breadcrumb;
      }),
      takeUntil(this._unsubscribe)
    )
    .subscribe((pathString) => {
      this.title = this.translate.transform(pathString);
    });
   }

   ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdr.detectChanges();
  }

  redirect(redirectUrl: string) {
    this.router.navigateByUrl(redirectUrl);
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
