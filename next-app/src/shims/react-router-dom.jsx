'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter, useParams as useNextParams } from 'next/navigation';

export const Link = React.forwardRef(function Link({ to, href, children, ...props }, ref) {
  const destination = to || href || '#';
  return (
    <NextLink href={destination} ref={ref} {...props}>
      {children}
    </NextLink>
  );
});

export const useLocation = () => {
  const pathname = usePathname() || '/';
  return React.useMemo(() => ({
    pathname,
    search: typeof window !== 'undefined' ? window.location.search : '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
    state: null,
  }), [pathname]);
};

export const useNavigate = () => {
  const router = useRouter();
  return (path) => {
    if (path === -1) {
      router.back();
    } else {
      router.push(path);
    }
  };
};

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  let params = new URLSearchParams();
  if (typeof window !== 'undefined') {
    params = new URLSearchParams(window.location.search);
  }
  const setSearchParams = (newParams) => {
    if (typeof window !== 'undefined') {
      const q = new URLSearchParams(newParams).toString();
      router.push(`${pathname}?${q}`);
    }
  };
  return [params, setSearchParams];
};

export const useParams = () => {
  const params = useNextParams();
  return params || {};
};

export const BrowserRouter = ({ children }) => <>{children}</>;
export const Routes = ({ children }) => <>{children}</>;
export const Route = () => null;

export default {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
  useParams,
  BrowserRouter,
  Routes,
  Route,
};
