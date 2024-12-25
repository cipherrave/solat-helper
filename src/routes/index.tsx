import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

const salahTimes = [
  { name: 'Subuh', time: '6:05 am' },
  {
    name: 'Zohor',
    time: '1:05 pm', // Corrected time to PM
  },
  {
    name: 'Asar',
    time: '4:30 pm', // Corrected time to PM
  },
  {
    name: 'Maghrib',
    time: '7:00 pm', // Corrected time to PM
  },
  {
    name: `Isha'`,
    time: '8:00 pm', // Corrected time to PM
  },
];

function HomeComponent() {
  return (
    <div className='p-2 grid grid-cols-1'>
      <div className='col-span-1 h-[50dvh]'>Big Card</div>
      <div className='col-span-1 grid grid-cols-5 gap-2 h-[20dvh]'>
        {salahTimes.map((value, index) => (
          <Card key={index}>
            <CardHeader>{value.name}</CardHeader>
            <CardContent>{value.time}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
