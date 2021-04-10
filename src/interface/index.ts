import React from 'react';

export interface Patient {
  socialSecNum: string; // may start with 0 -> string
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface PatientState {
  patients: Patient[];
}

// using type to make use of discriminating unions
export type PatientAction =
  | { type: 'ADD'; payload: Patient }
  | { type: 'DELETE'; payload: string };

export interface PatientContextModel {
  state: PatientState;
  dispatch: React.Dispatch<PatientAction>;
}
