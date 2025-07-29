////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Client data
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

// Mock client data store
export const fakeClients = {
  records: [] as Client[], // Holds the list of client objects

  // Initialize with sample data
  initialize() {
    const sampleClients: Client[] = [];
    function generateRandomClientData(id: number): Client {
      const industries = [
        'Technology',
        'Healthcare',
        'Finance',
        'Retail',
        'Manufacturing',
        'Education',
        'Real Estate',
        'Consulting'
      ];

      const statuses = ['Active', 'Inactive', 'Pending', 'Lead'];

      return {
        id,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        company: faker.company.name(),
        created_at: faker.date
          .between({ from: '2022-01-01', to: '2023-12-31' })
          .toISOString(),
        avatar_url: `https://i.pravatar.cc/150?img=${id}`,
        industry: faker.helpers.arrayElement(industries),
        status: faker.helpers.arrayElement(statuses),
        updated_at: faker.date.recent().toISOString()
      };
    }

    // Generate remaining records
    for (let i = 1; i <= 20; i++) {
      sampleClients.push(generateRandomClientData(i));
    }

    this.records = sampleClients;
  },

  // Get all clients with optional industry filtering and search
  async getAll({
    industries = [],
    search
  }: {
    industries?: string[];
    search?: string;
  }) {
    let clients = [...this.records];

    // Filter clients based on selected industries
    if (industries.length > 0) {
      clients = clients.filter((client) =>
        industries.includes(client.industry)
      );
    }

    // Search functionality across multiple fields
    if (search) {
      clients = matchSorter(clients, search, {
        keys: ['name', 'email', 'company', 'industry']
      });
    }

    return clients;
  },

  // Get paginated results with optional industry filtering and search
  async getClients({
    page = 1,
    limit = 10,
    industries,
    search
  }: {
    page?: number;
    limit?: number;
    industries?: string;
    search?: string;
  }) {
    await delay(1000);
    const industriesArray = industries ? industries.split('.') : [];
    const allClients = await this.getAll({
      industries: industriesArray,
      search
    });
    const totalClients = allClients.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedClients = allClients.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_clients: totalClients,
      offset,
      limit,
      clients: paginatedClients
    };
  },

  // Get a specific client by its ID
  async getClientById(id: number) {
    await delay(1000); // Simulate a delay

    // Find the client by its ID
    const client = this.records.find((client) => client.id === id);

    if (!client) {
      return {
        success: false,
        message: `Client with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Client with ID ${id} found`,
      client
    };
  }
};

// Initialize sample clients
fakeClients.initialize();
