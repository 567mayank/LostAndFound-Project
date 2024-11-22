import React from 'react';

function PersonalInfo({
  user_name, setUser_name,
  user_email, setUser_email,
  user_phone, setUser_phone,
  handleNext, handlePrev
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Enter Your Personal Information</h2>
      <form className="space-y-4" onSubmit={handleNext}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            placeholder="e.g., John Doe"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={user_email}
            onChange={(e) => setUser_email(e.target.value)}
            placeholder="e.g., john.doe@example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={user_phone}
            onChange={(e) => setUser_phone(e.target.value)}
            placeholder="e.g., +1 (555) 123-4567"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className='flex gap-x-2'> 
            <button
                type="button"
                onClick={handlePrev}
                className="w-full py-2 bg-zinc-500 text-white font-semibold rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cl-500 focus:ring-opacity-50"
            >
                Back
            </button>
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
