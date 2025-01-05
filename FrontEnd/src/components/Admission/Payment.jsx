import React, { useEffect, useState } from "react";
import AdmissionNav from "./AdmissionNav";
import { useContext } from "react";
import AdmissionContext from "../../contexts/admission/AdmissionContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const context = useContext(AdmissionContext);
  const [fees, setFees] = useState('');
  const [error, setError] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState({
    email: "",
    amount: "",
  });
  const [paymentStatus, setPaymentStatus] = useState("");
  const [password, setPassword] = useState(""); // State to hold the password after successful payment
  
  useEffect(() => {
    setFees(context.payFee);
    console.log(fees);
  }, [context.payFee, fees]); // Added dependencies to avoid unnecessary re-renders

  const handlePrev = () => {
    navigate('/admission/statement');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "amount") {
      if (value === fees) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const openPaymentModal = () => {
    if (!paymentDetails.email || !paymentDetails.amount) {
      alert("Please fill all fields!");
      return;
    }
    setIsModalOpen(true);
  };

  const processPayment = () => {
    setPaymentStatus("Processing...");
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
      setPassword(context.showPassword()); // Get the password from context after payment
      setIsModalOpen(false);
      context.studentSignup(); // Proceed with student signup
    }, 2000);
  };

  return (
    <>
      <AdmissionNav />
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-full mb-52 max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl text-white font-bold text-center mb-6">Fee Payment</h2>
          <form>
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
            <div>
              <label className="text-white" htmlFor="fees">Fees</label>
              <div className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1">
                This is the amount you have to pay: {fees || 'fees ayega yaha'}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-medium mb-1">Amount</label>
              <input
                type="text"
                name="amount"
                value={paymentDetails.amount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter amount"
                required
              />
            </div>
            {error && <p className="w-full mb-4 bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1">Please enter the amount displayed</p>}
            <button
              type="button"
              onClick={openPaymentModal}
              className={`w-full py-2 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error ? "bg-gray-600 text-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={error}
            >
              Proceed to Pay
            </button>
          </form>
          {paymentStatus && (
            <div className="mt-4 text-center font-medium text-green-600">
              <p>{paymentStatus}</p>
              {paymentStatus === "Payment Successful!" && (
                <div className="mt-4 bg-green-100 text-green-800 p-4 rounded-md">
                  <p>Your login password is: <strong>{password}</strong></p>
                </div>
              )}
            </div>
          )}
          <div className="mt-4 flex justify-between">
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Prev
            </button>
          </div>
        </div>

        {/* Payment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-full max-w-sm p-6 bg-white rounded shadow-md relative">
              <h3 className="text-xl font-semibold text-center mb-4">Confirm Payment</h3>
              <p className="text-center mb-6">
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
    </>
  );
};

export default Payment;
