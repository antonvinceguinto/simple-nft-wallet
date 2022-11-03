import React from 'react';

function Footer() {
  return (
    <div
      className='w-full centered py-10 flex flex-col bg-slate-800
		 text-white mt-10 rounded-t-xl'
    >
      <h1 className='text-lg font-bold'>NFT Wallet &copy; Tonbeans 2023</h1>
      <div className='divide-x divide-white'>
        <a
          href='https://twitter.com/antonguinto'
          target='_blank'
          rel='noreferrer'
          className='underline mt-2 pr-2'
        >
          Twitter
        </a>
        <a
          href='https://github.com/antonvinceguinto/'
          target='_blank'
          rel='noreferrer'
          className='underline mt-2 pl-2'
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
