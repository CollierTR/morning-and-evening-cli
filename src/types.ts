export interface DevotionalEntry {
  morning: { keyverse: string; body: string };
  evening: { keyverse: string; body: string };
}

export interface DevotionalOptions {
  date: string;
  morning?: boolean;
  evening?: boolean;
}
