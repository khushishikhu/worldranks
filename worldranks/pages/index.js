import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import styles from "../styles/Home.module.css";
import SearchInput from "../components/search/search"

export default function Home({countries}) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}> Found {countries.length} Countries</div>
      <SearchInput/>
      <CountriesTable countries={filteredCountries} />
    </Layout>
  )
}

export const getStaticProps = async() => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
