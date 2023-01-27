import { ReactElement, cloneElement } from 'react'
import { useRouter } from 'next/router';
import Link, { LinkProps } from "next/link"

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter(); // Se ele estiver na página blog /posts

    const className = asPath === rest.href ? activeClassName : '';

    return(
      <Link {...rest}>
         {cloneElement(children, {
            className
         })}
      </Link>
    )
}