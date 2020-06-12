import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ionic-speaking',
  templateUrl: './ionic-speaking.page.html',
  styleUrls: ['./ionic-speaking.page.scss'],
})
export class IonicSpeakingPage implements OnInit {

  constructor(
    public TTS: TextToSpeech,
    public platform: Platform,
    public alertController: AlertController,
  ) { 
    if(this.platform.is('mobileweb') || this.platform.is('desktop')) {
      this.buttonPlacement = "end";
    }
  }

  ngOnInit() {
  }
  buttonPlacement: string = "start";
  textSentence: string
  locale: string
  range: number = .01

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Not Available!',
      subHeader: 'Download Ionic 4 Demo',
      message: 'Download the app from Google Play Store for the full features!',
      buttons: ['OK']
    });

    await alert.present();
  }

  speak() {
    this.TTS.speak({
      text: this.textSentence,
      locale: this.locale,
      rate: this.range
  })
    .then(() => console.log('Success'))
    .catch((reason: any) => {
      console.log("error", reason)
      this.presentAlert();
    }
    );
  }
}
