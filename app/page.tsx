
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Country Info</h1>
      <p>
        <Link href="/countries">Go to Country List</Link>
      </p>
    </div>
  );
}

