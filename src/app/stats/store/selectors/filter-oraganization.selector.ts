import { createFeatureSelector, createSelector } from '@ngrx/store';

export const oraganization = createSelector(
    createFeatureSelector<any>('GetOrganization'),
    (organ: any) => {
        return getSortData(organ.organization, organ.filter);
    }
);
function getSortData(organiz, filter) {
    let result = organiz.slice();
    switch (filter.active) {
        case 'name':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            } else {
                result = result.sort((a, b) => {
                    return b.name - a.name;
                });
            }
            break;
        case 'resourcePath':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            } else {
                result = result.sort((a, b) => {
                    return a.resourcePath - b.resourcePath;
                });
            }
            break;
        case 'commits':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.commits - a.github.commits;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.commits - b.github.commits;
                });
            }
            break;
        case 'issues':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.issues - a.github.issues;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.issues - b.github.issues;
                });
            }
            break;
        case 'milestones':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.milestones - a.github.milestones;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.milestones - b.github.milestones;
                });
            }
            break;
        case 'projects':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.projects - a.github.projects;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.projects - b.github.projects;
                });
            }
            break;
        case 'pullRequests':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.pullRequests - a.github.pullRequests;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.pullRequests - b.github.pullRequests;
                });
            }
            break;
        case 'releases':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.releases - a.github.releases;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.releases - b.github.releases;
                });
            }
            break;
        case 'stargazers':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.stargazers - a.github.stargazers;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.stargazers - b.github.stargazers;
                });
            }
            break;
        case 'watchers':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.github.watchers - a.github.watchers;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.github.watchers - b.github.watchers;
                });
            }
            break;
    }
    return result;
}
