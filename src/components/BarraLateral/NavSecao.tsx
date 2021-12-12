import {Box, Icon, Link, Stack, Text} from "@chakra-ui/react";
import {RiContactsLine, RiDashboardLine} from "react-icons/ri";
import {ReactNode} from "react";

interface NavSecaoProps {
	titulo: string;
	children: ReactNode
}

export function NavSecao({titulo, children}: NavSecaoProps) {
	return (
		<Box>
			<Text  fontWeight="bold" color="gray.400" fontSize="samll">{titulo}</Text>
			<Stack spacing="4" mt="8" align="stretch">
				{children}
			</Stack>
		</Box>
	)
};