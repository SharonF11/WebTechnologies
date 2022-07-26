import { FormBuilder, FormGroup } from "@angular/forms";
import {  LoginForm } from "./login.form";

//Taken from Paulo Alves Ionic Tutorial #8 and Ionic Framwork 
describe('LoginForm', ()=>{
    let loginForm; LoginForm;
    let form: FormGroup

    beforeEach(() =>{
        

        loginForm = new LoginForm(new FormBuilder());
        form = loginForm.createForm();
    })

    it('creates a login form', ()=>{
       
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("")
        expect(form.get('password').valid).toBeFalsy();
    })

    it('should say email not valid if incorrect format', ()=>{
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();

    })

    it('if email valid returns ok', ()=> {
        form.get('email').setValue('valid@email.com, valid@email.ie')
        expect(form.get('email').valid).toBeTruthy();
    })
    it('have a vaild form', ()=>{
        form.get('email').setValue('valid@email.com');
        form.get('password').setValue('anyPassword');
        expect(form.valid).toBeTruthy();
    })
})