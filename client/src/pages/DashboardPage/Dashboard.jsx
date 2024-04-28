import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Button,
} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import Paths from "../../routes/Paths.js";

const onSubmit = ()=>{
        nav(`${Paths.main.create_campaign}`);
}

export function Dashboard({}){
    const nav = useNavigate()
    return (
        <div>
            <div className={"grid grid-cols-2 mb-32 mt-2"}>
                <div className={"grid place-content-end"}>
                    <span>All your campaigns are listed here. You can manage or view your existing campaigns. <br/>
                        Bring a change today for a better tomorrow.</span><br/><br/>
                    <Button colorScheme={"orange"} className={"hover:scale-110"} onClick={onSubmit}>Add new campaign</Button>
>>>>>>> c1af08a (Rebasing)
                </div>
            </div>
            <TableContainer className={"mx-8"}>
                <Table variant='simple'>
                    <TableCaption>List of your campaigns</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Date</Th>
                            <Th><span className={"font-bold"}>Title</span></Th>
                            <Th isNumeric>Funds raised</Th>
                            <Th isNumeric>Target</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>13/10/2023</Td>
                            <Td><span className={"font-bold text-lg"}>Old Age Home</span></Td>
                            <Td isNumeric>23000</Td>
                            <Td isNumeric>100000</Td>
                            <Td>Active</Td>
                            <Td>
                                <Button w={"full"} variant={"ghost"}>Edit</Button><br/>
                                <Button w={"full"} variant={"ghost"}>View</Button><br/>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>13/10/2023</Td>
                            <Td><span className={"font-bold text-lg"}>Old Age Home</span></Td>
                            <Td isNumeric>23000</Td>
                            <Td isNumeric>100000</Td>
                            <Td>Active</Td>
                            <Td>
                                <Button w={"full"} variant={"ghost"}>Edit</Button><br/>
                                <Button w={"full"} variant={"ghost"}>View</Button><br/>
                            </Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Date</Th>
                            <Th><span className={"font-bold"}>Title</span></Th>
                            <Th isNumeric>Funds raised</Th>
                            <Th isNumeric>Target</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

        </div>
    )
}