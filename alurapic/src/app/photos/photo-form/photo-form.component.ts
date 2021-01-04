import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm : FormGroup;
  file: File;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['',Validators.required],
      description: ['',Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    // const dados = this.photoForm.getRawValue();
    // console.log(dados);
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    // console.log(description);
    // console.log(allowComments);
    // console.log(this.file);
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']))

  }
}
