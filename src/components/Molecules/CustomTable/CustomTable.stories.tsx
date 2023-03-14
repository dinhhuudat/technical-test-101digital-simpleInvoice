import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TColumnTable } from './CustomTable';

import CustomTable from './index';

export default {
  title: 'Molecules/CustomTable',
  component: CustomTable,
} as ComponentMeta<typeof CustomTable>;

const Template: ComponentStory<typeof CustomTable> = args => (
  <CustomTable {...args} />
);

export const Default = Template.bind({});

const columns: TColumnTable[] = [
  {
    name: 'invoiceId',
    label: 'Id',
  },
  {
    name: 'invoiceNumber',
    label: 'Invoice number',
  },
  {
    name: 'currency',
    label: 'Currency',
  },
  {
    name: 'invoiceDate',
    label: 'Invoice date',
  },
  {
    name: 'createdAt',
    label: 'Create date',
  },
  {
    name: 'description',
    label: 'Description',
  },
];

const dataRows = [
  [
    {
      invoiceId: '79b9457c-b5a7-4e5c-bb45-0be9d3797418',
      invoiceNumber: 'INV1652377472736',
      referenceNo: '1652377482061',
      type: 'TAX_INVOICE',
      currency: 'GBP',
      invoiceDate: '2096-05-12',
      createdAt: '2022-05-12T17:44:45.152',
      dueDate: '2021-06-04',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      numberOfDocuments: 1,
      totalTax: 101,
      totalAmount: 991,
      balanceAmount: 991,
      description: '',
      totalPaid: 0,
      invoiceSubTotal: 910,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: 'value',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 110,
      extensions: [],
      version: '1',
      customer: {
        id: 'b605ad26-dd5d-4ea3-a7de-a0b7c5219528',
        firstName: 'Nguyen',
        lastName: 'Dung 2',
        name: 'Dung 2',
        addresses: [],
      },
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 1000,
    },
    {
      invoiceId: 'e4eeccb5-6da0-413a-a42f-6026bcbda6f2',
      invoiceNumber: '0x67fd97dbce5cf620a1c7afb65408ded327d5fbfa',
      referenceNo: 'xzcsczx',
      type: 'TAX_INVOICE',
      currency: 'LBP',
      invoiceDate: '2023-12-25',
      createdAt: '2023-03-12T10:22:22.416',
      dueDate: '2023-03-12',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 28.4,
      totalAmount: 73.4,
      balanceAmount: 73.4,
      description: 'hfg',
      totalPaid: 0,
      invoiceSubTotal: 71,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: '13',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 27,
      extensions: [],
      version: '1',
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 72,
    },
    {
      invoiceId: '10e1d258-915b-4f50-b355-6a575ca268ca',
      invoiceNumber: '0xe26509c4afda52dee4ec347dd6ebebce920c90eb',
      referenceNo: 'xzcsczx',
      type: 'TAX_INVOICE',
      currency: 'LRD',
      invoiceDate: '2023-10-07',
      createdAt: '2023-03-12T11:28:42.924',
      dueDate: '2023-03-13',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 166.15,
      totalAmount: 957.35,
      balanceAmount: 957.35,
      description: 'xcvxcv',
      totalPaid: 0,
      invoiceSubTotal: 791.2,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: '6',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 68.8,
      extensions: [],
      version: '1',
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 860,
    },
    {
      invoiceId: '59affbab-7cb9-4b82-99b9-f781803e7863',
      invoiceNumber: '0xbe193e58a27abdaa6ccfc4f259df124ec8ff3783',
      referenceNo: 'xzcsczx',
      type: 'TAX_INVOICE',
      currency: 'BSD',
      invoiceDate: '2023-09-07',
      createdAt: '2023-03-12T10:47:18.155',
      dueDate: '2023-03-12',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 349.2,
      totalAmount: 799.8,
      balanceAmount: 799.8,
      description: 'tgfdg',
      totalPaid: 0,
      invoiceSubTotal: 465.6,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: '5',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 29.4,
      extensions: [],
      version: '1',
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 480,
    },
    {
      invoiceId: '9ff74cec-c7aa-407f-b9df-2c971f922243',
      invoiceNumber: '0x8a1c06eb27ef39c7ebd6bb6bfe91d9e33e96fd3d',
      referenceNo: '12421',
      type: 'TAX_INVOICE',
      currency: 'BND',
      invoiceDate: '2023-09-01',
      createdAt: '2023-03-12T16:03:16.061',
      dueDate: '2023-03-08',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 2.07,
      totalAmount: -39.65,
      balanceAmount: -39.65,
      description: 'qwrqwt',
      totalPaid: 0,
      invoiceSubTotal: 17.28,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: '8',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 59.72,
      extensions: [],
      version: '1',
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 18,
    },
    {
      invoiceId: 'a841b0b8-7919-4c55-b6bc-f93a67c560d5',
      invoiceNumber: '0xabe94ed420c6de6e11e84c89de9c4fac86f71dde',
      referenceNo: 'xzcsczx',
      type: 'TAX_INVOICE',
      currency: 'MNT',
      invoiceDate: '2023-07-07',
      createdAt: '2023-03-12T11:07:15.581',
      dueDate: '2023-03-13',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 36.85,
      totalAmount: 116.45,
      balanceAmount: 116.45,
      description: '234234',
      totalPaid: 0,
      invoiceSubTotal: 131.6,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: '10',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 60.4,
      extensions: [],
      version: '1',
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 140,
    },
    {
      invoiceId: '9f3f438c-ab52-41b1-bcc2-c46f8e551470',
      invoiceNumber: 'INV26899',
      referenceNo: '#123456',
      type: 'TAX_INVOICE',
      currency: 'USD',
      invoiceDate: '2023-07-03',
      createdAt: '2023-03-12T08:39:49.324',
      dueDate: '2023-12-03',
      status: [
        {
          key: 'Due',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 0,
      totalAmount: 581,
      balanceAmount: 581,
      description: 'Awesome',
      totalPaid: 0,
      invoiceSubTotal: 581,
      customFields: [
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 0,
      extensions: [],
      version: '1',
      customer: {
        id: '0975e9bb-38f7-417f-b338-9d6102617ee0',
        firstName: 'Sincere',
        lastName: 'Borer',
        addresses: [],
      },
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 581,
    },
    {
      invoiceId: 'd52278fe-d4b7-4f7e-80d2-3156be8736e7',
      invoiceNumber: 'Dadas',
      referenceNo: 'Dadas',
      type: 'TAX_INVOICE',
      currency: 'GBP',
      invoiceDate: '2023-06-11',
      createdAt: '2023-03-11T07:47:25.986',
      dueDate: '2021-06-04',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      numberOfDocuments: 1,
      totalTax: 7931,
      totalAmount: 87121,
      balanceAmount: 87121,
      description: 'Assassins',
      totalPaid: 0,
      invoiceSubTotal: 79210,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: 'value',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 8810,
      extensions: [],
      version: '1',
      customer: {
        id: 'b605ad26-dd5d-4ea3-a7de-a0b7c5219528',
        firstName: 'Nguyen',
        lastName: 'Dung 2',
        name: 'Dung 2',
        addresses: [],
      },
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 88000,
    },
    {
      invoiceId: 'efe81041-40f7-46be-89d2-f7638e962115',
      invoiceNumber: 'INV214573161',
      referenceNo: '#',
      type: 'TAX_INVOICE',
      currency: 'GBP',
      invoiceDate: '2023-06-11',
      createdAt: '2023-03-11T07:37:21.981',
      dueDate: '2021-06-04',
      status: [
        {
          key: 'Overdue',
          value: true,
        },
      ],
      subStatus: [],
      numberOfDocuments: 1,
      totalTax: 101,
      totalAmount: 991,
      balanceAmount: 991,
      description: '',
      totalPaid: 0,
      invoiceSubTotal: 910,
      customFields: [
        {
          key: 'invoiceCustomField',
          value: 'value',
        },
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 110,
      extensions: [],
      version: '1',
      customer: {
        id: 'b605ad26-dd5d-4ea3-a7de-a0b7c5219528',
        firstName: 'Nguyen',
        lastName: 'Dung 2',
        name: 'Dung 2',
        addresses: [],
      },
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 1000,
    },
    {
      invoiceId: 'f543e792-b272-45ea-bbf3-1a07f7e22dbb',
      invoiceNumber: 'INV85751',
      referenceNo: '#123456',
      type: 'TAX_INVOICE',
      currency: 'USD',
      invoiceDate: '2023-04-22',
      createdAt: '2023-03-12T01:38:27.873',
      dueDate: '2024-10-16',
      status: [
        {
          key: 'Due',
          value: true,
        },
      ],
      subStatus: [],
      totalTax: 0,
      totalAmount: 760,
      balanceAmount: 760,
      description: 'Awesome',
      totalPaid: 0,
      invoiceSubTotal: 760,
      customFields: [
        {
          key: 'createdBy',
          value: 'd2258c8d-96b2-48e4-9e4f-0316e3f98059',
        },
      ],
      totalDiscount: 0,
      extensions: [],
      version: '1',
      customer: {
        id: '157d0aa8-5c86-4c39-9a07-83fcf44d96b7',
        firstName: 'Joy',
        lastName: 'Weimann',
        addresses: [],
      },
      merchant: {
        id: '6bf32cc4-2dfb-40c6-bd41-a6aea55fd4dc',
      },
      invoiceGrossTotal: 760,
    },
  ],
];

Default.args = { columns, rows: dataRows, page: 1, rowsPerPage: 10 };
