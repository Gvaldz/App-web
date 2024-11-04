export interface citas {
    idcitas: number;
    iddoctor: number;
    idpaciente: number;
    fecha: string;
    hora: string;
    doctor_nombre?: string; 
    paciente_nombre?: string; 
    doctor_apellido?: string; 
    paciente_apellido?: string; 
}
