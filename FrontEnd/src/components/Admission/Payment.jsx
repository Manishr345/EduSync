import React, { useState } from "react";

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openPaymentModal = () => {
    if (!paymentDetails.name || !paymentDetails.email || !paymentDetails.amount) {
      alert("Please fill all fields!");
      return;
    }
    setIsModalOpen(true);
  };

  const processPayment = () => {
    setPaymentStatus("Processing...");
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl text-white font-bold text-center mb-6">Fee Payment</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={paymentDetails.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-medium mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={paymentDetails.amount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter amount"
              required
            />
          </div>
          <button
            type="button"
            onClick={openPaymentModal}
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Proceed to Pay
          </button>
        </form>
        {paymentStatus && (
          <p className="mt-4 text-center font-medium text-green-600">
            {paymentStatus}
          </p>
        )}
      </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-full max-w-sm p-6 bg-white rounded shadow-md relative">
            <h3 className="text-xl font-semibold text-center mb-4">Confirm Payment</h3>
            <p className="text-center mb-6">
              <strong>Name:</strong> {paymentDetails.name} <br />
              <strong>Email:</strong> {paymentDetails.email} <br />
              <strong>Amount:</strong> ₹{paymentDetails.amount}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={processPayment}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
