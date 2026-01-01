"use client";

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import FloatingNav from "@/components/FloatingNav";
import NotificationPopup from "@/components/NotificationPopup";
import InboxModal from "@/components/InboxModal";
import { InboxProvider, useInbox } from "@/components/InboxContext";

const ShellInner = ({ children }) => {
  const {
    inboxOpen,
    setInboxOpen,
    openInbox,
    notificationCount,
    showNotificationPopup,
    setShowNotificationPopup,
  } = useInbox();

  return (
    <>
      <Header />
      <FloatingNav />

      <StairTransition />
      <PageTransition>{children}</PageTransition>

      <InboxModal
        open={inboxOpen}
        onOpenChange={setInboxOpen}
        notificationCount={notificationCount}
      />

      <NotificationPopup
        show={showNotificationPopup}
        onClose={() => setShowNotificationPopup(false)}
        onClick={() => {
          setShowNotificationPopup(false);
          openInbox();
        }}
      />
    </>
  );
};

const AppShell = ({ children }) => {
  return (
    <InboxProvider>
      <ShellInner>{children}</ShellInner>
    </InboxProvider>
  );
};

export default AppShell;
