import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Illustration } from '../assets/illustration';
import './styles/errorPage.css';

export default function ErrorPage() {

  return (
    <div className="page-container">
      <MantineProvider>
        <Illustration />
      </MantineProvider>
        <div className="page-content">
          <h1 className="title">Nothing to see here</h1>
          <p>
            Page you are trying to open does not exist. You may have mistyped<br></br> the address, or the
            page has been moved to another URL. If you<br></br> think this is an error contact support.
          </p>
        </div>
    </div>
    
  );
}