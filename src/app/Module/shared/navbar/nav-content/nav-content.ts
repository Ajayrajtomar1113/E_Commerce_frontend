

import { Component, Input , OnChanges } from '@angular/core';
 import { navigation } from './navigation';

@Component({
  selector: 'app-nav-content',
  standalone: false,
  templateUrl: './nav-content.html',
  styleUrls: ['./nav-content.scss'],
})
export class NavContent implements OnChanges {

 @Input() selectedSection:any;

 category:any=navigation;

 ngOnChanges(){
   console.log(this.selectedSection);
 }
}