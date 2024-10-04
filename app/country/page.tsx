import Link from 'next/link';
import getCountries from '../data/countries';


export default function CountryList() {
  const countries = getCountries();

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <Link href={`/countries/${country.name.toLowerCase()}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
