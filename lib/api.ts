import axios from "axios";
import { Note } from "@/types/note";

const API_URL = "http://localhost:3001/notes"; 

interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: string;
}

export const fetchNotes = async (params: FetchNotesParams = {}): Promise<Note[]> => {
  const res = await axios.get<Note[]>(API_URL, { params });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await axios.get<Note>(`${API_URL}/${id}`);
  return res.data;
};

export const createNote = async (note: Omit<Note, "id">): Promise<Note> => {
  const res = await axios.post<Note>(API_URL, note);
  return res.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
