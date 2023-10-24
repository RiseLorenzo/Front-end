import '../positions.css';
import { CandidatesCepesp, Deputies } from "@/services/api.service";
import { ListCandidatesProps } from '@/utils/interfaces/listCandidatesProps';
import { CandidatesCepespType, CandidatesType } from '@/utils/types/candidatesProps';
import csvtojson from 'csvtojson';
import ListCandidates from './components/list-candidates';

async function getCandidates(): Promise<CandidatesType[]> {
    // services
    const service = new Deputies();

    // parâmetro passado como props
    const data: CandidatesType[] = [];

    // request
    await service.getAllDeputies().then( ({ dados }) => {
        if (dados) {
            dados.map((item) => {
                data.push(item);
            })
        }
       
    })

    return data;
}

async function cepespCandidates() {
// cepesp ------------------------

    // services
    const cepespService = new CandidatesCepesp();

    // respostas finais tipadas
    const candidates: CandidatesCepespType[] = [];

    // request api cepesp
    const cepespRes = async() => { return await cepespService.getCandidatesByPosition(1) };

    //convertendo resposta cepesp (CSV) para JSON
    return csvtojson()
        .fromString(cepespRes.toString())
        .then((jsonArray: CandidatesCepespType[]) => {
            jsonArray.map((item) => {
                candidates.push(item);
            })
        })
}

export default async function Candidates() {
    const data: CandidatesType[] = await getCandidates();
    const deputies: ListCandidatesProps = { data };

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center bg-brand_color_100 text-brand_text my-6">
                <div className="w-full text-center p-3">
                    <h1 className="text-2xl my-2">Candidatos</h1>
                    <p className="text-base">Selecione o candidato que deseja ver os detalhes.</p>
                </div>
                { deputies && <ListCandidates {...deputies}/>}
            </div>
        </>
    )
}