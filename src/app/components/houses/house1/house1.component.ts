import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-house1',
  templateUrl: './house1.component.html',
  styleUrls: ['./house1.component.scss'],
})
export class House1Component implements OnInit {

  house;


  constructor(private route: Router, private modalCtrl: ModalController) {
    modalCtrl.dismiss();
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }


  goBackToPageSearchlist() {
    this.route.navigate(['searchlist']);
  }


  ngOnInit() {
    console.log(`${this.house}`)
  }



}
