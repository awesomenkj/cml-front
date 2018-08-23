import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getMembers = createSelector(
    createFeatureSelector<any>('GetMembers'),
    (member: any) => {
        return getSortData(member.member, member.filter);
    }
);
function getSortData (coins, filter)  {
  return [];
    let result = coins.slice();
    switch (filter.active) {
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.finance.rank - a.finance.rank;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.finance.rank - b.finance.rank;
                });
            }
            break;
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
                });
            }
            break;
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.finance.price - a.finance.price;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.finance.price - b.finance.price;
                });
            }
            break;
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.finance.marketCap - a.finance.marketCap;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.finance.marketCap - b.finance.marketCap;
                });
            }
            break;
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.finance.currentSupply - a.finance.currentSupply;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.finance.currentSupply - b.finance.currentSupply;
                });
            }
            break;
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.finance.volume - a.finance.volume;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.finance.volume - b.finance.volume;
                });
            }
            break;
        case '':
            if (filter.direction === 'desc') {
                result = result.sort((a, b) => {
                    return b.finance.changeDay - a.finance.changeDay;
                });
            } else {
                result = result.sort((a, b) => {
                    return a.finance.changeDay - b.finance.changeDay;
                });
            }
            break;
    }
    return result;
}
