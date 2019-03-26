import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, CONTACTTYPE } from '../Domains/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = CONTACTTYPE;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.formBuilder.group({
      firstname: ['', Validators.required, Validators],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
