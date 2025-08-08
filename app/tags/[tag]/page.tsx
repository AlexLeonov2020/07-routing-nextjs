const notes = [
  { id: 1, title: 'Note 1', tags: ['work', 'urgent'] },
  { id: 2, title: 'Note 2', tags: ['personal'] },
  { id: 3, title: 'Note 3', tags: ['work'] },
  // ...
];

export default function TagPage({ params }: { params: { tag: string } }) {
  const filteredNotes = notes.filter(note => note.tags.includes(params.tag));

  return (
    <main>
      <h1>Notes with tag: {params.tag}</h1>
      <ul>
        {filteredNotes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </main>
  );
}
