import headerStore from 'store/headerStore';

const indexStore = () => ({
  headerStore,
});

const useStore = indexStore();

export default useStore;
