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
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className='h-12 border-r'></TableHead>
            <TableHead className='h-12 text-center' colSpan={2}>
              Student
            </TableHead>
            <TableHead className='h-12 text-center' colSpan={2}>
              Professional
            </TableHead>
          </TableRow>
          <TableRow className='border'>
            <TableHead className='h-12 border-r text-center'>
              International
            </TableHead>
            <TableHead className='h-12 border-r text-center'>Local</TableHead>
            <TableHead className='h-12 border-r text-center'>
              International
            </TableHead>
            <TableHead className='text-center border-r h-12'>Local</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='border-r font-medium'>{row.type}</TableCell>
              <TableCell className='border-r text-center'>
                {row.student.international}
              </TableCell>
              <TableCell className='border-r text-center'>
                {row.student.local}
              </TableCell>
              <TableCell className='border-r text-center'>
                {row.professional.international}
              </TableCell>
              <TableCell className='border-r text-center'>
                {row.professional.local}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
