import apiClient from './apiClient';

export const searchService = {
  search: (query, filters, params) => {
    return apiClient.get('/search', {
      params: {
        q: query,
        ...filters,
        ...params,
      },
    });
  },

  getSearchSuggestions: (query) => {
    return apiClient.get('/search/suggestions', {
      params: { q: query },
    });
  },

  getTrendingSearches: () => {
    return apiClient.get('/search/trending');
  },
};

export default searchService;
