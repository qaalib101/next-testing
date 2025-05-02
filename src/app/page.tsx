"use client";

import {useEffect, useState} from "react";
import {Advocate} from "@/app/ui/interfaces/advocates";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  useEffect(() => {
    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
          advocate.firstName.includes(searchTerm) ||
          advocate.lastName.includes(searchTerm) ||
          advocate.city.includes(searchTerm) ||
          advocate.degree.includes(searchTerm) ||
          advocate.specialties.includes(searchTerm) ||
          advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  }, [searchTerm]); // re-run when searchTerm changes

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
      <main className="p-6 bg-[#FAFAFA] min-h-screen text-[#2D2D2D]">
          <h1 className="text-4xl font-bold mb-6">Solace Advocates</h1>

          <div className="mb-8">
              <p className="text-lg font-medium mb-2">Search</p>
              <p className="mb-2">
                  Searching for: <span id="search-term" className="font-semibold" />
              </p>
              <div className="flex items-center gap-4">
                  <input
                      className="px-4 py-2 border border-gray-300 rounded bg-white text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                      placeholder="Enter search term"
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                      onClick={onClick}
                      className="px-4 py-2 bg-[#4A90E2] text-white font-semibold rounded hover:bg-[#3A78C2] transition-colors"
                  >
                      Reset Search
                  </button>
              </div>
          </div>

          <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 border-collapse text-sm">
                  <thead className="bg-[#E5E7EB]">
                  <tr>
                      {[
                          "First Name",
                          "Last Name",
                          "City",
                          "Degree",
                          "Specialties",
                          "Years of Experience",
                          "Phone Number",
                      ].map((heading) => (
                          <th
                              key={heading}
                              className="px-4 py-2 border border-gray-300 text-left font-semibold"
                          >
                              {heading}
                          </th>
                      ))}
                  </tr>
                  </thead>
                  <tbody>
                  {filteredAdvocates.map((advocate, idx) => (
                      <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-[#F3F4F6]"}
                      >
                          <td className="px-4 py-2 border border-gray-300">{advocate.firstName}</td>
                          <td className="px-4 py-2 border border-gray-300">{advocate.lastName}</td>
                          <td className="px-4 py-2 border border-gray-300">{advocate.city}</td>
                          <td className="px-4 py-2 border border-gray-300">{advocate.degree}</td>
                          <td className="px-4 py-2 border border-gray-300">
                              {advocate.specialties.map((s, i) => (
                                  <div key={i}>{s}</div>
                              ))}
                          </td>
                          <td className="px-4 py-2 border border-gray-300">{advocate.yearsOfExperience}</td>
                          <td className="px-4 py-2 border border-gray-300">{advocate.phoneNumber}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </main>
  );
}
