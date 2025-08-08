import React from 'react';

interface Note {
  id: number;
  title: string;
  tags: string[];
}

const notes: Note[] = [
  { id: 1, title: 'Note 1', tags: ['Work', 'Urgent'] },
  { id: 2, title: 'Note 2', tags: ['Personal'] },
  { id: 3, title: 'Note 3', tags: ['Work'] },
  { id: 4, title: 'Note 4', tags: ['Ideas'] },
  { id: 5, title: 'Note 5', tags: ['Urgent', 'Personal'] },
  { id: 6, title: 'Note 6', tags: ['Work', 'Ideas'] }
];

export default function FilteredNotesPage({ params }: { params: { tag: string } }) {
  const tag = params.tag;

  const filteredNotes =
    tag === 'All' ? notes : notes.filter(note => note.tags.includes(tag));

  return (
    <main>
      <h1>Notes with tag: {tag}</h1>
      <ul>
        {filteredNotes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </main>
  );
}
