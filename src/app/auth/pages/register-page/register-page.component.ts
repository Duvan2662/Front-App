import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  private fb          = inject( FormBuilder );
  private authService = inject(AuthService);
  private router      = inject(Router)

  public myForm: FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    name:['',[Validators.required,]],
    password:['',[Validators.required, Validators.minLength(6)]],
  });


  public register = () => {
    // console.log( this.myForm.value );
    const {email, name, password} = this.myForm.value
    this.authService.register(email,name,password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })

  }

}
