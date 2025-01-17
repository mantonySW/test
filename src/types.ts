export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  featured?: boolean;
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening';