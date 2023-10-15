import { CepespApi } from "@/http/cepespDataGateway";
import { DadosAbertosApi } from "@/http/dadosAbertosGateway";

export class Deputies extends DadosAbertosApi {
    constructor() {
        super();
    }

    public async getAllDeputies() {
        return this.get('deputados');
    }
};

export class Candidates extends CepespApi {
    constructor() {
        super();
    }

    public async getCandidatesByPosition(position:number) {
        return this.get('candidatos', position);
    }
}