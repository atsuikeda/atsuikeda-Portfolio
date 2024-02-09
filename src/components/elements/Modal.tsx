"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <dialog ref={ref} className="relative w-11/12 max-w-3xl rounded-lg">
        <button onClick={handleModalClose} className="absolute top-4 right-4 z-10">
        <FontAwesomeIcon icon={faXmark} className="h-7 hover:opacity-80" color="#1F2937" />
        </button>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </dialog>
    </div>
  );
}
