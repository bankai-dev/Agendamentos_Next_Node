"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

interface Appointment {
  id: number;
  horario: string;
  status: 'reservado' | 'disponivel';
  tipoCorte: string;
  preco: number;
}

export default function Agendamentos() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filterDate, setFilterDate] = useState<string>('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      // Fetch appointments from the backend
      fetch('/api/appointments')
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [isAuthenticated, router]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterDate(e.target.value);
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.horario.includes(filterDate)
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Agendamentos</h2>
      <div className="mb-4">
        <label htmlFor="filterDate" className="block text-sm font-medium text-gray-700">
          Filtrar por Data
        </label>
        <input
          type="text"
          id="filterDate"
          value={filterDate}
          onChange={handleFilterChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <ul>
        {filteredAppointments.map(appointment => (
          <li key={appointment.id} className="mb-4 p-4 border rounded shadow">
            <p><strong>Horário:</strong> {appointment.horario}</p>
            <p><strong>Status:</strong> {appointment.status}</p>
            <p><strong>Tipo do Corte:</strong> {appointment.tipoCorte}</p>
            <p><strong>Preço:</strong> R$ {appointment.preco.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
