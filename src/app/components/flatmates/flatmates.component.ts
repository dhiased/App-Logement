import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flatmates',
  templateUrl: './flatmates.component.html',
  styleUrls: ['./flatmates.component.scss'],
})
export class FlatmatesComponent implements OnInit {

  constructor(private route: Router) {
  }
  goBackToPageTab1() {
    this.route.navigate(['tabs/tab1']);
  }


  ngOnInit() { }

  picsFlatmates = [
    {
      imageUrl: '../assets/chambre3.jpg'
    },
    {
      imageUrl: '../assets/pro.jpg'
    },
    {
      imageUrl: '../assets/student2.jpg'
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
    },
    {
      imageUrl: '../assets/student2.jpg',
      name: "Amira Othman",
      status: "Etudiante",
      text: "Je cherche un studio",
      place: "La Soukra",
      budget: "380",
    }
  ];
}
