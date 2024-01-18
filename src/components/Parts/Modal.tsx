"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current?.open) {
      const body = document.body;
      const scrollWidth = window.innerWidth - body.clientWidth;
      body.style.marginRight = `${scrollWidth}px`;
      body.style.overflowY = "hidden";

      ref.current?.showModal();
    }
  }, []);

  const onClose = () => {
    const body = document.body;
    body.style.overflowY = "";
    body.style.marginRight = "";

    router.back();
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <dialog ref={ref} className="w-2/3 max-w-lg rounded-lg overflow-hidden">
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </dialog>
    </div>
  );
}
