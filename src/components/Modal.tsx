"use client";
import React, { DialogHTMLAttributes, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IconX as CloseIcon } from "@tabler/icons-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Sync the native <dialog> state with the isOpen prop
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle ESC key or backdrop click via native dialog events
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = dialogRef.current?.getBoundingClientRect();
    console.log(dialogDimensions);
    if (!dialogDimensions) return;

    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      (dialogRef.current as HTMLDialogElement).close();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-2xl fixed inset-0 w-full max-w-7xl shadow-2xl p-0 outline-indigo-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {/* Close Button */}
      <div className="fixed top-4 right-6 z-10">
        <button
          onClick={() => (dialogRef.current as HTMLDialogElement).close()}
          className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
          aria-label="Close modal"
        >
          <CloseIcon size={24} />
        </button>
      </div>
      <div className="bg-white rounded-2xl relative min-h-50">
        {/* Modal Content */}
        <div className="p-8">{children}</div>
      </div>
    </dialog>,
    // document.getElementById("modal") as HTMLElement,
    document.body,
  );
}
