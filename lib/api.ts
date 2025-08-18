import { Note } from "@/types/note";

interface FetchNotesResponseRaw {
  notes: Note[];
  total_pages: number;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function getNotes(page = 1, limit = 6): Promise<FetchNotesResponse> {
  const res = await fetch(
    `https://raw.githubusercontent.com/AlexLeonov2020/api-data/main/notes.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  const data: FetchNotesResponseRaw = await res.json();

  return {
    notes: data.notes,
    totalPages: data.total_pages,
  };
}

export async function getNoteById(id: string): Promise<Note> {
  const res = await fetch(
    `https://raw.githubusercontent.com/AlexLeonov2020/api-data/main/notes.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch note");
  }

  const data: FetchNotesResponseRaw = await res.json();

  const note = data.notes.find((n) => n.id === id);

  if (!note) {
    throw new Error("Note not found");
  }

  return note;
}
