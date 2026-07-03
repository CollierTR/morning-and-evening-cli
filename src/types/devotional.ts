export interface DevotionDay {
  evening: Devotional;
  morning: Devotional;
}

export interface Devotional {
  keyverse: string;
  body: string;
}

export type DevotionalMonth = Record<string, DevotionDay>;
export type DevotionalYear = Record<string, DevotionalMonth>;
