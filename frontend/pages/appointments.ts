// pages/api/appointments.ts

import { NextApiRequest, NextApiResponse } from 'next';

const appointments = [
  { id: 1, horario: '2024-06-14 10:00', status: 'reservado', tipoCorte: 'Corte Masculino', preco: 50.00 },
  { id: 2, horario: '2024-06-14 11:00', status: 'disponivel', tipoCorte: 'Corte Feminino', preco: 70.00 },
  
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(appointments);
}
