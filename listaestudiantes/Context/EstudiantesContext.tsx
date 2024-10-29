import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Estudiante } from '../Modelos/Estudiante';

interface EstudiantesContextType {
  estudiantes: Estudiante[];
  setEstudiantes: React.Dispatch<React.SetStateAction<Estudiante[]>>;
}


export const EstudiantesContext = createContext<EstudiantesContextType | undefined>(undefined);

export const EstudiantesProvider = ({ children }: { children: ReactNode }) => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: '1', nombre: 'Juan' },
    { id: '2', nombre: 'María' },
    { id: '3', nombre: 'Carlos' },
    { id: '4', nombre: 'Ana' },
    { id: '5', nombre: 'Jimmy' },
    { id: '6', nombre: 'Lucía' },
    { id: '7', nombre: 'Hillary' },
    { id: '8', nombre: 'Diana' },
    { id: '9', nombre: 'Luis' },
    { id: '10', nombre: 'Sofía' }
  ]);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      const nuevosEstudiantes = [
        { id: '11', nombre: 'Miguel' },
        { id: '12', nombre: 'Laura' },
        { id: '13', nombre: 'Rafael' },
        { id: '14', nombre: 'Valeria' },
        { id: '15', nombre: 'Fernando' },
      ];
      setEstudiantes((prevEstudiantes) => [...prevEstudiantes, ...nuevosEstudiantes]);
    }, 5000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <EstudiantesContext.Provider value={{ estudiantes, setEstudiantes }}>
      {children}
    </EstudiantesContext.Provider>
  );
};
