import React from "react";
import CustomForm from "@/components/ui/CustomForm";

export default function Home() {
	return (
		<>
			<div className="bg-blue-100 min-h-screen w-full">
				<div className="flex justify-center pt-[120px] text-3xl font-bold text-blue-900">
					<h1>Gerenciador de filas</h1>
				</div>
				<div className="flex">
					<CustomForm />
				</div>
			</div>
		</>
	);
}
