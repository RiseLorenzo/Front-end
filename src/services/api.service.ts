import { DadosAbertosApi } from "@/http/dadosAbertosGateway";

export class Deputies extends DadosAbertosApi {
    constructor() {
        super();
    }

    public async getAllDeputies() {
        return this.get('deputados');
    }
}