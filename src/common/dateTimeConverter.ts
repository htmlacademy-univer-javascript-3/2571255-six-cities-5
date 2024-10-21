import {monthNames} from '../constants/monthNames.ts';

export function ConvertDate(stringDate: string): string{
  const date = new Date(stringDate);

  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}
