import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Uye } from 'src/app/Models/Uye';
import { EvKiralamaServisService } from 'src/app/Services/EvKiralamaServis.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Giris',
  templateUrl: './Giris.component.html',
  styleUrls: ['./Giris.component.scss']
})
export class GirisComponent implements OnInit {
  girisuye: Uye;

  constructor(
    public service: EvKiralamaServisService,
    public router: Router
  ) {

  }



  ngOnInit() {
  }


  girisYap(email, sifre) {

      if ( email === 'akif@gmail.com'){

        if (sifre === '1234'){
          this.router.navigate(['']);
        }

      }




  }

}
