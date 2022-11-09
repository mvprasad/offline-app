import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user = {
    username: '',
    phone_number: '',
    email: '',
    gender: ''
  }
  constructor(private route: ActivatedRoute, private dexieService:DexieService) { }

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dexieService.getUserById(id).then((user) => {
      this.user = user[0];
      console.log(this.user);
    });
    
  }
  update() {
    this.dexieService.updateUser(this.user).then((response) => {
      alert('Success');
    })
  }
}
