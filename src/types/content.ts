export type BaseContent = {
  id: number;
  slug: string;
};

export type Essay = BaseContent & {
  title: string;
  excerpt?: string | null;
  body?: any[];
};

export type Note = BaseContent & {
  title: string;
  excerpt?: string | null;
  body?: any[];
};

export type BookPost = BaseContent & {
  title: string;
  excerpt?: string | null;
  body?: any[];
};

export type Resource = BaseContent & {
  title: string;
  excerpt?: string | null;
  body?: any[];
};

export type Thinker = BaseContent & {
  name: string;
  short_bio?: string | null;
  biography?: any[];
};

export type Concept = BaseContent & {
  title: string;
  definition?: string | null;
  body?: any[];
};

export type Hub = BaseContent & {
  title: string;
  description?: string | null;
  body?: any[];
};
