import { Component } from '@angular/core';
import { menJeans } from '../../../../../Data/Men/men_Jeans';
import { gounsPage1 } from '../../../../../Data/gouns/gouns';
import { lengha_page1 } from '../../../../../Data/Women/lehngaCholi';
import { kurtaPage1 } from '../../../../../Data/kurta/kurta';
import { women_Top } from '../../../../../Data/Women/women_top';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: false
})
export class Home {
  menJeans: any;
  womenGouns: any;
  lehngaCholi: any;
  womenSuit: any;
  womenTop: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 4);
    this.womenGouns = gounsPage1.slice(0, 4);
    this.lehngaCholi = lengha_page1.slice(0, 4);
    this.womenSuit = kurtaPage1.slice(0, 4);
    this.womenTop = women_Top.slice(0, 4);
  }
}