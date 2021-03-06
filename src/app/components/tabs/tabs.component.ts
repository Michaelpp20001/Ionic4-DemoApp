import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Routes } from '@angular/router';
import { IonicSpeakingPage } from '../../ionic-speaking/ionic-speaking.page';
import { PhotoGalleryPage } from '../../photo-gallery/photo-gallery.page';
import { PointsOfInterestPage } from '../../points-of-interest/points-of-interest.page';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

    routes: Routes = [
      {
        path: 'ionic-speaking',
        component: IonicSpeakingPage,
      },
      {
        path: 'photo-gallery',
        component: PhotoGalleryPage,
      },
      {
        path: 'points-of-interest',
        component: PointsOfInterestPage,
      }
    ];

  constructor(
    public authGuard: AuthGuardService
  ) { }

  ngOnInit() {
  }

  

}
