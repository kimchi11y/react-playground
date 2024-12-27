import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [fact, setFact] = useState(null); // Initialize as null

  const fetchData = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact); // Extract only the 'fact' property
      console.log(response.data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData(); // Fetch a new fact on form submission
  };

  return (
    <div>
      <h1 className="font-bold text-xl">Cat Facts!</h1>
      <form onSubmit={handleSubmit} className="bg-blue-400 p-4">
        {fact && <p>{fact}</p>} {/* Show fact only if it's not null */}
        <button type="submit" className="bg-red-600 text-white mt-2 px-4 py-2">
          Wanna hear a cat fact?
        </button>
      </form>
    </div>
  );
}

export default Weather;
