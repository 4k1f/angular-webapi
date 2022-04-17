import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  admin = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: triple-equals
    if (localStorage.getItem('yetki') == 'A') {
      this.admin = true;
    }
    else {
      this.admin = false;
    }
  }

  CikisYap() {
    localStorage.removeItem('uid');
    localStorage.removeItem('yetki');
    this.router.navigate(['']);
  }

}
