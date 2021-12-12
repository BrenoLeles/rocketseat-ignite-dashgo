import {
	Box,
	useBreakpointValue,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader, DrawerBody
} from "@chakra-ui/react";
import {NavBarraLateral} from "./NavBarraLateral";
import {useBarraLataralDrawer} from "../../contexts/BarraLateralContext";

export function BarraLateral() {
	
	const { isOpen, onClose } = useBarraLataralDrawer();
	
	const seDrawerBarraLateral = useBreakpointValue({
		base: true,
		lg: false
	});
	
	if (seDrawerBarraLateral) {
		return (
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent bg="gray.800" p="4">
						<DrawerCloseButton mt="6" />
						<DrawerHeader>
							Navegação
						</DrawerHeader>
						<DrawerBody>
							<NavBarraLateral />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}
	
	return (
		<Box as="aside" w="64" mr="8">
			<NavBarraLateral />
		</Box>
	)
};