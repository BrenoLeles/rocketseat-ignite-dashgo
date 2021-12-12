import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface PerfilProps {
	seMostrarDadosPerfil?: boolean;
}

export function Perfil({seMostrarDadosPerfil = true}: PerfilProps) {
	return (
		<Flex align="center">
			{seMostrarDadosPerfil && (
				<Box mr="4" textAlign="right">
					<Text>Breno Leles</Text>
					<Text color="gray.300" fontSize="small">Breno Leles</Text>
				</Box>
			)}
			
			<Avatar size="md" name="Breno Leles" src="https://github.com/BrenoLeles.png" />
		</Flex>
	)
}