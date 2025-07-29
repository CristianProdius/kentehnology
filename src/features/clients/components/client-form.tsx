'use client';

import { FileUploader } from '@/components/file-uploader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Client } from '@/constants/mock-api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const formSchema = z.object({
  avatar: z
    .any()
    .refine((files) => files?.length == 1, 'Avatar is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  name: z.string().min(2, {
    message: 'Client name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.'
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.'
  }),
  industry: z.string({
    required_error: 'Please select an industry.'
  }),
  status: z.string({
    required_error: 'Please select a status.'
  })
});

export default function ClientForm({
  initialData,
  pageTitle
}: {
  initialData: Client | null;
  pageTitle: string;
}) {
  const defaultValues = {
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    company: initialData?.company || '',
    industry: initialData?.industry || '',
    status: initialData?.status || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Form submission logic would be implemented here
    console.log(values);
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='avatar'
              render={({ field }) => (
                <div className='space-y-6'>
                  <FormItem className='w-full'>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFiles={1}
                        maxSize={4 * 1024 * 1024}
                        // disabled={loading}
                        // progresses={progresses}
                        // pass the onUpload function here for direct upload
                        // onUpload={uploadFiles}
                        // disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter client name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='client@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type='tel'
                        placeholder='+1 (555) 123-4567'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='company'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter company name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='industry'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select industry' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Technology'>Technology</SelectItem>
                        <SelectItem value='Healthcare'>Healthcare</SelectItem>
                        <SelectItem value='Finance'>Finance</SelectItem>
                        <SelectItem value='Retail'>Retail</SelectItem>
                        <SelectItem value='Manufacturing'>
                          Manufacturing
                        </SelectItem>
                        <SelectItem value='Education'>Education</SelectItem>
                        <SelectItem value='Real Estate'>Real Estate</SelectItem>
                        <SelectItem value='Consulting'>Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select status' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Active'>Active</SelectItem>
                        <SelectItem value='Inactive'>Inactive</SelectItem>
                        <SelectItem value='Pending'>Pending</SelectItem>
                        <SelectItem value='Lead'>Lead</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit'>
              {initialData ? 'Update Client' : 'Add Client'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
