import { Deputies } from "@/services/api.service";
import { CandidatesProps } from "@/utils/types/candidatesProps";
import Link from "next/link";
import '../../positions.css';


export default async function ListCandidates() {
    const service = new Deputies();
    const deputies: CandidatesProps[] = [];

    const res = await service.getAllDeputies().then(({ dados }) => {
        dados.map((item:CandidatesProps) => {
            deputies.push(item);
        })
    });

    const mappedDeputies = deputies.map((deputy) => {
        return (
            <Link href={'/positions'} key={deputy.id}>
                <li className="flex w-full my-3 p-5 text-left rounded-md bg-brand_color_100 shadow-md transition-all duration-300 hover:cursor-pointer hover:bg-brand_color_400 hover:shadow-lg">
                    { deputy.nome }
                </li>
            </Link>
        )
    });

    return (
        <>
        <div>
            <ul>
                { mappedDeputies }
            </ul>
        </div>
        </>
    )
}