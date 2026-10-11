import {create} from "zustand";
import { homeApi } from "../api/homeApi";


const useHomeStore = create((set, get) => ({
    //--------- State -----------
    heroData: [],

    loading: false,
    error: null,
    lastFetched: null, //caching ke liye

    //--------- Actions ----------
    
    // Single endpoints se porra data
    fetchHomeData: async (force = false) => {
        const {loading, lastFetched, heroData } = get();

        // cache: 5 min tak dobara call nhi karega (force = true se skip)
        const CACHE_TIME = 5 * 60 * 1000;
        if (
            !force &&
            !loading &&
            heroData.length &&
            lastFetched &&
            Date.now() - lastFetched < CACHE_TIME
        ) {
            return;
        }

        set({loading: true, error: null});

        try {
            const data = await homeApi.getHeroData();
           
            const heroes = Array.isArray(data) ? data : data?.data?.data || [];

                       
      
            set({
                heroData : heroes,
                loading : false,
                lastFetched: Date.now(),
            });
        } catch (error) {
            set({ error: error.message, loading: false});
        }
    },
}))

export default useHomeStore;