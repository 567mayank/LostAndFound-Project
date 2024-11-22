import React from 'react';

function ItemInfo({
  item_name, setItem_name,
  item_category, setItem_category,
  item_description, setItem_description,
  location_lost, setLocation_lost,
  date_lost, setDate_lost,
  handleNext, handlePrev
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Enter Item Information</h2>
      <form className="space-y-4" onSubmit={handleNext}>
        <div>
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            id="itemName"
            value={item_name}
            onChange={(e) => setItem_name(e.target.value)}
            placeholder="e.g., Lost Wallet"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Item Category</label>
          <input
            type="text"
            id="category"
            value={item_category}
            onChange={(e) => setItem_category(e.target.value)}
            placeholder="e.g., Wallet, Phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            value={item_description}
            onChange={(e) => setItem_description(e.target.value)}
            placeholder="e.g., Black leather wallet with cards"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location Lost</label>
          <input
            type="text"
            id="location"
            value={location_lost}
            onChange={(e) => setLocation_lost(e.target.value)}
            placeholder="e.g., Coffee Shop, Central Park"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="dateLost" className="block text-sm font-medium text-gray-700">Date Lost</label>
          <input
            type="date"
            id="dateLost"
            value={date_lost}
            onChange={(e) => setDate_lost(e.target.value)}
            placeholder="e.g., 2024-11-15"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div >
            <button
                type="submit"
                // onClick={handleNext}
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Next
            </button>
        </div>
      </form>
    </div>
  );
}

export default ItemInfo;
