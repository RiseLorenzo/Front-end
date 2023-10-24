import { CepespApi } from "@/http/cepespDataGateway";
import { DadosAbertosApi } from "@/http/dadosAbertosGateway";
import { ApiResponseModel } from "@/utils/interfaces/apiResponseModel";
import { CandidatesType } from "@/utils/types/candidatesProps";

export class Deputies extends DadosAbertosApi {
    constructor() {
        super();
    }

    public async getAllDeputies(): Promise<ApiResponseModel> {
        return this.get('deputados');
    }
};

export class CandidatesCepesp extends CepespApi {
    constructor() {
        super();
    }

    public async getCandidatesByPosition(position:number) {
        return this.get('candidatos', position);
    }
}