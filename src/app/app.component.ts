import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  reactiveForm: FormGroup ;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup( {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('male'),
      course: new FormControl('java'),
      address: new FormGroup( {
        city: new FormControl(''),
        country: new FormControl('', Validators.required)
      }),
      skills : new FormArray( [
          new FormControl('', Validators.required),
        ]),
      experience: new FormArray([

      ])

    })
  }


  submitForm(): void {
    if(this.reactiveForm.valid) {
      console.log(this.reactiveForm.value.address.city)
    }

    console.log(this.reactiveForm)
  }

  addSkills() : void {
    (<FormArray> this.reactiveForm.get('skills')).push(new FormControl(''))
  }

  removeSkill(index: number): void {
    (<FormArray> this.reactiveForm.get('skills')).removeAt(index)
  }


  addExperience(): void {
    const formGroup =   new FormGroup({
      companyName: new FormControl(''),
      position: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    });

    (<FormArray> this.reactiveForm.get('experience')).push(formGroup);
  }

  deleteExperience(index: number): void {
    const formArray = <FormArray>this.reactiveForm.get('experience');
    formArray.removeAt(index);
  }


}
