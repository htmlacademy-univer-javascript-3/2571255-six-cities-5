import {monthNames} from '../constants/month-names.ts';

export function ConvertDate(stringDate: string): string{
  const date = new Date(stringDate);

  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}
