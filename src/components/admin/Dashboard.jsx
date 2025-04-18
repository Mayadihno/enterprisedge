import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const q = query(
          collection(db, "customerFeedbacksegun"),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <React.Fragment>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="md:w-[85%] w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Admin Dashboard
          </h2>

          <div className="bg-white md:w-[30%] w-full mx-auto text-center newsreader shadow-md rounded-md p-4 mb-6">
            <p className="text-lg">
              Total Feedback:{" "}
              <span className="font-bold text-blue-600">
                {feedbacks.length}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {feedbacks.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-md p-4 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                </div>

                <p className="text-sm text-gray-500 ">
                  <span className="font-semibold pr-1 text-black">
                    Company Name:
                  </span>
                  {item.companyName}
                </p>
                <p className="text-sm text-gray-500 py-1">
                  <span className="font-semibold pr-1 text-black">
                    Job title:
                  </span>
                  {item.jobTitle}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold pr-1 text-black">Email:</span>
                  {item.email}
                </p>
                <p className="text-sm text-gray-500 py-1">
                  <span className="font-semibold pr-1 text-black">
                    Country:
                  </span>
                  {item.country}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold pr-1 text-black">
                    Phone Number:
                  </span>
                  {item.phone}
                </p>

                <div className="mt-3">
                  <p className="text-gray-700 text-sm whitespace-pre-line">
                    <strong>Job Details:</strong> {item.jobDetails}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
