"use client";

import React, { useState } from "react";

type Props = {};

const TestimonialSection = (props: Props) => {
  const [data, setData] = useState<number>(0);
  return (
    <div className="relative flex flex-col md:flex-row justify-start items-start w-full px-4 sm:px-10 md:px-16 lg:px-20 py-28 md:py-36 gap-4 md:gap-8">
      TestimonialSection
      <div>
        <button onClick={() => setData(data + 1)}>INCREMENT</button>
        <div>{data}</div>
      </div>
    </div>
  );
};

export default TestimonialSection;
