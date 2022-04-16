import {useContext} from 'react';
import {RootStore} from 'stores/index';
import {AuthStore} from 'stores/AuthStore/AuthStore';
import {StoreContext} from 'stores/rootStoreContext';

export const useStore = (): RootStore => useContext<RootStore>(StoreContext);

export const useAuthStore = (): AuthStore => useStore().authStore as AuthStore;
