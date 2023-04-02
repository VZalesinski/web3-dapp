import type { FC } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'

export const Loader: FC = () => {
	return (
		<div className='bg-[#091B18] min-h-screen w-full flex justify-center items-center flex-col gap-3'>
			<PropagateLoader color='white' size={24} />
		</div>
	)
}
