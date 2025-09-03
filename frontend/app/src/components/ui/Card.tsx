import React from "react";

interface CardProps {
	title: string;
	content: string;
}

const NewCard = ({ title, content }: CardProps) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default NewCard;
