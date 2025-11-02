import Image from "next/image";
import { BookingDetailsProps } from "@/interfaces";


const OrderSummary: React.FC<{ bookingDetails: BookingDetailsProps }> = ({ bookingDetails }) => {
  const { propertyName, price, bookingFee, totalNights, startDate, image } = bookingDetails;

  const total = price + bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

    <div className="flex items-start mt-4 ">
  <Image
    src={image || "/asset/image5.png"}
    alt={propertyName}
    width={128}
    height={128}
    className="object-cover rounded-md"
  />

  <div className="ml-4 ">
    <h3 className="text-lg font-semibold">{propertyName}</h3>
    <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
    <p className="text-sm text-gray-500">
      {startDate} • {totalNights} Nights
    </p>
  </div>
</div>

      {/* ✅ Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
