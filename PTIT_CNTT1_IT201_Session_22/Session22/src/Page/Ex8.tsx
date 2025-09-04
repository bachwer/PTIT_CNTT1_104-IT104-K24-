
export default function PersonalInfo() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form className="w-full max-w-2xl bg-white shadow-xl rounded-2xl border border-gray-100 p-10">
                {/* Header */}
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="relative">

                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Personal Information
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Update your profile details below
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* First name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <input
                            type="text"
                            placeholder="John"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Last name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <input
                            type="text"
                            placeholder="Doe"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Country
                        </label>
                        <select
                            className="mt-2 block w-full rounded-lg border-gray-300 bg-white px-4 py-2 pr-10 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            placeholder="New York"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Street address */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Street address
                        </label>
                        <input
                            type="text"
                            placeholder="123 Main St"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            State / Province
                        </label>
                        <input
                            type="text"
                            placeholder="California"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* ZIP */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            ZIP / Postal code
                        </label>
                        <input
                            type="text"
                            placeholder="10001"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-10 flex justify-end gap-x-4">
                    <button
                        type="button"
                        className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg
                       hover:bg-gray-200 transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-5 py-2 text-sm font-medium text-white rounded-lg
                       bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md
                       hover:from-indigo-500 hover:to-purple-500 transition-all duration-200"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}