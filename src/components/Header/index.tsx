import {Flex, IconButton, useBreakpointValue, Icon} from "@chakra-ui/react";
import {useBarraLataralDrawer} from "../../contexts/BarraLateralContext";
import {RiMenuLine} from "react-icons/ri";
import {Logo} from "./Logo";
import {PesquisarBox} from "./PesquisarBox";
import {NavNotificacoes} from "./NavNotificacoes";
import {Perfil} from "./Perfil";

export function Header() {
	
	const { onOpen } = useBarraLataralDrawer();
	
	const seTelaGrande = useBreakpointValue({
		base: false,
		lg: true
	})
	
	return (
		<Flex
			as="header"
			w="100%"
			maxW={1480}
			h="20"
			mx="auto"
			px="6"
			align="center"
		>
			
			{!seTelaGrande &&
				<IconButton
						aria-label="Abrir Menu"
						icon={<Icon as={RiMenuLine} />}
						fontSize="24"
						variant="unstyled"
						onClick={onOpen}
						mr="2"
				></IconButton>
			
			}
			
			<Logo />
			
			{seTelaGrande && <PesquisarBox />}
			
			<Flex
				align="center"
				ml="auto"
			>
				
				<NavNotificacoes />
				
				<Perfil seMostrarDadosPerfil={seTelaGrande}/>
			</Flex>
		</Flex>
	);
}