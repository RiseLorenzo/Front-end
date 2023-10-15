import axios from "axios";

export class CepespApi {
    baseUrl = 'https://cepesp.io/api/consulta/';

    async get(endpoint:string, position: number) {
        const res = await axios(`${this.baseUrl}${endpoint}?cargo=${position}&ignore_version=true`);
        return res.data;
    }
}
