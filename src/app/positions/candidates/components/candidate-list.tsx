import { CandidatesByPositionProps } from "@/app/props/candidates-by-position";

export default function ListCandidates(candidatesByPosition: CandidatesByPositionProps) {
    return (
        <>
        <div>
            candidate list component
            <ul>
                <li>{candidatesByPosition?.ANO_ELEICAO}</li>
                <li>{candidatesByPosition?.CPF_CANDIDATO}</li>
                <li>{candidatesByPosition?.DESCRICAO_CARGO}</li>
                <li>{candidatesByPosition?.DESCRICAO_SEXO}</li>
                <li>{candidatesByPosition?.DESC_SIT_TOT_TURNO}</li>
                <li>{candidatesByPosition?.NOME_URNA_CANDIDATO}</li>
                <li>{candidatesByPosition?.NUMERO_CANDIDATO}</li>
                <li>{candidatesByPosition?.NUM_TURNO}</li>
                <li>{candidatesByPosition?.SIGLA_PARTIDO}</li>
                <li>{candidatesByPosition?.SIGLA_UE}</li>
            </ul>
        </div>
        </>
    )
}