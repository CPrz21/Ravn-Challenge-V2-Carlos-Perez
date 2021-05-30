import {gql} from '@apollo/client';

export const getPeopleQuery = gql`
  query GetPeopleQuery($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      people {
        id
        birthYear
        name
        eyeColor
        hairColor
        skinColor
        species {
          id
          name
        }
        homeworld {
          id
          name
        }
        vehicleConnection {
          vehicles {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
    }
  }
`;