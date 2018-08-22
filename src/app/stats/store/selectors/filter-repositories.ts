import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRepos = createSelector(
  createFeatureSelector<any>('GetRepository'),
  (repos: any) => {
    return getSortData(repos.repository, repos.filter);
  }
);
function getSortData(repos, filter) {
  let result = repos.slice();
  switch (filter.active) {
    case 'name':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.nameWithOwner - a.nameWithOwner;
        });
      } else {
        result = result.sort((a, b) => {
          return a.nameWithOwner - b.nameWithOwner;
        });
      }
      break;
    case 'commits':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.defaultBranchRef.target.history.totalCount - a.defaultBranchRef.target.history.totalCount;
        });
      } else {
        result = result.sort((a, b) => {
          return a.defaultBranchRef.target.history.totalCount - b.defaultBranchRef.target.history.totalCount;
        });
      }
      break;
    case 'issues':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.issues - a.issues;
        });
      } else {
        result = result.sort((a, b) => {
          return a.issues - b.issues;
        });
      }
      break;
    case 'milestones':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.milestones - a.milestones;
        });
      } else {
        result = result.sort((a, b) => {
          return a.milestones - b.milestones;
        });
      }
      break;
    case 'projects':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.projects - a.projects;
        });
      } else {
        result = result.sort((a, b) => {
          return a.projects - b.projects;
        });
      }
      break;
    case 'pullRequests':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.pullRequests - a.pullRequests;
        });
      } else {
        result = result.sort((a, b) => {
          return a.pullRequests - b.pullRequests;
        });
      }
      break;
    case 'releases':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.releases - a.releases;
        });
      } else {
        result = result.sort((a, b) => {
          return a.releases - b.releases;
        });
      }
      break;
    case 'stargazers':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.stargazers - a.stargazers;
        });
      } else {
        result = result.sort((a, b) => {
          return a.stargazers - b.stargazers;
        });
      }
      break;
    case 'watchers':
      if (filter.direction === 'desc') {
        result = result.sort((a, b) => {
          return b.watchers - a.watchers;
        });
      } else {
        result = result.sort((a, b) => {
          return a.watchers - b.watchers;
        });
      }
      break;
  }
  return result;
}
