import Link from "next/link"
import { ListCandidatesProps } from "@/utils/interfaces/listCandidatesProps"
import { 
    Card, 
    CardBody, 
    CardFooter, 
    Image, 
    Stack, 
    Heading, 
    Text 
} from '@chakra-ui/react'

export default async function ListCandidates(listCandidatesProps: ListCandidatesProps) {
    const props = listCandidatesProps.data;
    
    return (
        <>
            <div className="flex items-center justify-center">
                <ul className="flex flex-row flex-wrap items-center justify-center mx-4">
                    { props.map((deputy) => (
                        <Link href={'/positions'} key={deputy.id}>
                            <Card
                                direction={{ base: 'row' }}
                                variant='outline'
                                className="transition-all overflow-hidden mx-3 my-3 p-1 rounded-md hover:shadow-md hover:scale-105 hover:brightness-90"
                            >
                            <div className="relative w-[157px]">
                                <Image
                                    objectFit='cover'
                                    className="flex w-full"
                                    src={deputy.urlFoto}
                                    alt={deputy.nome}
                                    borderRadius='md'
                                />
                            </div>

                            <Stack>
                                <CardBody>
                                <Heading size='md' fontWeight='medium' mb='1'>{deputy.nome} - {deputy.siglaUf}</Heading>
                                
                                <Text width='fit-content' py='0.5' px='1' className="text-brand_color_100 bg-brand_color_400 rounded-sm">
                                    Partido {deputy.siglaPartido}
                                </Text>
                                </CardBody>

                                <CardFooter>
                                </CardFooter>
                            </Stack>
                            </Card>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}