import React, { useEffect, useState } from 'react';
import alchemy from '@/lib/alchemy_sdk_helper';
import Footer from '@/sections/components/Footer';
import { OwnedNft, NftExcludeFilters } from 'alchemy-sdk';
import { useAccount, useNetwork } from 'wagmi';
import Link from 'next/link';

function NFTItem({ nft }: { nft: OwnedNft }) {
  return (
    <Link href={`${nft.rawMetadata.external_url}`}>
      <a target='_blank' rel='noreferrer'>
        <img
          src={nft?.media[0]?.raw ?? '/images/no-image.jpg'}
          width={300}
          height={300}
          onError={(e) => {
            e.currentTarget.src = '/images/no-image.jpg';
          }}
          className='pointer-events-none rounded-lg object-cover'
        />
        <h1 className='font-bold text-xl mt-2'>
          {nft?.title === '' || nft?.title === undefined
            ? 'Unknown'
            : nft.title}
        </h1>
      </a>
    </Link>
  );
}

type Status = 'loading' | 'error' | 'success';

function MainPage() {
  const [loadingStatus, setLoadingStatus] = useState<Status>('loading');

  const [myNFTs, setMyNFTs] = useState<OwnedNft[]>([]);

  const { chain } = useNetwork();
  const { address } = useAccount();

  useEffect(() => {
    const fetchNfts = async () =>
      alchemy(chain)
        .nft.getNftsForOwner(address, {
          excludeFilters: [NftExcludeFilters.SPAM, NftExcludeFilters.AIRDROPS],
          //   pageSize: 10,
        })
        .then((nfts) => {
          console.log(nfts);
          setMyNFTs(nfts.ownedNfts);
          setLoadingStatus('success');
        });

    try {
      setLoadingStatus('loading');
      void fetchNfts();
    } catch (e) {
      setLoadingStatus('error');
      console.error('Error fetching NFTs', e);
    }
  }, [chain]);

  return (
    <section id='main' className='min-h-screen relative'>
      <div className='w-full'>
        {loadingStatus === 'loading' ? (
          <div className='flex justify-center items-center min-h-screen'>
            <img
              src='/images/loading.svg'
              alt='loading'
              width={80}
              height={80}
            />
          </div>
        ) : loadingStatus === 'error' ? (
          <div className='flex justify-center items-center min-h-screen'>
            Sorry we had trouble retrieving your NFTs 🙁
          </div>
        ) : (
          <div
            className='grid grid-cols-2 px-2 md:grid-cols-3 
	xl:grid-cols-4 gap-y-4 gap-x-4 mt-4'
          >
            {myNFTs.map((nft, i) => {
              return <NFTItem nft={nft} key={`${nft.tokenId}${i}`} />;
            })}
          </div>
        )}

        <Footer />
      </div>
    </section>
  );
}

export default MainPage;
