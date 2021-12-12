import {Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button} from '@chakra-ui/react';
import Link from 'next/link';
import {SubmitHandler, useForm} from "react-hook-form";
const { yupResolver } = require('@hookform/resolvers/yup')
import * as yup from "yup";

import {Header} from "../../components/Header";
import {BarraLateral} from "../../components/BarraLateral";
import {Input} from "../../components/Form/Input";


type CriarUsuarioFormData = {
	nome: string;
	email: string;
	senha: string;
	senha_confirmacao: string;
}

const CriarUsuarioFormSchema = yup.object({
	nome: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	senha: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
	senha_confirmacao: yup.string().oneOf([null, yup.ref('senha')], 'As senhas precisam ser iguais'),
})

export default function CriarUsuario() {
	
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver( CriarUsuarioFormSchema )
	});
	
	const { errors } = formState;
	
	const handleCriarUsuario: SubmitHandler<CriarUsuarioFormData> = (values) => {
		console.log(values)
	}
	
	return (
		<Box>
			<Header />
			
			<Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
				<BarraLateral />
				
				<Box
					as="form"
					flex="1"
					borderRadius={8}
					bg="gray.800"
					p={["6", "8"]}
					onSubmit={handleSubmit(handleCriarUsuario)}
				>
					<Heading size="lg" fontWeight="normal">Criar usuário</Heading>
					
					<Divider my="6" borderColor="gray.700" />
					
					<VStack spacing="8">
						
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="nome"
								label="Nome Completo"
					       error={errors.nome}
					       {...register('nome', )}
							/>
							<Input
								name="email"
								type="email"
								label="E-mail"
								error={errors.email}
								{...register('email', )}
							/>
						</SimpleGrid>
						
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="senha"
								type="password"
								label="Senha"
								error={errors.senha}
								{...register('senha', )}
							/>
							<Input
								name="senha_confirmacao"
								type="password"
								label="Confirmação da Senha"
								error={errors.senha_confirmacao}
								{...register('senha_confirmacao', )}
							/>
						</SimpleGrid>
						
					</VStack>
					
					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/usuarios" passHref>
								<Button colorScheme="whiteAlpha">Cancelar</Button>
							</Link>
							<Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}