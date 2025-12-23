const AdmissionStatus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-lg">
        <h2 className="text-3xl font-bold text-green-600">
          ✅ Admission Request Submitted
        </h2>

        <p className="mt-4 text-gray-600">
          Your admission request has been sent successfully.
        </p>

        <p className="mt-2 text-orange-600 font-semibold">
          ⏳ Please wait 24 hours
        </p>

        <p className="mt-2 text-gray-500">
          Admin approval is required.  
          Once approved, your enrollment will be confirmed.
        </p>
      </div>
    </div>
  );
};

export default AdmissionStatus;
