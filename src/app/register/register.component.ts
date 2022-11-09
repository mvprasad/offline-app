import { Component, OnInit } from '@angular/core';
import { DexieService } from '../dexie.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    id:null,
    uid: null,
    username: '',
    phone_number: '',
    email: '',
    gender: ''
  }
  constructor(private dexieService: DexieService) {

  }

  ngOnInit() {

  }
  save() {
    delete this.user.id;
    this.user.uid = new Date().valueOf();
    this.dexieService.addUser(this.user);
    alert('saved successfully');
  }
  
}
