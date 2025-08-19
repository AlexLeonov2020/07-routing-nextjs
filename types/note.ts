export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export interface NoteByTag {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface FetchNotesParams {
  page?: number;
  search?: string;
  tag?: string;
  perPage?: number;
}
