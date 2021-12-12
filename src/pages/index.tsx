import {Flex, Button, Stack} from '@chakra-ui/react';
import {SubmitHandler, useForm} from "react-hook-form";
const { yupResolver } = require('@hookform/resolvers/yup')
import * as yup from "yup";

import { Input } from '../components/Form/Input';

type LoginFormData = {
	email: string;
	senha: string;
}

const loginFormSchema = yup.object({
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória'),
})

export default function Login() {
	
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver( loginFormSchema )
	});
	
	const { errors } = formState;
	
	const handleLogin: SubmitHandler<LoginFormData> = (values) => {
		console.log(values);
	}
	
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				w="100%"
				maxW={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleLogin)}
			>
				<Stack spacing="4">
					<Input
						name="email"
						type="email"
						label="E-mail:"
						error={errors.email}
						{...register('email', )}
					/>
					<Input
						name="password"
						type="password"
						label="Senha:"
						error={errors.password}
						{...register('password')}
					/>
				</Stack>
				<Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
					Entrar
				</Button>
			
			</Flex>
		</Flex>
	)
}
