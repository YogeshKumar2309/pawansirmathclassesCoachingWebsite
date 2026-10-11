import api from "../../../api/axios";

export const homeApi = {
    getHeroData: () => api.get("/hero/cart"),
}