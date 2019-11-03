export function searchForPractice(searchValue: string): SearchResults {
  return {
    namedProperties: [{name: "practiceName", displayName: "Name"}, {name: "identifier", displayName: "ID"}, { name: "mainContact", displayName: "Main Contact"}],
    instances:[ {
      practiceName: "Dave's Vets",
      identifier: "23456789",
      mainContact: "Dr D Gregory"
    },
    {
      practiceName: "Gill's Vets",
      identifier: "2345ee9",
      mainContact: "Dr G Gregory"
    },
    {
      practiceName: "Dave's Vets",
      identifier: "23456789",
      mainContact: "Dr D Gregory"
    },
    {
      practiceName: "Gill's Vets",
      identifier: "2345ee9",
      mainContact: "Dr G Gregory"
    },
    {
      practiceName: "Dave's Vets",
      identifier: "23456789",
      mainContact: "Dr D Gregory"
    },
    {
      practiceName: "Gill's Vets",
      identifier: "2345ee9",
      mainContact: "Dr G Gregory"
    },
  ]
  }

}

export interface SearchResults {
  namedProperties: PropertyInfo[];
  instances: any[];
}
export interface PropertyInfo {
  name: string;
  displayName: string;
}