import { Candidates, Deputies } from "@/services/api.service";
import { CandidatesCepespProps, CandidatesProps } from "@/utils/types/candidatesProps";
import Link from "next/link";
import '../../positions.css';
import csvtojson from 'csvtojson';

export default async function ListCandidates() {
    // services
    const service = new Deputies();
    const cepespService = new Candidates();

    // respostas finais tipadas
    const deputies: CandidatesProps[] = [];
    const candidates: CandidatesCepespProps[] = [];

    // resquest api dadosAbertos
    const res = await service.getAllDeputies().then(({ dados }) => {
        dados.map((item:CandidatesProps) => {
            deputies.push(item);
        })
    });

    // request api cepesp
    const cepespRes = await cepespService.getCandidatesByPosition(1);

    //convertendo resposta cepesp (CSV) para JSON
    await csvtojson()
        .fromString(cepespRes)
        .then((jsonArray: CandidatesCepespProps[]) => {
            jsonArray.map((item) => {
                candidates.push(item);
            })
        })
    
    // resposta api dadosAbertos mapeadas
    const mappedDeputies = deputies.map((deputy) => {
        return (
            <Link href={'/positions'} key={deputy.id}>
                <li className="flex w-full my-3 p-5 text-left rounded-md bg-brand_color_100 shadow-md transition-all duration-300 hover:cursor-pointer hover:bg-brand_color_400 hover:shadow-lg">
                    { deputy.nome }
                </li>
            </Link>
        )
    });

    // resposta cepesp mapeadas
    const mappedDeputiesCepesp = candidates.map((deputy) => {
        return (
            <Link href={'/positions'} key={Number(deputy?.NUMERO_CANDIDATO)}>
                <li className="flex w-full my-3 p-5 text-left rounded-md bg-brand_color_100 shadow-md transition-all duration-300 hover:cursor-pointer hover:bg-brand_color_400 hover:shadow-lg">
                    {deputy?.NOME_URNA_CANDIDATO}
                </li>
            </Link>
        );
    });

    return (
        <>
        <div>
            <ul>
                { mappedDeputiesCepesp }
            </ul>
        </div>
        </>
    )
}