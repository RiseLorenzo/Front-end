import ListCandidates from "./components/candidate-list";
import '../positions.css';

export default function Candidates() {
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center bg-brand_color_100 text-brand_text my-6">
                <div className="w-full text-center p-3">
                    <h1 className="text-xl my-2">Candidatos</h1>
                    <p>Selecione o candidato que deseja ver os detalhes.</p>
                </div>

                <ListCandidates />
            </div>
        </>
    )
}