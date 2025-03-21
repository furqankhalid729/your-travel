
import { Head, Link } from '@inertiajs/react';
import { FaCog, FaLock } from "react-icons/fa";
const SettingLayout = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div className="m-5 lg:m-10 flex flex-col lg:flex-row min-h-screen border border-[#afafaf]">
                <div className="lg:w-1/3 p-4 bg-white rounded-lg">
                    <div className="border-b border-[#afafaf]">
                        <div className="pb-4 mb-4 p-5 lg:p-10">
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                                Settings
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Here you can change and edit your needs.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 p-10 pb-4">
                        <Link
                            href={route('settings.general')}
                            className='flex items-center gap-3 mb-3'
                        >
                            <FaCog className="text-xl" />
                            General
                        </Link>
                        <Link
                            href={route('settings.security')}
                            className='flex items-center gap-3 mb-3'
                        >
                            <FaLock className="text-xl" />
                            Security
                        </Link>
                    </div>
                </div>
                <div className="lg:w-2/3 p-2 lg:p-4 border-l bg-white border-[#afafaf]">
                    {children}
                </div>
            </div>
        </>
    );
};

export default SettingLayout;
