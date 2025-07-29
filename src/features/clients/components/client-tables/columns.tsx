'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Client } from '@/constants/mock-api';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Building2, Mail, Phone, Text } from 'lucide-react';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { INDUSTRY_OPTIONS, STATUS_OPTIONS } from './options';

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'avatar_url',
    header: 'AVATAR',
    cell: ({ row }) => {
      return (
        <div className='relative h-10 w-10'>
          <Image
            src={row.getValue('avatar_url')}
            alt={row.getValue('name')}
            fill
            className='rounded-full object-cover'
          />
        </div>
      );
    }
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }: { column: Column<Client, unknown> }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ cell }) => (
      <div className='font-medium'>{cell.getValue<Client['name']>()}</div>
    ),
    meta: {
      label: 'Name',
      placeholder: 'Search clients...',
      variant: 'text',
      icon: Text
    },
    enableColumnFilter: true
  },
  {
    id: 'email',
    accessorKey: 'email',
    header: ({ column }: { column: Column<Client, unknown> }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
    cell: ({ cell }) => (
      <div className='flex items-center gap-2'>
        <Mail className='text-muted-foreground h-4 w-4' />
        <span className='text-sm'>{cell.getValue<Client['email']>()}</span>
      </div>
    ),
    meta: {
      label: 'Email',
      placeholder: 'Search by email...',
      variant: 'text',
      icon: Mail
    },
    enableColumnFilter: true
  },
  {
    id: 'phone',
    accessorKey: 'phone',
    header: 'PHONE',
    cell: ({ cell }) => (
      <div className='flex items-center gap-2'>
        <Phone className='text-muted-foreground h-4 w-4' />
        <span className='text-sm'>{cell.getValue<Client['phone']>()}</span>
      </div>
    )
  },
  {
    id: 'company',
    accessorKey: 'company',
    header: ({ column }: { column: Column<Client, unknown> }) => (
      <DataTableColumnHeader column={column} title='Company' />
    ),
    cell: ({ cell }) => (
      <div className='flex items-center gap-2'>
        <Building2 className='text-muted-foreground h-4 w-4' />
        <span>{cell.getValue<Client['company']>()}</span>
      </div>
    ),
    meta: {
      label: 'Company',
      placeholder: 'Search by company...',
      variant: 'text',
      icon: Building2
    },
    enableColumnFilter: true
  },
  {
    id: 'industry',
    accessorKey: 'industry',
    header: ({ column }: { column: Column<Client, unknown> }) => (
      <DataTableColumnHeader column={column} title='Industry' />
    ),
    cell: ({ cell }) => {
      const industry = cell.getValue<Client['industry']>();
      return (
        <Badge variant='secondary' className='capitalize'>
          {industry}
        </Badge>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: 'Industries',
      variant: 'multiSelect',
      options: INDUSTRY_OPTIONS
    }
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: ({ column }: { column: Column<Client, unknown> }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ cell }) => {
      const status = cell.getValue<Client['status']>();
      const variant =
        status === 'Active'
          ? 'default'
          : status === 'Inactive'
            ? 'secondary'
            : status === 'Pending'
              ? 'outline'
              : 'destructive';

      return (
        <Badge variant={variant} className='capitalize'>
          {status}
        </Badge>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: 'Status',
      variant: 'multiSelect',
      options: STATUS_OPTIONS
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
