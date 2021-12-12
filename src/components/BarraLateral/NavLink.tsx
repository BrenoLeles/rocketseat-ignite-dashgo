import {Icon, Link, Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import {ElementType} from "react";

import {LinkAtivo} from "../LinkAtivo";

interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: string;
	href: string;
}

export function NavLink({icon, children, href, ...rest}: NavLinkProps) {
	return (
		<LinkAtivo href={href} passHref>
			<Link display="flex" align="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">{children}</Text>
			</Link>
		</LinkAtivo>
	)
};