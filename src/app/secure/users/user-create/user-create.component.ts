import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  form!: FormGroup;
  roles: Role[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleService,  
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      role_id: '',
    });

    this.roleService.all().subscribe((res: any): any => {
      this.roles = res.data;
    });
  }
}
