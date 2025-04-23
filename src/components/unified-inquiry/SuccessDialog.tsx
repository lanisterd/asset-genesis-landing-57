
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<Props> = ({ open, onClose }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-xl">Thank You!</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <DialogDescription className="text-base">
          We&apos;ll get back to you within 3 working days. For urgent matters, contact us at{" "}
          <a
            href="mailto:token@1assetexchange.xyz"
            className="text-royalgold font-medium hover:underline"
          >
            token@1assetexchange.xyz
          </a>.
        </DialogDescription>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={onClose}
          className="bg-royalgold hover:bg-royalgold/90 text-midnight font-medium"
        >
          Close
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default SuccessDialog;
