import React from 'react'
import {
	StarIcon,
	CurrencyDollarIcon,
	ArrowPathIcon,
	ArrowUturnDownIcon
} from '@heroicons/react/24/solid'
import toast from 'react-hot-toast'
import {
	useContract,
	useContractRead,
	useContractWrite
} from '@thirdweb-dev/react'
import { currency } from '@/utils/constants'
import { ethers } from 'ethers'

export const AdminControls = () => {
	const { contract, isLoading } = useContract(
		process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
	)

	const { data: totalCommission } = useContractRead(
		contract,
		'operatorTotalCommission'
	)

	const { mutateAsync: DrawWinnerTicket } = useContractWrite(
		contract,
		'DrawWinnerTicket'
	)

	const { mutateAsync: RefundAll } = useContractWrite(contract, 'RefundAll')

	const { mutateAsync: restartDraw } = useContractWrite(contract, 'restartDraw')

	const { mutateAsync: WithdrawCommission } = useContractWrite(
		contract,
		'WithdrawCommission'
	)

	const drawWinner = async () => {
		const notification = toast.loading('Picking a Lucky Winner...')

		try {
			const data = await DrawWinnerTicket([{}])

			toast.success('A Winner has been selected!', {
				id: notification
			})
		} catch (error) {
			toast.error('Whoops something went wrong!', {
				id: notification
			})
		}
	}

	const onWithdrawCommission = async () => {
		const notification = toast.loading('Withdrawing commission...')

		try {
			const data = await WithdrawCommission([{}])

			toast.success('Your Commission has been withdrawn successfully!', {
				id: notification
			})
		} catch (error) {
			toast.error('Whoops something went wrong!', {
				id: notification
			})
		}
	}

	const onRestartDraw = async () => {
		const notification = toast.loading('Restarting draw...')

		try {
			const data = await restartDraw([{}])

			toast.success('Draw restarted successfully!', {
				id: notification
			})
		} catch (error) {
			toast.error('Whoops something went wrong!', {
				id: notification
			})
		}
	}

	const onRefundAll = async () => {
		const notification = toast.loading('Refunding All...')

		try {
			const data = await RefundAll([{}])

			toast.success('All refunded successfully!', {
				id: notification
			})
		} catch (error) {
			toast.error('Whoops something went wrong!', {
				id: notification
			})
		}
	}

	return (
		<div className='text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border'>
			<h3 className='font-bold'>AdminControls</h3>

			<p className='mb-5'>
				Total Commission to be withdraw:{' '}
				{totalCommission &&
					ethers.utils.formatEther(totalCommission?.toString())}{' '}
				{currency}
			</p>

			<div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
				<button className='admin-button' onClick={drawWinner}>
					<StarIcon className='h-6 mx-auto mb-2' />
					Draw Winner
				</button>

				<button className='admin-button' onClick={onWithdrawCommission}>
					<CurrencyDollarIcon className='h-6 mx-auto mb-2' />
					Withdraw Commission
				</button>

				<button className='admin-button' onClick={onRestartDraw}>
					<ArrowPathIcon className='h-6 mx-auto mb-2' />
					Restart Draw
				</button>

				<button className='admin-button' onClick={onRefundAll}>
					<ArrowUturnDownIcon className='h-6 mx-auto mb-2' />
					Refund All
				</button>
			</div>
		</div>
	)
}
