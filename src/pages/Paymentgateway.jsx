import React from "react";
import { MasterCard, Paypal, Paystack } from "../services/svgs";

export default function Paymentgateway() {
  return (
    <div className="flex flex-col justify-center  space-y-6 p-4">
      <h1 className="text-zinc-900 md:text-5xl text-3xl font-bold pt-5">
        PaymentGateway
      </h1>
      <p className="text-center">
        Select any Payment Method of your choice, applicable to all countries.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 items-start justify-center">
        <button className="flex bg-slate-200 justify-start w-full md:w-60 p-2 font-semibold py-4 items-center space-x-2 shadow-md">
          <Paystack />
          <span>Paystack</span>
        </button>

        <button className="flex bg-slate-200 justify-start w-full md:w-60 p-2 font-semibold py-4 items-center space-x-2 shadow-md ">
          <Paypal />
          <span>Paypal</span>
        </button>

        <button className="flex bg-slate-200 justify-start w-full md:w-60 p-2 font-semibold py-4 items-center space-x-2 shadow-md">
          <MasterCard />
          <span>Mastercard</span>
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Note: Ensure your payment method is supported in your region.</p>
        <p>If you encounter any issues, please contact our support team.</p>
      </div>


    </div>
  );
}
