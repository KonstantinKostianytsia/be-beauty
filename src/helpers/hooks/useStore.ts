import {useContext} from 'react';
import {RootStore} from 'stores';
import {AuthStore} from 'stores/AuthStore/AuthStore';
import {StoreContext} from 'stores/rootStoreContext';

export const useStore = (): RootStore => useContext(StoreContext);

export const useAuthStore = (): AuthStore => useStore().authStore;
