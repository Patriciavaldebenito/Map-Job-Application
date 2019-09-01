import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var snippet = [].slice.call(document.querySelectorAll('.hover'));
    if (snippet.length) {
      snippet.forEach(function (snippet) {
        snippet.addEventListener('mouseout', function (event) {
          if (event.target.parentNode.tagName === 'figure') {
            event.target.parentNode.classList.remove('hover')
          } else {
            event.target.parentNode.classList.remove('hover')
          }
        });
      });
    }
    /* Demo purposes only */
   /* $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );*/
  }

}
