"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current?.open) {
      const body = document.body
      body.style.overflowY = "hidden";

      ref.current?.showModal();
    }
  }, []);

  const handleModalClose = () => {
    const body = document.body;
    body.style.overflowY = "";

    router.back();
  };

  return (
    <div
      className="z-30 w-full h-full fixed top-0 left-0 bg-black bg-opacity-50"
      onClick={handleModalClose}
    >
      <dialog ref={ref} className="w-11/12 max-w-3xl rounded-lg overflow-hidden">
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </dialog>
    </div>
  );
}
