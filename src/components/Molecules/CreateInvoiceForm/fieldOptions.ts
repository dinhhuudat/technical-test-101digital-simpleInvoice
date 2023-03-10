import { DatePicker } from '@mui/x-date-pickers';
import { z } from "zod";
import { TRHFCustomTextFieldProps } from '../../Atoms/CustomTextField/CustomTextField';
import { mockDataItems } from './mockData';
type TTextfields = 'currency'  | 'description' | 'item'
type TDateTime = 'invoiceDate'  | 'dueDate'

type TFieldOptions = {
   [key in TTextfields]: TRHFCustomTextFieldProps & { type: 'textfield' }
} & {
   [key in TDateTime]:React.ComponentProps<typeof DatePicker> & {type:'datetime'}
}
  
export  const schemaForm = z.object({
   currency:z.string() ,
   description:z.string().min(1),
   invoiceDate:z.coerce.date(),
   dueDate: z.coerce.date(),
   item: z.string(),
 });

const currencyOptions =[{value:'GBP',label:'GBP'},{value:'VND',label:'VND'}]
const itemOptions =[{value:'item1',label:mockDataItems[0].itemName},{value:'item2',label:mockDataItems[1].itemName} ]

export const fieldOptions: TFieldOptions = {
   currency: { type: 'textfield',label: 'Currency',options:currencyOptions,select:true }, 
   invoiceDate:{type:'datetime',label:'Invoice date'},
   dueDate:{type:'datetime',label:'Due date'},
   description: { type: 'textfield',label: 'description',multiline:true,rows: 4 }, 
   item: { type: 'textfield',label: 'item',options:itemOptions,select:true}, 
}
