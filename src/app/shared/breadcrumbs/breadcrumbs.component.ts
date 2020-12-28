import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string;
  public titleSub$: Subscription;

  constructor( private router:Router) {
    this.titleSub$ = this.loadPathArguments()
      .subscribe( ({title}) => {
      this.title = title;
      document.title = `SimplePOA - ${title}`;
     });
  }
  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  loadPathArguments(){
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }
}
