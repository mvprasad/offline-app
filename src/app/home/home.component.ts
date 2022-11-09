import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DexieService } from '../dexie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList = [];
  searchUserName = '';
  constructor(private dexieService: DexieService, private router: Router) { }

  ngOnInit() {
    this.dexieService.getUsers().then((response) => {
      this.userList = response;
    });
  }
  gotoAddUser() {
    this.router.navigateByUrl('/register');
  }
  gotoEditUser(id) {
    this.router.navigateByUrl('/edit/'+id);
  }
  searchUser(user) {
    this.dexieService.searchUser(user).then((resp) => {
      this.userList = resp;
    })
  }
  bulkAdd() {
    this.dexieService.bulkAddUsers().then((resp) => {
      alert('Buld users add success')
    });
  }
}
