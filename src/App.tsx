import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import InfiniteScroll from 'react-infinite-scroll-component';


import { GlobalStyles } from './assets/globalStyles';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CharacterCell } from './components/Sidebar/CharacterCell';

import { getPeopleQuery } from './graphql/getPeopleQuery';

import {PeopleParams, PeopleList, Character} from './types';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const [people, setPeople] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  const [shouldFetchMoreData, setShouldFetchMoreData] = useState<boolean>(true);
  const {
    data: {allPeople} = {}, 
    error, 
    loading, 
    fetchMore
  } = useQuery<PeopleList,PeopleParams>(getPeopleQuery, {
    variables: {first: 16, after: ''},
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (allPeople?.people.length) {
      if (!allPeople.pageInfo.hasNextPage) {
        setShouldFetchMoreData(false);
      }

      setPeople(allPeople.people);
    }
  }, [allPeople?.people, allPeople?.people.length, allPeople?.pageInfo]);

  const fetchMorePeople = () => {
    if (allPeople?.people.length)
      fetchMore({
        variables: {
          after: allPeople?.pageInfo.endCursor,
          first: 5,
        },
        updateQuery: (previous, {fetchMoreResult}) => {
          if (
            !fetchMoreResult?.allPeople?.people.length ||
            allPeople.people.length === allPeople.totalCount
          ) {
            return previous;
          }

          fetchMoreResult.allPeople.people = [
            ...previous.allPeople.people,
            ...fetchMoreResult.allPeople.people,
          ];

          return fetchMoreResult;
        },
      });
  };

  const onClickCharacter = (character: Character) =>{
   setCurrentCharacter(character);
  }
  
  return (
    <section className="container">
      <GlobalStyles />
      <Header
        title={currentCharacter?.name || ''}
        showCharacterTitle={!!currentCharacter?.name}
        onClick={() => setCurrentCharacter(null)}
      />
      <div 
        className={`wrapper ${!currentCharacter ? '' : 'hide'}`}
      >
        <InfiniteScroll
          dataLength={allPeople?.people.length || 0}
          next={() => fetchMorePeople()}
          hasMore={shouldFetchMoreData}
          loader={<Loader />}
          height="100%"
        >
          {
            people?.map((character) => (
              <CharacterCell 
                key={character.id}
                character={character}
                onClick={onClickCharacter}
              />
            ))
          }
          {!loading && !!error && <ErrorMessage />}
        </InfiniteScroll> 
        <Content 
          currentCharacter={currentCharacter}
          show={!!currentCharacter}
        />
      </div>
    </section>
  );
}

export default App;
