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
	Link as LinkChakra,
	useBreakpointValue, Spinner
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Link from 'next/link';

import {Header} from "../../components/Header";
import {BarraLateral} from "../../components/BarraLateral";
import {Paginacao} from "../../components/Paginacao";
import {getUsuarios, useUsuarios} from "../../services/hooks/useUsuarios";
import {useState} from "react";
import {queryClient} from "../../services/queryClient";
import {api} from "../../services/api";
import {GetServerSideProps} from "next";


export default function ListaUsuario({usuarios}) {
	const [pagina, setPagina] = useState(1);
	
	const {data, isLoading, isFetching, error} = useUsuarios(pagina, {
		initialData: usuarios
	});
	
	
	const seTelaGrande = useBreakpointValue({
		base: false,
		lg: true
	})
	
	async function handlePrefetchUsuario(usuarioId: number) {
		await queryClient.prefetchQuery(['usuario', usuarioId], async () => {
			const response = await api.get(`usuarios/${usuarioId}`);
			return response.data;
		}, {
			staleTime: 1000 * 10 * 60 // 10 minutos
		});
	}
	
	return (
		<Box>
			<Header />
			
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<BarraLateral />
				
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Usuários
							{ !isLoading && isFetching && <Spinner size="sm" color="gray.5" ml="4" /> }
						</Heading>
						
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
									{data?.usuarios?.map( usuario => {
										return (
											<Tr key={usuario.id}>
												<Td px={["4", "4", "6"]}>
													<Checkbox colorScheme="pink" />
												</Td>
												<Td>
													<LinkChakra color="purpe.400" onMouseEnter={() => handlePrefetchUsuario(usuario.id)}>
														<Text fontWeight="bold">{usuario.nome}</Text>
													</LinkChakra>
													<Box>
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
							<Paginacao
								totalRegistros={data.totalRegistros}
								paginaAtual={pagina}
								onMudarPagina={setPagina}
							/>
						</>
					)}
				</Box>
			</Flex>
		</Box>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	
	const {usuarios, totalRegistros} = await getUsuarios(1)
	
	return {
		props: {
			usuarios
		}
	}
}