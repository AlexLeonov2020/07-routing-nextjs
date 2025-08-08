import Link from 'next/link';
import css from './SidebarNotes.module.css';

const tags = ['All', 'Work', 'Personal', 'Urgent', 'Ideas'];

export default function SidebarNotes() {
  return (
    <aside>
      <ul className={css.menuList}>
        {tags.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
