import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";

import { GlobalStyles } from './assets/globalStyles';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { CharacterCell } from './components/Sidebar/CharacterCell';

import { getPeopleQuery } from './graphql/getPeopleQuery';

import {PeopleParams, PeopleList, Person} from './types';

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  console.log("🚀 ~ file: App.tsx ~ line 16 ~ App ~ people", people)
  const [shouldFetchMoreData, setShouldFetchMoreData] = useState<boolean>(true);
  const {data: {allPeople} = {}, error, loading, fetchMore} = useQuery<
  PeopleList,
  PeopleParams
  >(getPeopleQuery, {
    variables: {first: 14, after: ''},
    fetchPolicy: 'cache-and-network',
  });
  console.log("🚀 ~ file: App.tsx ~ line 19 ~ App ~ loading", loading)

  useEffect(() => {
    if (allPeople?.people.length) {
      if (!allPeople.pageInfo.hasNextPage) {
        setShouldFetchMoreData(false);
      }

      setPeople(allPeople.people);
    }
  }, [allPeople?.people, allPeople?.people.length, allPeople?.pageInfo]);
  
  return (
    <section className="container">
      <GlobalStyles />
      <Header/>
      <div className="wrapper">
        <Sidebar loading={loading} error={!!error}>
          {
            people?.map((character) => <CharacterCell />)
          }
        </Sidebar>
        <Content/>
      </div>
    </section>
  );
}

export default App;
