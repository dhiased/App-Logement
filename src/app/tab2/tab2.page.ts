import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectTabs = 'chambreSegment';

  constructor() { }


  /*
    pics = [
      {
        imageUrl: '../assets/chambre11.jpg'
      },
      {
        imageUrl: '../assets/chambre33.jpg'
      }
  
  
    ];
  */
  picsFlatmates = [
    {
      imageUrl: '../assets/chambre3.jpg'
    },
    {
      imageUrl: '../assets/pro.jpg'
    }

  ];

  houses: any[] = [
    {
      imageUrl: '../assets/chambre11.jpg',
      price: "650",
      rooms: "1",
      surface: "90",
      street: "Radès"
    },
    {
      imageUrl: '../assets/chambre33.jpg',
      price: "730",
      rooms: "2",
      surface: "80",
      street: "Cité El Khadra"
    }

  ];


  flatmates: any[] = [
    {
      imageUrl: '../assets/student1.jpg',
      name: "Asma Sfar",
      status: "Etudiante",
      text: "Je cherche une chambre privée",
      place: "Manouba",
      budget: "160",
    },
    {
      imageUrl: '../assets/pro.jpg',
      name: "Chahrazed Hlel",
      status: "Employée",
      text: "Je cherche une chambre pour 2 personnes",
      place: "Tunis",
      budget: "250",
    }
  ];



}
