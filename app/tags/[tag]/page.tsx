export default function TagPage({ params }: { params: { tag: string } }) {
  return (
    <div>
      <h1>Notes with tag: {params.tag}</h1>
      {/* Тут tegs */}
    </div>
  );
}
