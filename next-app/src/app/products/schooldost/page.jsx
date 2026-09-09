import React from 'react';
import SchoolDostPage from '../../../pages-source/products/SchoolDostPage';

export const metadata = {
  title: 'SchoolDost | Verified Student Network & Campus Communities | Vayunex Solution',
  description: 'SchoolDost is a verified student network and campus community platform. Connect verified peers, campus clubs, and academic discovery in a safe environment.',
  alternates: {
    canonical: 'https://www.vayunexsolution.com/products/schooldost/'
  },
  openGraph: {
    title: 'SchoolDost | Verified Student Network',
    description: 'The verified student-only network for authentic campus connections and peer collaboration.',
    url: 'https://www.vayunexsolution.com/products/schooldost/'
  }
};

export default function Page() {
  return <SchoolDostPage />;
}
