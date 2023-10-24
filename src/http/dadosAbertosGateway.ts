import axios from "axios";
export class DadosAbertosApi {
    baseUrl = 'https://dadosabertos.camara.leg.br/api/v2/';

    async get(endpoint:string) {
        const res = await axios(`${this.baseUrl}${endpoint}`);
        return res.data;
    }
}
