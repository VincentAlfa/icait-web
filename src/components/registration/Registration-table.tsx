import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type RegistrationTableProps = {
  data: {
    type: string;
    student: {
      international: string;
      local: string;
    };
    professional: {
      international: string;
      local: string;
    };
  }[];
};

export function RegistrationTable({ data }: RegistrationTableProps) {
  return (
    <div className='rounded-md border border-gray-300 mt-2'>
      <Table>
        <TableHeader>
          <TableRow className='border-b border-gray-300'>
            <TableHead
              rowSpan={2}
              className='h-12 border-r border-gray-300'
            ></TableHead>
            <TableHead className='h-12 text-center' colSpan={2}>
              Student
            </TableHead>
            <TableHead className='h-12 text-center' colSpan={2}>
              Professional
            </TableHead>
          </TableRow>
          <TableRow className='border-b border-gray-300'>
            <TableHead className='h-12 border-r border-gray-300 text-center'>
              International
            </TableHead>
            <TableHead className='h-12 border-r border-gray-300 text-center'>
              Local
            </TableHead>
            <TableHead className='h-12 border-r border-gray-300 text-center'>
              International
            </TableHead>
            <TableHead className='h-12 text-center'>Local</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='border-r border-gray-300 font-medium'>
                {row.type}
              </TableCell>
              <TableCell className='border-r border-gray-300 text-center'>
                {row.student.international}
              </TableCell>
              <TableCell className='border-r border-gray-300 text-center'>
                {row.student.local}
              </TableCell>
              <TableCell className='border-r border-gray-300 text-center'>
                {row.professional.international}
              </TableCell>
              <TableCell className='text-center'>
                {row.professional.local}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
