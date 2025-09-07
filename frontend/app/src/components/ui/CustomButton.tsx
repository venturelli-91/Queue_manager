import React from "react";

interface ButtonProps {
	name: string;
	onClick?: () => void;
}

const NewButton = ({ name, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className="w-full sm:w-auto block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none">
			{name}
		</button>
	);
};

export default NewButton;
