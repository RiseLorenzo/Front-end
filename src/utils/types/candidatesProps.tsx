export type CandidatesType = {
    id: number; 
    uri: string;
    nome: string; 
    siglaPartido: string; 
    uriPartido: string;
    siglaUf: string; 
    idLegislatura: number; 
    urlFoto: string; 
    email: string;
}

export type CandidatesCepespType = {
    ANO_ELEICAO: string;
    NUM_TURNO: string;
    SIGLA_UE: string;
    DESCRICAO_CARGO: string;
    NUMERO_CANDIDATO: string;
    CPF_CANDIDATO: string;
    NOME_URNA_CANDIDATO: string;
    SIGLA_PARTIDO: string;
    DESCRICAO_SEXO: string;
    DESC_SIT_TOT_TURNO: string;
}