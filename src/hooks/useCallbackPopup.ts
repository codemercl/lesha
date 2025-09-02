'use client';

import { useState } from 'react';

export const useCallbackPopup = () => {
  const [isCallbackPopupOpen, setIsCallbackPopupOpen] = useState(false);

  const openCallbackPopup = () => setIsCallbackPopupOpen(true);
  const closeCallbackPopup = () => setIsCallbackPopupOpen(false);

  return {
    isCallbackPopupOpen,
    openCallbackPopup,
    closeCallbackPopup
  };
};
