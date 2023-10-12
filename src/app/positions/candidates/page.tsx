"use client"
import { useState } from "react";
import ListCandidates from "./components/candidate-list";
import { CandidatesByPositionProps } from "@/app/props/candidates-by-position";
import { PositionsEnum } from "@/app/enums/positions.enum";
import { getCandidatesByPosition } from "@/app/services/cepesp.service";

export default function Candidates() {
    const [candidate, setCandidate] = useState<CandidatesByPositionProps | {}>({});

    const candidates = getCandidatesByPosition(PositionsEnum.Deputado_Distrital).then((result) => {
        const json = result.json();
        const { 
            ANO_ELEICAO,
            NUM_TURNO,
            SIGLA_UE,
            DESCRICAO_CARGO,
            NUMERO_CANDIDATO,
            CPF_CANDIDATO,
            NOME_URNA_CANDIDATO,
            SIGLA_PARTIDO,
            DESCRICAO_SEXO,
            DESC_SIT_TOT_TURNO 
        } = json;

        const candidateRes: CandidatesByPositionProps = {
            ANO_ELEICAO,
            NUM_TURNO,
            SIGLA_UE,
            DESCRICAO_CARGO,
            NUMERO_CANDIDATO,
            CPF_CANDIDATO,
            NOME_URNA_CANDIDATO,
            SIGLA_PARTIDO,
            DESCRICAO_SEXO,
            DESC_SIT_TOT_TURNO 
        }
    
        setCandidate(candidateRes);
    });

    return (
        <>
            <div>Candidates</div>
            <ListCandidates {...candidate} />
        </>
    )
}