import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { User } from "../../models/user.model";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  public buttonDisabled: boolean;
  public authenticate: object = {
    status: true,
    message: null
  };
  formErrors = {
    email: "",
    password: ""
  };
  validationMessages = {
    email: {
      required: "Please enter your email",
      email: "please enter your vaild email"
    },
    password: {
      required: "please enter your password",
      pattern: "The password must contain numbers and letters",
      minlength: "Please enter more than 4 characters",
      maxlength: "Please enter less than 25 characters"
    }
  };

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.buttonDisabled = false;
  }

  buildForm() {
    this.userForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }
  public async login() {
    this.buttonDisabled = true;
    const user: User = new User();
    user.email = this.userForm.value.email;
    user.password = this.userForm.value.password;
    const promise = new Promise((resolve, reject) => {
      resolve(this.authService.authenticate(user));
    });
    promise.then(response => {
      this.authenticate = {
        status: false,
        message: "Sua autenticação falhou, email ou senha inválido!"
      };
      console.log(response);
      return (this.buttonDisabled = false);
    });
    promise.catch(err => {
      console.log(err);
    });
    //const response = await this.authService.authenticate(user);
  }
}
