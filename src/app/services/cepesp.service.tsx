import { PositionsEnum } from "../enums/positions.enum";

export async function getCandidatesByPosition(positionName: PositionsEnum) {
    const headers = new Headers();
    headers.append("Accept", "*/*");


    let res;

    const response = await fetch(
        `https://cepesp.io/api/consulta/candidatos?cargo=${positionName}&ignore_version=true`,
        { 
            headers, 
            method: 'GET'
        }
    );
    
    res = await response.json();
    console.log(res)

    // const res = await response.json();

    return res;
}
