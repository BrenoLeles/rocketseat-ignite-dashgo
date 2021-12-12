import {createContext, ReactNode, useContext, useEffect} from "react";
import {useDisclosure, UseDisclosureReturn} from "@chakra-ui/react";
import {useRouter} from "next/router";

interface BarraLateralDrawerProviderProps {
	children: ReactNode;
}

type BarraLateralDrawerData = UseDisclosureReturn;

const BarraLateralContext = createContext({} as BarraLateralDrawerData);

export function BarraLateralDrawerProvider({children}: BarraLateralDrawerProviderProps) {
	
	const disclosure = useDisclosure();
	const router = useRouter();
	
	useEffect(() => {
		disclosure.onClose();
	}, [router.asPath])
	
	return (
		<BarraLateralContext.Provider value={disclosure}>
			{children}
		</BarraLateralContext.Provider>
	)
}

export const useBarraLataralDrawer = () => useContext(BarraLateralContext);