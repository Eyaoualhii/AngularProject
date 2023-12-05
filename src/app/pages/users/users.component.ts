import { Component } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
listUsers: User[] = [

{
  id:1,
  username:"flen",
  password:"1345",
  picture:"https://bootdey.com/img/Content/avatar/avatar1.png",
  accountCategory:"Admin"
},
{
  id:2,
  username:"nour",
  password:"1345",
  picture:"https://bootdey.com/img/Content/avatar/avatar8.png",
  accountCategory:"Customer"
},
{
  id:3,
  username:"nourhene",
  password:"13451345",
  picture:"https://bootdey.com/img/Content/avatar/avatar3.png",
  accountCategory:"Customer"
},
{
  id:4,
  username:"eya",
  password:"1345",
  picture:"https://bootdey.com/img/Content/avatar/avatar6.png",
  accountCategory:"Customer"
}

]


deleteUser(user:User){
  if (user.accountCategory !== 'Admin'){
    let index = this.listUsers.indexOf(user);
    this.listUsers.splice(index,1);
  }
}

}
