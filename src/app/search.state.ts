import {State} from '@ngxs/store';

// Search Interface
export interface SearchStateModel {
  searchs: string[];
}

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    searchs: [],
  }
})
export class SearchState {  }