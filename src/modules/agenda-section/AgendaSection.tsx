import React, { FC, useEffect, useState } from "react";

export const AgendaSection: FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://staging17.o9solutions.com/wp-json/o9/v1/page",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any necessary headers
            },
            body: JSON.stringify({ post_id: 41298 }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const result = await response.json();
        setData(result); // Set your data to state or do something with it
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};
