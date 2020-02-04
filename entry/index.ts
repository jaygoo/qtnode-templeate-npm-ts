import * as domains from 'domain';

export const appDomain = domains.create();

export const init: () => void = () => {
    return true;
};
