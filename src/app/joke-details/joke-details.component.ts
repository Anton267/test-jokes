import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from '../shared/joke.service';
import { Subscription } from 'rxjs';

interface Joke {
  type: string;
  value: {
    categories: string[],
    id: number,
    joke: string
  };
}

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.sass']
})
export class JokeDetailsComponent implements OnDestroy {

  constructor(
    route: ActivatedRoute,
    jokeService: JokeService
  ) {
    this.routeSub = route.paramMap.subscribe(
      e => {
        jokeService.getJokeById(e.get('id'))
          .subscribe((joke: Joke) => {
            this.joke = joke.value.joke;
            console.log(joke);
          },
            error => {
              console.error(error);
            });
      }
    );
  }


  public joke: string;
  private routeSub: Subscription;


  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
