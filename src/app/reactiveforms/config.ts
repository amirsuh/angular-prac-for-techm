export const sampleForm = {
  formHeading: 'Sample form',
  submitBtnTxt: 'Register',
  resetBtnTxt: 'Reset',

  formControls: [
    {
    name: 'firstName',
    label: 'First Name',
    value: '',
    palceholder: 'Enter name',
    class: 'col-md-4',
    type: 'text',
      validators: [
        { validationName: 'required', required: true, message: 'this field is required' },
        { validationName: 'minlength', minLength: 5, message: 'Minimun length shoul be 5' },
      ],
    },
    {
      name: 'lastName',
      label: 'Last Name',
      value: '',
      class: 'col-md-4',
      type: 'text',
      validators: [
        { validationName: 'required', required: true, message: 'this field is required' },
        { validationName: 'maxlength', maxLength: 5, message: 'Maxlength 5' },
      ],
    },
    {
      name: 'email',
      label: 'Email',
      value: '',
      class: 'col-md-4',
      type: 'text',
      validators: [
        { validationName: 'required', required: true, message: 'this field is required' },
        { validationName: 'email', email: 'email', message: 'email should be formateed' },
      ],
    },
  ],
};
