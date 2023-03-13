import { TRHFCustomTextFieldProps } from '../../Atoms/CustomTextField/CustomTextField';
type TTextfields = 'keyword' | 'searchType';

type TSignUpTextfieldOptions = {
  [key in TTextfields]: TRHFCustomTextFieldProps & { type: 'textfield' };
};

type TFieldOptions = TSignUpTextfieldOptions;

const itemOptions = [
  { value: 'invoiceId', label: 'Id' },
  { value: 'currency', label: 'Currency' },
];

export const fieldOptions: TFieldOptions = {
  searchType: {
    type: 'textfield',
    label: 'Type',
    options: itemOptions,
    select: true,
    style: { minWidth: 150 },
  },

  keyword: { type: 'textfield', label: 'Keyword *' },
};
