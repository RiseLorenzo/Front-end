import Link from "next/link";
import { PositionsEnum, PositionsNameEnum } from "../../enums/positions.enum";
import './positions.css';

export default function PositionsList() {
    const positions = [
        { id: PositionsEnum.Prefeito, name: PositionsNameEnum.Prefeito },
        { id: PositionsEnum.Deputado_Distrital, name: PositionsNameEnum.Deputado_Distrital },
        { id: PositionsEnum.Deputado_Estadual, name: PositionsNameEnum.Deputado_Estadual },
        { id: PositionsEnum.Deputado_Federal, name: PositionsNameEnum.Deputado_Federal },
        { id: PositionsEnum.Governador, name: PositionsNameEnum.Governador },
        { id: PositionsEnum.Vereador, name: PositionsNameEnum.Vereador },
        { id: PositionsEnum.Presidente, name: PositionsNameEnum.Presidente },
        { id: PositionsEnum.Senador, name: PositionsNameEnum.Senador }
    ];

    const mappedPositions = positions.map((item) => {
        return (
            <Link href={'/positions/candidates'} key={item.id}>
                <li className="flex w-full my-3 p-5 text-left rounded-md bg-brand_color_100 shadow-md transition-all duration-300 hover:cursor-pointer hover:bg-brand_color_400 hover:shadow-lg">
                    { item.name }
                </li>
            </Link>
        )
    })

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center bg-brand_color_100 text-brand_text my-6">
                <div className="w-full text-center p-3">
                    <h1 className="text-xl my-2">Cargos</h1>
                    <p>Selecione o cargo do qual quer ver os candidatos.</p>
                </div>

                <div className="flex w-full items-center justify-center mx-4">
                    <ul className="flex flex-col w-full max-w-[323px]">
                        { mappedPositions }
                    </ul>
                </div>
            </div>
        </>
    )
}