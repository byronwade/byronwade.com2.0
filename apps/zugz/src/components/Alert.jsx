import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function WebsiteAlert() {
	return (
		<div className="m-1 mt-4 mx-6">
			<Alert className="bg-zugz-500 w-full">
				<RocketIcon className="h-4 w-4" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			</Alert>
		</div>
	);
}
