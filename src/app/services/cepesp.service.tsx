import { get } from "https";
import { PositionsEnum } from "../enums/positions.enum";
import { CandidatesByPositionProps } from "../props/candidates-by-position";

export async function getCandidatesByPosition(positionName: PositionsEnum) {
    const response = await fetch(`http://cepesp.io/api/consulta/candidatos?cargo=${positionName}&ignore_version=true`);
    const res = response.json();
    return res;
}
