import React from "react";
import { Button } from "flowbite-react";

interface ButtonProps {
	name: string;
	onClick?: () => void;
}

const NewButton = ({ name, onClick }: ButtonProps) => {
	return <Button onClick={onClick}>{name}</Button>;
};

export default NewButton;
