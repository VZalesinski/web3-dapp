import React, { FC } from 'react'

interface NavButtonProps {
	title: string
	isActive?: boolean
	onClick?: () => void
}

export const NavButton: FC<NavButtonProps> = ({ title, isActive, onClick }) => {
	return (
		<button
			className={`${
				isActive && 'bg-[#036756]'
			} hover:bg-[#036756] text-white py-2 px-4 rounded font-bold`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
