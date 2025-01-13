import { Head } from '@inertiajs/react';
import Header from '../Components/User/Header';
import Footer from '../Components/User/Footer';

export default function UserLayout({ title, children }) {
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
