const TourBookingPricing = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-lg border-t rounded-lg mb-5">
        <h1 className="font-semibold mx-3 mt-2">Trip Information</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 p-4">
          <p className="text-sm text-gray-600">
            <strong>Duration:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                4 Days, 3 Nights
              </span>
            </p>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Person:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                4 Adults, 3 Children
              </span>
            </p>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Slot:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                Sep 30 to Oct 2
              </span>
            </p>
          </p>
          <p className="text-sm text-gray-600">
            <strong>Price:</strong>
            <p className="mt-2">
              <span className="border p-1 rounded-lg text-gray-500">
                $300.00
              </span>
            </p>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 border shadow-lg bg-white p-4 rounded-lg">
          <h2 className="font-semibold text-gray-700 mb-4">Pricing</h2>
          <div className="grid grid-cols-4 gap-4">
            <p className="text-sm text-gray-600">
              <strong>Adults:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $150.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Cost:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $100.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Margin:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $50.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Total Price:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $200.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Children:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $100.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Cost:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $70.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Margin:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $30.00
                </span>
              </p>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Total Price:</strong>
              <p className="mt-2">
                <span className="border p-1 rounded-lg text-gray-500">
                  $170.00
                </span>
              </p>
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 border shadow-lg bg-white p-4 rounded-lg">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Tour Cost</h3>
            <p className="flex justify-between text-sm">
              Cost <span>$100</span>
            </p>
            <p className="flex justify-between text-sm">
              Margin <span>$50</span>
            </p>
            <p className="flex justify-between text-sm">
              Total Price <span>$30</span>
            </p>
            <p className="border-t pt-2 border-black flex justify-between text-sm">
              Total <span>$180</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingPricing;
