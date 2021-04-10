import React, { useReducer } from 'react';
import { PatientAction, PatientState, PatientContextModel } from '../interface';
import patients from '../data/patients.json';

const initialState: PatientState = {
  patients: patients,
};

const patientReducer = (
  state: PatientState,
  action: PatientAction
): PatientState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    case 'DELETE':
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.socialSecNum !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const PatientContext = React.createContext({} as PatientContextModel);

export const PatientProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(patientReducer, initialState);
  return (
    <PatientContext.Provider value={{ state, dispatch }}>
      {children}
    </PatientContext.Provider>
  );
};
