import React from 'react';
import { Head } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';


interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
