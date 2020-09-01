import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';
import { JokeItem } from '../shared/joke-item.interface';
import { Joke } from '../shared/joke.interface';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.sass']
})
export class JokePageComponent implements OnInit {

  constructor(
    private jokeService: JokeService
  ) { }

  jokeList: Joke;
  viewJokes: Array<JokeItem>;
  searchList: Array<JokeItem> = [];


  ngOnInit(): void {
    this.jokeService.getJoke().subscribe(
      (e: Joke) => {
        this.jokeList = e;
        this.viewJokes = this.getJokes(10);
        console.log(e);
      },
      error => console.error(error)
    );
  }


  private getJokes(jokeLength: number): Array<JokeItem> {
    const jokes = this.jokeList.value.slice();
    jokes.length = jokeLength;
    return jokes;
  }


  public cropJoke(value: string) {
    return value.slice(0, 20) + '...';
  }


  public search(value: string) {
    this.searchList = this.jokeList.value.filter(item => {
      return item.joke.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase());
    });
    if (!value.length) {
      this.searchList = [];
    }
  }



}
