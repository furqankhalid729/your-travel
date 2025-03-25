import React from 'react'
import UserLayout from "../../Layout/UserLayout";
const TermsCondition = () => {
    return (
        <div className='p-4 md:p-8 mx-4 md:mx-16'>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">General Terms and Conditions (GTC)</h2>
                <div className="mb-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">1. Scope of Application</h3>
                    <p className="text-gray-700">1.1 These General Terms and Conditions (GTC) apply to all services offered by Yourtrip24, in Switzerland and abroad,particular the booking of hotels, tours, vehicles, and other travel services.</p>
                    <p className="text-gray-700">1.2 By using our website and booking services, you agree to these GTC.</p>

                    <h3 className="text-lg font-semibold text-gray-800">2. Conclusion of Contract</h3>
                    <p className="text-gray-700">2.1 A contract between you and Yourtrip24 is formed once we confirm your booking.</p>
                    <p className="text-gray-700">2.2 The booking confirmation will be sent via email or WhatsApp. The right to the service only arises upon receipt of the confirmation.</p>

                    <h3 className="text-lg font-semibold text-gray-800">3. Services</h3>
                    <p className="text-gray-700">3.1 We offer services including hotel bookings, guided tours, and vehicle rentals with drivers.</p>
                    <p className="text-gray-700">3.2 Service details are specified in the booking confirmation.</p>
                    <p className="text-gray-700">3.3 Vehicle rentals with drivers may be adjusted due to safety concerns or unforeseen circumstances.</p>

                    <h3 className="text-lg font-semibold text-gray-800">4. Prices and Payment Terms</h3>
                    <p className="text-gray-700">4.1 All prices are in Swiss francs (CHF) and include VAT where applicable.</p>
                    <p className="text-gray-700">4.2 Payment is accepted via credit card, bank transfer, or other agreed methods.</p>
                    <p className="text-gray-700">4.3 Full payment is required before service use.</p>

                    <h3 className="text-lg font-semibold text-gray-800">5. Cancellation and Withdrawal</h3>
                    <p className="text-gray-700">5.1 Cancellations must be made in writing before the service begins. The following cancellation fees apply:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Up to 30 days before service: 10% of the total price</li>
                        <li>29 to 7 days before service: 50% of the total price</li>
                        <li>6 days or less before service: 100% of the total price</li>
                    </ul>
                    <p className="text-gray-700">5.2 Yourtrip24 may cancel bookings due to unforeseen circumstances (e.g., force majeure, illness, extreme weather), with a full refund issued.</p>

                    <h3 className="text-lg font-semibold text-gray-800">6. Liability and Insurance</h3>
                    <p className="text-gray-700">6.1 Yourtrip24 is liable only for damages caused by intent or gross negligence.</p>
                    <p className="text-gray-700">6.2 We assume no liability for personal injury, property damage, or financial loss unless required by law.</p>
                    <p className="text-gray-700">6.3 Customers should obtain travel insurance covering cancellations, accidents, and medical costs.</p>

                    <h3 className="text-lg font-semibold text-gray-800">7. Obligations of the Customer</h3>
                    <p className="text-gray-700">7.1 Customers must follow instructions from Yourtrip24 staff during services.</p>
                    <p className="text-gray-700">7.2 For hotel bookings, customers must check in on time and comply with local rules.</p>
                    <p className="text-gray-700">7.3 For vehicle rentals, passengers must behave properly and avoid damaging vehicles.</p>

                    <h3 className="text-lg font-semibold text-gray-800">8. Data Protection</h3>
                    <p className="text-gray-700">8.1 Personal data is processed according to our privacy policy available on our website.</p>
                    <p className="text-gray-700">8.2 Customers agree to their data being used for booking and customer service purposes.</p>

                    <h3 className="text-lg font-semibold text-gray-800">9. Changes to the GTC</h3>
                    <p className="text-gray-700">9.1 Yourtrip24 may change these GTC at any time. Changes take effect upon publication on our website.</p>
                    <p className="text-gray-700">9.2 The current GTC apply to each booking.</p>

                    <h3 className="text-lg font-semibold text-gray-800">10. Jurisdiction and Applicable Law</h3>
                    <p className="text-gray-700">10.1 Swiss law applies, excluding international private law.</p>
                    <p className="text-gray-700">10.2 The exclusive jurisdiction for disputes related to these GTC is the registered office of Yourtrip24, as legally permitted.</p>
                </div>


                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Allgemeine Geschäftsbedingungen (AGB)
                </h1>

                <div className="space-y-6 text-gray-700">
                    {/* Section 1: Geltungsbereich */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">1. Geltungsbereich</h2>
                        <p>
                            1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen,
                            die Yourtrip24, Weihermattstrasse 75, 5000 Aarau, in der Schweiz und im Ausland anbietet.
                        </p>
                        <p>
                            1.2 Mit der Nutzung unserer Webseite und der Buchung einer unserer Dienstleistungen
                            erklären Sie sich mit diesen AGB einverstanden.
                        </p>
                    </section>

                    {/* Section 2: Vertragsabschluss */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">2. Vertragsabschluss</h2>
                        <p>
                            2.1 Ein Vertrag zwischen Ihnen und Yourtrip24 kommt zustande, sobald wir Ihre Buchung
                            schriftlich bestätigt haben.
                        </p>
                        <p>2.2 Die Buchungsbestätigung erfolgt per E-Mail oder per WhatsApp.</p>
                    </section>

                    {/* Section 3: Leistungen */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">3. Leistungen</h2>
                        <p>
                            3.1 Wir bieten verschiedene Dienstleistungen an, darunter Hotelbuchungen, geführte Touren
                            und Fahrzeugvermietungen mit Fahrer.
                        </p>
                        <p>
                            3.3 Bei Fahrzeugvermietungen mit Fahrer können Verfügbarkeiten und Routen aus
                            Sicherheitsgründen abweichen.
                        </p>
                    </section>

                    {/* Section 4: Preise */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">4. Preise und Zahlungsbedingungen</h2>
                        <p>4.1 Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive Mehrwertsteuer.</p>
                        <p>
                            4.2 Die Bezahlung erfolgt per Kreditkarte, Banküberweisung oder einer anderen
                            vereinbarten Zahlungsmethode.
                        </p>
                    </section>

                    {/* Section 5: Stornierung */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">5. Stornierung und Rücktritt</h2>
                        <p>Stornogebühren:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Bis 30 Tage vor Beginn: 10 % des Gesamtpreises</li>
                            <li>29 bis 7 Tage vor Beginn: 50 % des Gesamtpreises</li>
                            <li>6 Tage oder weniger: 100 % des Gesamtpreises</li>
                        </ul>
                        <p>
                            5.2 Yourtrip24 kann Buchungen stornieren, wenn höhere Gewalt die Dienstleistung unmöglich macht.
                        </p>
                    </section>

                    {/* Section 6: Haftung */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">6. Haftung und Versicherung</h2>
                        <p>6.1 Yourtrip24 haftet nur für Schäden durch grobe Fahrlässigkeit.</p>
                        <p>
                            6.3 Es wird empfohlen, eine eigene Reiseversicherung abzuschließen, die Stornierungen und
                            Unfälle abdeckt.
                        </p>
                    </section>

                    {/* Section 7: Pflichten des Kunden */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">7. Pflichten des Kunden</h2>
                        <p>
                            7.1 Der Kunde muss den Anweisungen von Yourtrip24 während Touren oder Fahrten Folge leisten.
                        </p>
                        <p>
                            7.2 Bei Fahrzeuganmietungen sorgt der Kunde dafür, dass keine Schäden am Fahrzeug entstehen.
                        </p>
                    </section>

                    {/* Section 8: Datenschutz */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">8. Datenschutz</h2>
                        <p>8.1 Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.</p>
                    </section>

                    {/* Section 9: Änderungen */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">9. Änderungen der AGB</h2>
                        <p>9.1 Yourtrip24 kann diese AGB jederzeit ändern. Die Änderungen treten mit Veröffentlichung in Kraft.</p>
                    </section>

                    {/* Section 10: Recht & Gerichtsstand */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">10. Gerichtsstand und anwendbares Recht</h2>
                        <p>10.1 Es gilt schweizerisches Recht unter Ausschluss des internationalen Privatrechts.</p>
                        <p>10.2 Gerichtsstand ist der Sitz von Yourtrip24.</p>
                    </section>
                </div>
            </div>
        </div >
    )
}
TermsCondition.layout = page => <UserLayout children={page} title="Terms And Condition" />
export default TermsCondition
