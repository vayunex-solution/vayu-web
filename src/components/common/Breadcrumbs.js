import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ customCrumbs }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Default behavior if customCrumbs are not provided
  let crumbs = [];
  if (customCrumbs) {
    crumbs = customCrumbs;
  } else {
    crumbs = [
      { name: 'Home', path: '/' },
      ...pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        // Capitalize and format name
        const name = value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        return { name, path: to };
      }),
    ];
  }

  // We don't render breadcrumbs on the home page itself if generated dynamically
  if (crumbs.length <= 1) return null;

  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      <ol className="breadcrumbs-list">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li
              key={crumb.path}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                <span className="breadcrumb-text">{crumb.name}</span>
              ) : (
                <>
                  <Link to={crumb.path} className="breadcrumb-link">
                    {crumb.name}
                  </Link>
                  <span className="breadcrumb-separator">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
