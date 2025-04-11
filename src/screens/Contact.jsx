import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { countries } from "../static/data";
import { ICONS } from "../static/icons";

const Contact = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(customerData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (s) => s.toUpperCase())} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "customerFeedbacksegun"), {
        ...customerData,
        timestamp: Date.now(),
      });

      toast.success("Feedback submitted successfully!");
      setCustomerData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        country: "",
        jobTitle: "",
        jobDetails: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Error submitting feedback");
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div className="md:w-[85%] w-full mx-auto md:my-20 my-6">
        <div className="shadow-2xl bg-white rounded-md">
          <div className="flex justify-between md:flex-row flex-col md:p-5 p-1 space-x-6">
            <div className="md:w-[60%] w-full">
              <h2 className="md:hidden block text-2xl font-semibold font-mw text-center py-2">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="md:p-6 p-2 md:mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "name", placeholder: "Full Name" },
                    {
                      name: "email",
                      placeholder: "Email Address",
                      type: "email",
                    },
                    { name: "phone", placeholder: "Phone Number", type: "tel" },
                    { name: "companyName", placeholder: "Company Name" },
                    { name: "country", placeholder: "Country" },
                    { name: "jobTitle", placeholder: "Job Title" },
                  ].map(({ name, placeholder, type = "text" }) => (
                    <div key={name}>
                      {name === "country" ? (
                        <select
                          name="country"
                          value={customerData.country}
                          onChange={handleChange}
                          className={`p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full ${
                            errors.country ? "border border-red-500" : ""
                          }`}
                        >
                          <option value="">Select Country</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          value={customerData[name]}
                          onChange={handleChange}
                          className={`p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full ${
                            errors[name] ? "border border-red-500" : ""
                          }`}
                        />
                      )}
                      {errors[name] && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors[name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <textarea
                    name="jobDetails"
                    placeholder="Describe your job responsibilities or project requirements"
                    value={customerData.jobDetails}
                    onChange={handleChange}
                    className={`w-full h-[150px] p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] ${
                      errors.jobDetails ? "border border-red-500" : ""
                    }`}
                  ></textarea>
                  {errors.jobDetails && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.jobDetails}
                    </p>
                  )}
                </div>

                <div className="flex justify-between pt-2">
                  <input type="checkbox" className="w-10 h-10 cursor-pointer" />
                  <p className="md:text-sm text-xs pl-3">
                    Yes, I would like to receive marketing communications
                    regarding EnterpriseEdge products, services, and events. I
                    can unsubscribe at any time.
                  </p>
                </div>

                <p className="md:text-sm text-xs py-3">
                  By registering, you confirm that you agree to the processing
                  of your personal data by Salesforce as described in the
                  <span className="text-blue-300 underline pl-1 cursor-pointer">
                    Privacy Statement.
                  </span>
                </p>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className={`mt-4 w-full md:text-2xl text-xl md:font-bold font-semibold cursor-pointer text-white py-3 rounded ${
                      loading ? "bg-zinc-500" : "bg-black hover:bg-black/50"
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
            <div className="md:mt-10 mt-5 font-mw md:w-[40%] w-full md:px-0 px-4 py-3 md:py-0">
              <h2 className="text-3xl font-bold text-blue-500 pb-2">
                Talk to Sales.
              </h2>
              <h5 className="text-base py-3">
                Give us some info so the right person can get back to you.
              </h5>
              <div className="flex items-center space-x-4 py-8">
                <div className="flex justify-center items-center rounded-full p-3 bg-blue-100">
                  <ICONS.phone size={25} />
                </div>
                <h5>Need help now? Call +0123456789</h5>
              </div>
              <div className="">
                <h4 className="font-bold text-xl">More questions?</h4>
                <p className="text-sm">
                  For billing and tech support, visit
                  <span className="text-blue-400 cursor-pointer underline pl-1">
                    EnterpriseEdge Help.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
