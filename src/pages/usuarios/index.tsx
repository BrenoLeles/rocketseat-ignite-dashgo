import {Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import {Header} from "../../components/Header";
import {Sidebar} from "../../components/Sidebar";
import {Paginacao} from "../../components/Paginacao";

export default function ListaUsuario() {
	return (
		<Box>
			<Header />
			
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<Sidebar />
				
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">Usuários</Heading>
						
						<Button
							as="a"
							size="sm"
							fontSize="sm"
							colorScheme="pink"
							leftIcon={<Icon as={RiAddLine} fontSize="20" />}
						>
							Criar novo
						</Button>
					</Flex>
					
					<Table colorScheme="whiteAlpha" >
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" width="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Usuário</Th>
								<Th>Data de cadastro</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px="6">
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWheight="bold">Breno Dias</Text>
										<Text fontSize="sm" color="gray.300">breno.leles@outlook.com</Text>
									</Box>
								</Td>
								<Td>07 de dezembro de 2021</Td>
								<Td>
									<Button
										as="a"
										size="sm"
										fontSize="sm"
										colorScheme="purple"
										leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
									>
									Editar
								</Button></Td>
							</Tr>
						</Tbody>
					</Table>
					<Paginacao />
				</Box>
			</Flex>
		</Box>
	)
}