export function searchForPractice(searchValue: string): SearchResults {
  return {
    namedProperties: [
      { name: "practiceName", displayName: "Name" },
      { name: "identifier", displayName: "ID" },
      { name: "mainContact", displayName: "Main Contact" }
    ],
    instances: [
      {
        id: 12345,
        practiceName: "Dave's Vets",
        identifier: "23456789",
        mainContact: "Dr D Gregory"
      },
      {
        id: 12445,
        practiceName: "Gill's Vets",
        identifier: "2345ee9",
        mainContact: "Dr G Gregory"
      },
      {
        id: 2345,
        practiceName: "Rave's Vets",
        identifier: "23456789",
        mainContact: "Dr D Gregory"
      },
      {
        id: 1245,
        practiceName: "Bill's Vets",
        identifier: "2345ee9",
        mainContact: "Dr G Gregory"
      },
      {
        id: 1235,
        practiceName: "Brave's Vets",
        identifier: "23456789",
        mainContact: "Dr D Gregory"
      },
      {
        id: 1234,
        practiceName: "Dill's Vets",
        identifier: "2345ee9",
        mainContact: "Dr G Gregory"
      }
    ]
  };
}

export interface SearchResults {
  namedProperties: PropertyInfo[];
  instances: any[];
}
export interface PropertyInfo {
  name: string;
  displayName: string;
}

export function getPracticeById(id: string): Practice {
  return {
    id: id,
    name: "SimplyVets South",
    address: {
      line1: "201 High Street",
      line2: "Andover",
      county: "Hampshire",
      postcode: "SP10 1DD"
    }
  };
}

export interface Practice {
  id: string;
  name: string;
  address: any;
}
