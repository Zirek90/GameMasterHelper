import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-bar',
  templateUrl: './sound-bar.component.html',
  styleUrls: ['./sound-bar.component.scss']
})
export class SoundBarComponent implements OnInit {

  audioStreet:any;
  audioForrest:any;
  audioRiver:any;
  audioFight:any;
  
  constructor() {

    //street
    this.audioStreet = new Audio();
    this.audioStreet.src = './assets/sounds/street.mp3';
    this.audioStreet.load();

    //forrest
    this.audioForrest = new Audio();
    this.audioForrest.src = './assets/sounds/forrest.mp3';
    this.audioForrest.load();

    //river
    this.audioRiver = new Audio();
    this.audioRiver.src = './assets/sounds/river.mp3';
    this.audioRiver.load();


    //fight
    this.audioFight = new Audio();
    this.audioFight.src = './assets/sounds/fight.mp3';
    this.audioFight.load();
   }

  ngOnInit() {
  }

  startStreet() {
    this.audioStreet.play();
    this.audioStreet.loop = true;
  }
  stopStreet() {
    this.audioStreet.pause();
    this.audioStreet.currentTime = 0;
  }
  startForrest() {
    this.audioForrest.play();
    this.audioForrest.loop = true;

  }
  stopForrest() {
    this.audioForrest.pause();
    this.audioForrest.currentTime = 0;
  }
  startRiver() {
    this.audioRiver.play();
    this.audioRiver.loop = true;

  }
  stopRiver() {
    this.audioRiver.pause();
    this.audioRiver.currentTime = 0;
  }
  startFight() {
    this.audioFight.play();
    this.audioFight.loop = true;

  }
  stopFight() {
    this.audioFight.pause();
    this.audioFight.currentTime = 0;
  }

}
