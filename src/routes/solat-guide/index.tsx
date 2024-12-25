import { Card } from '@/components/ui/card';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/solat-guide/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='p-2 grid grid-cols-3 gap-4'>
      <div className='col-span-1 col-start-3'>
        <Card className='h-[20dvh]'>Rakaat Counter</Card>
      </div>
      <div className='col-span-3'>
        <Card className='h-[32dvh]'></Card>
      </div>
      <div className='col-span-3'>
        <Card className='h-[32dvh]'>Surah Section</Card>
      </div>
    </div>
  );
}
