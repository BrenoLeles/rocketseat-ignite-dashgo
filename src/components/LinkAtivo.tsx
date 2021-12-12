import Link, {LinkProps} from "next/link";
import {cloneElement, ReactElement} from "react";
import {useRouter} from "next/router";

interface LinkAtivoProps extends LinkProps{
	children: ReactElement;
	seHrefDeveSerExato
}

export function LinkAtivo({children, seHrefDeveSerExato = false, ...rest}: LinkAtivoProps) {
	const { asPath } = useRouter();
	let seAtivo = false;
	
	if(seHrefDeveSerExato && (asPath === rest.href || asPath === rest.as)) {
		seAtivo = true;
	}
	
	if(!seHrefDeveSerExato && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
		seAtivo = true;
	}
	
	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: seAtivo ? 'pink.400' : 'gray.50'
			})}
		</Link>
	)
}