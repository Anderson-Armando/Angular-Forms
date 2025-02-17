import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


export class CustomValidator {
    static contemEspacos(control: AbstractControl){
        if(!control.value){
            return null;
        }

        let resultado = control.value.indexOf(' ') !== -1;

        if(resultado){
            control.setErrors({ contemEspacos: true });
            return { contemEspacos: true };
        } else {
            control.setErrors(null);
            return null;
        }
    };

    static mesmasSenhas(senha: string, confirmarSenha: string){
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const senhaControl = formGroup.get(senha);
            const confirmarSenhaControl = formGroup.get(confirmarSenha);

            if(!senhaControl || !confirmarSenhaControl){
                return null;
            }

            if (senhaControl.value !== confirmarSenhaControl.value){
                confirmarSenhaControl.setErrors({ senhasDiferentes: true });
                return { senhasDiferentes: true };
            } else {
                confirmarSenhaControl.setErrors(null);
                return null;
            }
        }
    };
}
