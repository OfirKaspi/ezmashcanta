"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const CookieNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-notice fixed bottom-0 right-0 left-0 z-50 text-sm p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
      <p className="mb-2 md:mb-0 text-center">
        האתר עושה שימוש בעוגיות (Cookies) לצורך שיפור חוויית המשתמש, כולל הטמעות של אנליטיקה בסיסית.
      </p>
      <Button onClick={acceptCookies}>
        הבנתי
      </Button>
    </div>
  );
};

export default CookieNotice;
