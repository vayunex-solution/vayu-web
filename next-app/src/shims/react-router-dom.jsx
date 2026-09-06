'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter, useParams as useNextParams } from 'next/navigation';
import { startNavigationProgress } from '../components/common/NavigationLoader';

export const Link = React.forwardRef(function Link({ to, href, children, onClick, onMouseEnter, prefetch = true, ...props }, ref) {
  const destination = to || href || '#';
  const router = useRouter();

  const handleMouseEnter = (e) => {
    if (typeof destination === 'string' && destination.startsWith('/') && !destination.startsWith('/#')) {
      try {
        router.prefetch(destination);
      } catch {
        // Safe fallback
      }
    }
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleClick = (e) => {
    if (typeof destination === 'string' && destination.startsWith('/') && !destination.startsWith('/#') && !destination.startsWith('#')) {
      if (typeof window !== 'undefined' && destination !== window.location.pathname) {
        startNavigationProgress();
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <NextLink
      href={destination}
      ref={ref}
      prefetch={prefetch}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
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
      if (typeof path === 'string' && path.startsWith('/') && typeof window !== 'undefined' && path !== window.location.pathname) {
        startNavigationProgress();
      }
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
