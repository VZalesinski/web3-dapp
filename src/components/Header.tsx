import React from 'react'
import { NavButton } from './NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'

export const Header = () => {
	const address = useAddress()
	const disconnect = useDisconnect()

	return (
		<header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
			<div className='flex flex-col gap-1'>
				<h1 className='text-lg text-white font-bold'>Web3 Dapp</h1>
				<p className='text-xs text-emerald-500 truncate'>
					User: {address?.substring(0, 5)}...
					{address?.substring(address.length, address.length - 5)}
				</p>
			</div>

			<div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
				<div className='bg-[#0A1F1C] p-4 space-x-2 '>
					<NavButton title='Buy Tickets' isActive={true} />
					<NavButton title='Logout' onClick={disconnect} />
				</div>
			</div>

			<div className='flex flex-col ml-auto text-right'>
				<Bars3BottomRightIcon className='w-8 h-8 mx-auto text-white cursor-pointer' />
				<span className='md:hidden'>
					<NavButton title='Logout' onClick={disconnect} />
				</span>
			</div>
		</header>
	)
}
