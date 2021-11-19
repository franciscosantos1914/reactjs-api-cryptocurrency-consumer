import server from "../config/http";

class Http {
  async getCurrencies(perPage, page) {
    const response = await server.get(
      `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&parkline=false`
    );
    return response.data;
  }
}

export default new Http();
