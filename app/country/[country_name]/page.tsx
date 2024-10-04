import getCountries from '@/app/data/countries';
import { useRouter } from 'next/router';


export default function CountryDetails() {
  const router = useRouter();
  const { country_name } = router.query;

  const countries = getCountries();
  const country = countries.find(
    (c) => c.name.toLowerCase() === country_name
  );

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

