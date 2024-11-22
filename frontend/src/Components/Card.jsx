import React from "react";

const Card = ({prop}) => {

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md ">
      <div className="space-y-4">

        {/* Item Information */}
        <div className="flex flex-col lg:flex-row justify-between gap-y-2 ">
          <div className="flex gap-x-4">
            <p className="font-semibold">Item Name:</p>
            <p>{prop.item_name}</p>
          </div>
          <div className="flex gap-x-4">
            <p className="font-semibold">Category:</p>
            <p>{prop.item_category}</p>
          </div>
        </div>

        {/* Location and Date */}
        <div className="flex flex-col lg:flex-row justify-between gap-y-2 ">
          <div className="flex gap-x-4">
            <p className="font-semibold">Location Lost:</p>
            <p>{prop.location_lost}</p>
          </div>
          <div className="flex gap-x-4">
            <p className="font-semibold">Date Lost:</p>
            <p>{prop.date_lost}</p>
          </div>
        </div>

        {/* Description */}
        <div className="flex gap-x-4 md:col-span-2">
        <p className="font-semibold">Description:</p>
        <p>{prop.item_description}</p>
        </div>

        {/* User Information */}
        <div className="flex flex-col lg:flex-row justify-between gap-y-2">
          <div>
            <p className="font-semibold">{prop.status==='lost'?"Owner":"Finder"}'s Name:</p>
            <p>{prop.user_name}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{prop.user_email}</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>{prop.user_phone}</p>
          </div>
        </div>

        {/* Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex gap-x-4">
            <p className="font-semibold">Status:</p>
            <p className={`font-semibold ${prop.status === "lost" ? "text-red-600" : "text-green-600"}`}>
              {prop.status}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;