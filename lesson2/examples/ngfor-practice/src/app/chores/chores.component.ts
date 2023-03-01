import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's chores", tasks: ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'clean bathroom']},
      {title: "Today's chores", tasks: ['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
      {title: "Tomorrow's Chores", tasks: ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"]}
   ]

   constructor() { }

   ngOnInit() {
   }

}
