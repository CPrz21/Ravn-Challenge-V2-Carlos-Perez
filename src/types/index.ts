export type PeopleParams = {
  first?: number;
  after?: null | string;
};

export interface ISpecies {
  name: string;
}

export interface IHomeworld {
  name: string;
}

interface IVehicle {
  name: string;
}


interface IVehicleConnection {
  vehicles: IVehicle[];
}

export type Character = {
  id: string;
  birthYear: string;
  name: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  vehicleConnection: IVehicleConnection;
  species?: ISpecies;
  homeworld?: IHomeworld;
};

interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export type PeopleList = {
  allPeople: {
    people: Character[];
    totalCount: number;
    pageInfo: IPageInfo;
  };
};
