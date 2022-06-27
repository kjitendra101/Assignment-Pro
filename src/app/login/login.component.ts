import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  
  loginForm: any = FormGroup;
  submitted = false;

  constructor( private router: Router, private formBuilder: FormBuilder) {
    
  }

  get errorLogin() { return this.loginForm.controls; }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      userid: ['', 
        [Validators.required]
      ],
      password: ['', 
        [Validators.required]
      ]
    });
  }

  onSubmit() {  
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    if(this.submitted) {
      // alert("Great!!");
      this.router.navigateByUrl('/immunization-alerts');
    }   
  }

}
