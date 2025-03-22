import { Head } from '@inertiajs/react';
import Header from '../Components/User/Header';
import Footer from '../Components/User/Footer';
import { useEffect } from 'react';

export default function UserLayout({ title, children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widget.superchat.de/snippet.js?applicationKey=WCRGamy315p96kkgEzwLDWNvJZ";
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head title={title} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="flex flex-grow overflow-hidden">
            <div
              className="w-full  overflow-hidden overflow-y-auto"
              scroll-region="true"
            >
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
