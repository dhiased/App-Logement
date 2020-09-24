import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House1Component } from '../houses/house1/house1.component';
import { NavController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})




export class SearchListComponent implements OnInit {


  constructor(private route: Router, public modalController: ModalController) {
  }
  // goBackToPageTab1() {
  //   this.route.navigate(['tabs/tab1']);
  // }
  // goToMapPage() {
  //   this.route.navigate(['maplist']);
  // }

  async presentModal(item) {
    console.log(item);
    const modal = await this.modalController.create({
      component: House1Component,


      componentProps: {
        house: item,
      }
    });
    return await modal.present();

  }

  goToPageMaplist() {
    this.route.navigate(['maplist']);
  }


  goBackToPageTab1() {
    this.route.navigate(['tabs/tab1']);
  }

  ngOnInit() { }



  houses: any[] = [
    {
      id: 0,
      price: "950",
      rooms: "3",
      surface: "150",
      street: "Borj Louzir",
      imagesUrls: [
        '../assets/s3.jpg'
        , '../assets/house1-pic4.jpg'
        , '../assets/house1-pic5.jpg'
        , '../assets/house1-pic1.jpg'


      ],
      title: 'Spacieux appartement S2',
      ownerFirstName: 'Eya',
      ownerLastName: 'Guesmi',
      owerPic: '../assets/guesmi.jpg',
      description: 'Grand et lumineux appartement situé à Borj Louzir, à 2 min à pied de la Bank BIAT, très bien desservie avec le Taxi. Dispose d\'une kitchenette équipée compacte avec accès à un balcon ensoleillé.La propriété relaxante de 150 m² dispose d\'un salon élégant doté d\'une grande fenêtre, d\'un canapé-lit confortable et de parquet en bois massif.',

      caution: '500',
      payer: '(Payer la facture au fournisseur)',
      electricite: 'Non inclus',
      eau: 'Inclus',
      gaz: 'Pas de gaz',
      carte: '../assets/shit.jpg',

      equipmentsList: [{ name: 'Meublée', pic: '../assets/couch.png' }, { name: 'Cuisine équipée', pic: '../assets/k1.png' }, { name: 'Micro-onde', pic: '../assets/microwave.png' }, { name: 'Lave-linge', pic: '../assets/laundry.png' }, { name: 'Tv', pic: '../assets/tv.png' }, { name: 'Air conditionné', pic: '../assets/climatiseur.png' }, { name: 'Terrasse', pic: '../assets/t1.png' },],
      rules: [{ name: 'Interdiction de fumer', pic: '../assets/nonsmokers.png' }, { name: 'Animaux autorisés', pic: '../assets/pets.png' }]
    },
    {
      id: 1,

      price: "700",
      rooms: "2",
      surface: "100",
      street: "Radès",
      imagesUrls: ['../assets/chambre11.jpg'
        , '../assets/house2-pic1.jpg'
        , '../assets/house2-pic3.jpg'
      ],
      title: 'Appartement haut standing S+3 meublée',
      ownerFirstName: 'Karim',
      ownerLastName: 'Ben amor',
      owerPic: '../assets/karim.jpg',
      description: 'Dans résidence proche des commodités, appartement spacieux et lumineux situé à Radès',

      caution: '300',
      payer: '(Payer la facture au fournisseur)',
      electricite: 'Non inclus',
      eau: 'Non inclus',
      gaz: 'Non inclus',
      carte: '../assets/carteId1.jpg',

      equipmentsList: [{ name: 'Meublée', pic: '../assets/couch.png' }, { name: 'Cuisine équipée', pic: '../assets/k1.png' }, { name: 'Tv', pic: '../assets/tv.png' }, { name: 'Air conditionné', pic: '../assets/climatiseur.png' },],
      rules: [{ name: 'Autorisation de fumer', pic: '../assets/freesmokers.png' }, { name: 'Animaux autorisés', pic: '../assets/pets.png' }]

    },
    {
      id: 2,

      price: "460",
      rooms: "1",
      surface: "80",
      street: "La Soukra",
      imagesUrls: ['../assets/s1.jpg'
        , '../assets/house3-pic1.jpg'
        , '../assets/house3-pic2.jpg'
      ],
      title: 'Location d\'un studio meublé et équipé.',
      ownerFirstName: 'Aymen',
      ownerLastName: 'Nuira',
      owerPic: '../assets/aymen.jpg',
      description: 'Studio indépendant avec cuisine américaine équipée et salle de bain comportant une baignoire. Chambre avec un lit double confortable, armoire, bureau, four électrique, four micro-ondes, plaques chauffantes et machine à laver.Le loyer inclut toutes les charges(eau, électricité, WiFi, etc).',

      caution: '460',
      payer: '',
      electricite: 'Inclus',
      eau: 'Inclus',
      gaz: 'Inclus',
      carte: '../assets/carteId2.jpg',

      equipmentsList: [{ name: 'Meublée', pic: '../assets/couch.png' }, { name: 'Cuisine équipée', pic: '../assets/k1.png' }, { name: 'Micro-onde', pic: '../assets/microwave.png' }, { name: 'Lave-linge', pic: '../assets/laundry.png' }, { name: 'Tv', pic: '../assets/tv.png' }, { name: 'Chauffage', pic: '../assets/hot.png' },],
      rules: [{ name: 'Autorisation de fumer', pic: '../assets/freesmokers.png' }, { name: 'Animaux autorisés', pic: '../assets/pets.png' }]
    },
    {
      id: 3,

      price: "730",
      rooms: "2",
      surface: "110",
      street: "Cité El Khadra",
      imagesUrls: ['../assets/chambre33.jpg'
        , '../assets/house4-pic1.jpg'
        , '../assets/house4-pic2.jpg'
      ],
      title: 'A louer un appartement S+2',
      ownerFirstName: 'Nessim',
      ownerLastName: 'Bayoudh',
      owerPic: '../assets/nessim.jpg',
      description: 'Idéal pour travailleur et étudiants ? Voici un bel appartement. Pour infos merci de me contacter',

      caution: '700',
      payer: '(Payer la facture au fournisseur)',
      electricite: 'Non inclus',
      eau: 'Non inclus',
      gaz: 'Non inclus',
      carte: '../assets/carteId3.jpg',

      equipmentsList: [{ name: 'Meublée', pic: '../assets/couch.png' }, { name: 'Cuisine équipée', pic: '../assets/k1.png' }, { name: 'Tv', pic: '../assets/tv.png' },],
      rules: [{ name: 'Interdiction de fumer', pic: '../assets/nonsmokers.png' }, { name: 'Animaux autorisés', pic: '../assets/pets.png' }]
    },
    {
      id: 4,

      price: "550",
      rooms: "2",
      surface: "100",
      street: "Medina Jedida",

      imagesUrls: ['../assets/s2.jpg',
        '../assets/house5-pic1.jpg'
        , '../assets/house5-pic2.jpg'
      ],
      title: 'Appartement de 2 chambres chic à louer',
      ownerFirstName: 'Amine',
      ownerLastName: 'Mili',
      owerPic: '../assets/amine.jpg',
      description: 'Un appartement de 2 chambres lumineux et joliment décoré dans un quartier calme',

      caution: '550',
      payer: '(Payer la facture au fournisseur)',
      electricite: 'Non inclus',
      eau: 'Non Inclus',
      gaz: 'Non Inclus',
      carte: '../assets/carteId4.jpg',

      equipmentsList: [{ name: 'Meublée', pic: '../assets/couch.png' }, { name: 'Cuisine équipée', pic: '../assets/k1.png' }, { name: 'Tv', pic: '../assets/tv.png' }, { name: 'Air conditionné', pic: '../assets/climatiseur.png' }, { name: 'Balcon', pic: '../assets/window.png' },],
      rules: [{ name: 'Interdiction de fumer', pic: '../assets/nonsmokers.png' }, { name: 'Animaux autorisés', pic: '../assets/pets.png' }]

    },




  ];



}
