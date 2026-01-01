"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const InboxContext = createContext(null);

const STORAGE_KEY = "tuhin_inbox_notification_count";

export const InboxProvider = ({ children }) => {
  const [inboxOpen, setInboxOpen] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) return;
      const parsed = Number(raw);
      if (!Number.isFinite(parsed)) return;
      setNotificationCount(Math.max(0, parsed));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(notificationCount));
    } catch {
      // ignore
    }
  }, [notificationCount]);

  const openInbox = () => setInboxOpen(true);
  const closeInbox = () => setInboxOpen(false);

  const triggerNewNotification = () => {
    setNotificationCount((prev) => prev + 1);
    setShowNotificationPopup(true);
  };

  const value = useMemo(
    () => ({
      inboxOpen,
      setInboxOpen,
      openInbox,
      closeInbox,
      notificationCount,
      setNotificationCount,
      showNotificationPopup,
      setShowNotificationPopup,
      triggerNewNotification,
    }),
    [inboxOpen, notificationCount, showNotificationPopup]
  );

  return <InboxContext.Provider value={value}>{children}</InboxContext.Provider>;
};

export const useInbox = () => {
  const ctx = useContext(InboxContext);
  if (!ctx) {
    throw new Error("useInbox must be used within InboxProvider");
  }
  return ctx;
};
