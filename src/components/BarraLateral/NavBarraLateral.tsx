import {NavSecao} from "./NavSecao";
import {NavLink} from "./NavLink";
import {RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from "react-icons/ri";
import {Stack} from "@chakra-ui/react";

export function NavBarraLateral() {
	return (
		<Stack spacing="12" align="flex-start">
			
			<NavSecao titulo="GERAL">
				
				<NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
				<NavLink icon={RiContactsLine} href="/usuarios">Usuários</NavLink>
			</NavSecao>
			
			<NavSecao titulo="AUTOMAÇÃO">
				<NavLink icon={RiInputMethodLine} href="/formularios">Formulários</NavLink>
				<NavLink icon={RiGitMergeLine} href="/automacao">Automação</NavLink>
			</NavSecao>
		</Stack>
	)
};