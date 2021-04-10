import { PatientAction, Patient } from '../interface';

export const addPatient = (patient: Patient): PatientAction => ({
  type: 'ADD',
  payload: patient,
});

export const deletePatient = (socialSecNum: string): PatientAction => ({
  type: 'DELETE',
  payload: socialSecNum,
});
