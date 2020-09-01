import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  constructor(
  ) { }

  @ViewChild('whiteButton', { static: true }) whiteButton: ElementRef<HTMLInputElement>;
  @ViewChild('blackButton', { static: true }) blackButton: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.blackButton.nativeElement.checked = true;
    this.changeTheme();
  }

  changeTheme() {

    if (this.whiteButton.nativeElement.checked) {
      document.body.classList.remove('dark');
      document.body.classList.add('white');
    }

    if (this.blackButton.nativeElement.checked) {
      document.body.classList.remove('white');
      document.body.classList.add('dark');
    }
  }






}
