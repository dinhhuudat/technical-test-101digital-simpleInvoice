import { TRHFCustomTextFieldProps } from '../../Atoms/CustomTextField/CustomTextField';
type TTextfields = 'keyword';

type TSignUpTextfieldOptions = {
  [key in TTextfields]: TRHFCustomTextFieldProps & { type: 'textfield' };
};

type TFieldOptions = TSignUpTextfieldOptions;

export const fieldOptions: TFieldOptions = {
  keyword: { type: 'textfield', label: 'Keyword *' },
};
