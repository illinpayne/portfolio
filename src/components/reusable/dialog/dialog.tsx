import {
	Dialog,
	DialogContent,
} from "@/components/ui/dialog";
import { useDialogStore } from "@/hooks/use-dialog.hook";

export default function ZoomDialog() {
	const { isOpen, children, closeDialog } = useDialogStore();
	if (!isOpen) return null;

	return (
		<Dialog open={isOpen} onOpenChange={closeDialog}>
			<DialogContent
				className="w-max h-screen max-2xl:h-screen p-0 border-0 outline-0 ring-0 bg-transparent"
				showCloseButton={false}
				onClick={() => closeDialog()}
			>
				{children}
			</DialogContent>
		</Dialog>
	);
}
