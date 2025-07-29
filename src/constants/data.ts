import { NavItem } from '@/types';

export type Client = {
  avatar_url: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string;
  id: number;
  industry: string;
  status: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Clients',
    url: '/dashboard/clients',
    icon: 'clients',
    isActive: false,
    shortcut: ['c', 'l'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Campaigns',
    url: '/dashboard/campaigns',
    icon: 'campaigns',
    shortcut: ['c', 'a'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Lists',
    url: '/dashboard/lists', // Placeholder as there is no direct link for the parent
    icon: 'lists',
    isActive: false,
    shortcut: ['l', 'i'],
    items: []
  },
  {
    title: 'Prompts',
    url: '/dashboard/prompts',
    icon: 'prompts',
    shortcut: ['p', 'r'],
    isActive: false,
    items: [] // No child items
  },

  {
    title: 'Contacts',
    url: '/dashboard/contacts',
    icon: 'contacts',
    shortcut: ['c', 'o'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Companies',
    url: '/dashboard/companies',
    icon: 'companies',
    shortcut: ['c', 'm'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'domains',
    url: '/dashboard/domains',
    icon: 'domains',
    shortcut: ['d', 'o'],
    isActive: false,
    items: [] // No child items
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];
