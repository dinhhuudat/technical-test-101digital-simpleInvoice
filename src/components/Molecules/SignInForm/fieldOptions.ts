import { TextFieldProps } from '@mui/material';
import { z } from 'zod';
type TTextfields = 'email' | 'password';

type TSignUpTextfieldOptions = {
  [key in TTextfields]: TextFieldProps & { type: 'textfield' | 'password' };
};

type TFieldOptions = TSignUpTextfieldOptions;

export const schemaForm = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export const fieldOptions: TFieldOptions = {
  email: { type: 'textfield', label: 'Email Address *' },
  password: { type: 'password', label: 'Password *' },
};
