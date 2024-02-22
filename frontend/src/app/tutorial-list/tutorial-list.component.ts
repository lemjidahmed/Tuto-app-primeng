import {Component, OnInit} from '@angular/core';
import {Tutorial} from "../models/tutorial.model";
import {TutorialService} from "../services/tutorial.service";
interface City {
  name: string,
  code: string
}

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit{
    tutorials:Tutorial[]=[];
    currentTutorial: Tutorial = {};
    currentIndex=-1;
    title='';

    selectedTutorials:string="all";
    ispublished?:boolean;




  cities: City[];
  selectedCity!: City;

  constructor(private tutorialService:TutorialService) {

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }
    ngOnInit() {
      this.retrieveTutorials();
    }
    retrieveTutorials(){
        this.tutorialService.getAll().subscribe({
          next: (data:any) => {
            this.tutorials = data;
            console.log(data);
          },
          error: (e:any) => console.error(e)
        });
    }
    refreshList(): void {
      this.retrieveTutorials();
      this.currentTutorial = {};
      this.currentIndex = -1;
    }
    removeAllTutorials(){
      this.tutorialService.deleteAll().subscribe({
        next: (data:any) => {
          this.refreshList()
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
    }
    setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
    }

  searchTitle() {
    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data:any) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
  }

  getAllTutorialsCount():number{
    if(this.tutorials)
      return this.tutorials.length;
    else
      return 0;
  }

  getPublishedTutorialsCount():number{
    if(this.tutorials)
      return this.tutorials.filter(tutorial=> tutorial.published==true).length;
    else
      return 0;

  }

  getPendingTutorialsCount():number{
    if(this.tutorials)
      return this.tutorials.filter(tutorial=> tutorial.published==false).length;
    else
      return 0;
  }

  changeSelectedTutorials(data:string){
    this.selectedTutorials=data;
    if(this.selectedTutorials== 'published')
    {
      this.ispublished=true;
    }
    else if(this.selectedTutorials=='pending')
    {
      this.ispublished=false;
    }
  }


  get filteredTutorials(): Tutorial[] {
      return this.tutorials.filter(tutorial => tutorial.published === this.ispublished);
  }
}
