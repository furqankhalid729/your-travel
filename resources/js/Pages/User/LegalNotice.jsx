import React from 'react'
import UserLayout from "../../Layout/UserLayout";
const LegalNotice = () => {
    return (
        <div className='p-4 md:p-8 mx-4 md:mx-16'>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Notice (Impressum)</h2>

                <div className="mb-6">
                    <p className="text-gray-700"><strong>Yourtrip24</strong></p>
                    <p className="text-gray-700">Weihermattstrasse 75</p>
                    <p className="text-gray-700">5000 Aarau</p>

                    <p className="text-gray-700 mt-2"><strong>Phone:</strong> +41 79 661 28 42</p>
                    <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:support@yourtrip24.com" className="text-blue-600 hover:underline">support@yourtrip24.com</a></p>

                    <p className="text-gray-700 mt-4"><strong>Authorized Representative:</strong> Mohammed Abou Alatta</p>
                    <p className="text-gray-700"><strong>Commercial Register:</strong> Registered in the commercial register of the canton of Aargau, (400) CH-020.3.032.558-8</p>
                    <p className="text-gray-700"><strong>VAT Number:</strong> CHE-114.356.254</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Impressum</h2>

                <div>
                    <p className="text-gray-700"><strong>Yourtrip24</strong></p>
                    <p className="text-gray-700">Weihermattstrasse 75</p>
                    <p className="text-gray-700">5000 Aarau</p>

                    <p className="text-gray-700 mt-2"><strong>Telefon:</strong> +41 79 661 28 42</p>
                    <p className="text-gray-700"><strong>E-Mail:</strong> <a href="mailto:support@yourtrip24.com" className="text-blue-600 hover:underline">support@yourtrip24.com</a></p>

                    <p className="text-gray-700 mt-4"><strong>Vertretungsberechtigte Person:</strong> Mohammed Abou Alatta</p>
                    <p className="text-gray-700"><strong>Handelsregister:</strong> Eingetragen im Handelsregister des Kantons Aargau, (400) CH-020.3.032.558-8</p>
                    <p className="text-gray-700"><strong>Mehrwertsteuernummer:</strong> CHE-114.356.254</p>
                </div>
            </div>
        </div>
    )
}
LegalNotice.layout = page => <UserLayout children={page} title="Legal Notice" />
export default LegalNotice
