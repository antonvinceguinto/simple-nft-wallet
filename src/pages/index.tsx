import React from 'react';
import MainPage from '@/sections/MainPage';
import Navbar from '@/components/Navbar';

function Home() {
  return <section className='bg-slate-100'>
		<div className='w-full justify-center flex'>
			<div className='max-w-6xl w-full relative'>
				<Navbar />
				<MainPage />
			</div>
		</div>
	</section>;
}

export default Home;
