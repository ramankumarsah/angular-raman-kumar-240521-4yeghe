import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];

  constructor() {}

  ngOnInit() {}

  save(cadidateForm: NgForm) {
    if (cadidateForm.valid) {
      const formValue = cadidateForm.value;
      let candidate = {
        id: this.candidates.length + 1,
        first_name: formValue.first_name,
        last_name: formValue.last_name,
        email: formValue.email,
        gender: formValue.gender
      };
      this.candidates.push(candidate);
      cadidateForm.reset();
    }
  }

  search($event: any) {
    if ($event.target.checked || $event.target.blur) {
      let searchText = $event.target.value;
      this.candidates = this.candidates.filter(e => {
        return e.gender.toLowerCase().includes(searchText.toLowerCase());
      });
    }
  }
}
