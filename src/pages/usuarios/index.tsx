import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Checkbox,
	Tbody,
	Text,
	useBreakpointValue, Spinner
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Link from 'next/link';
import { useQuery } from 'react-query';

import {Header} from "../../components/Header";
import {BarraLateral} from "../../components/BarraLateral";
import {Paginacao} from "../../components/Paginacao";

export default function ListaUsuario() {
	
	const {data, isLoading, error} = useQuery('usuarios', async () => {
		const response = await fetch('http://localhost:3000/api/usuarios');
		const data = await response.json();
		
		const usuarios = data.usuarios.map(usuario => {
			return {
				id: usuario.id,
				nome: usuario.nome,
				email: usuario.email,
				createdAt: new Date(usuario.id).toLocaleDateString('pt-BR', {
					day: '2-digit',
					month: 'long',
					year: "numeric"
				}),
			}
		})
		
		return usuarios;
	}, {
		staleTime: 1000 * 5
	});
	
	
	const seTelaGrande = useBreakpointValue({
		base: false,
		lg: true
	})
	
	return (
		<Box>
			<Header />
			
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<BarraLateral />
				
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">Usuários</Heading>
						
						<Link href="/usuarios/criar" passHref>
							
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar novo
							</Button>
						</Link>
					</Flex>
					
					{ isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify="center">
							<Text>Falha ao carregar dados</Text>
						</Flex>
					) : (
						<>
							<Table colorScheme="whiteAlpha" >
								<Thead>
									<Tr>
										<Th px={["4", "4", "6"]} color="gray.300" width="8">
											<Checkbox colorScheme="pink" />
										</Th>
										<Th>Usuário</Th>
										{seTelaGrande && <Th>Data de cadastro</Th>}
										<Th w="40px">Ação</Th>
									</Tr>
								</Thead>
								<Tbody>
									{data.map( usuario => {
										return (
											<Tr key={usuario.id}>
												<Td px={["4", "4", "6"]}>
													<Checkbox colorScheme="pink" />
												</Td>
												<Td>
													<Box>
														<Text fontWeight="bold">{usuario.nome}</Text>
														<Text fontSize="sm" color="gray.300">{usuario.email}</Text>
													</Box>
												</Td>
												{seTelaGrande && <Td>{usuario.createdAt}</Td>}
												{seTelaGrande && <Td>
													<Button
															as="a"
															size="sm"
															fontSize="sm"
															colorScheme="purple"
															leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
													>
														Editar
													</Button></Td>}
											</Tr>
										);
									})}
								</Tbody>
							</Table>
							<Paginacao />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	)
}