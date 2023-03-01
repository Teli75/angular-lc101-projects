import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   // , 'Complete LaunchCode prep work', 'Buy groceries'
   finishedChores = ['cleaned room', 'washed dishes', 'made bed', 'prepped lunch'];
   // , 'cleared desk', 'swept floor', 'unclogged drain',
   targetImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw0gLMmh0TvW3ZviY0xd8zcJ&ust=1677727669117000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMCLud_kuf0CFQAAAAAdAAAAABAI';

   constructor() { }

   ngOnInit() {
   }

}
