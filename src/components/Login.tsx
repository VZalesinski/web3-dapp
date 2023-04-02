import React, { FC } from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { ConnectWallet } from '@thirdweb-dev/react'

export const Login: FC = () => {
	return (
		<div className='bg-[#091B18] min-h-screen flex flex-col justify-center items-center gap-4 p-4'>
			<GlobeAltIcon className='w-24 h-24' color='white' />

			<p className='text-white text-3xl font-bold text-center '>
				Welcome to Web3 Dapp!
			</p>

			<p className='text-white text-xl text-center'>
				Get started by logging in with your MetaMask
			</p>

			<ConnectWallet btnTitle={'Login with MetaMask'} colorMode='light' />
		</div>
	)
}
