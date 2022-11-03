/* eslint-disable max-len */
import { ConnectKitButton } from 'connectkit';
import React from 'react';

function WalletSVG() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-8 h-8 md:w-14 md:h-14'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
      />
    </svg>
  );
}

function Navbar() {
  return (
    <div
      className='bg-slate-100 backdrop-blur-lg bg-opacity-30 w-full flex 
						justify-between items-center px-6 py-5 sticky top-0 z-50'
    >
      <div className='flex items-center gap-x-4'>
        <WalletSVG />
        <h1 className='font-bold text-2xl lg:text-4xl'>NFT Wallet</h1>
      </div>
      <ConnectKitButton />
    </div>
  );
}

export default Navbar;
