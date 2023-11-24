import React from "react";

const Footer = () => {
  return (
    <div className="pb-8 ">
      <div className="space-y-10">
        <h1 className="text-center text-xl lg:text-4xl font-bold">
          Student Special: Discounted rates <br />
          on tropical getaways!
        </h1>
        <p className="text-center text-xs lg:text-sm">
          Let’s embody your beautiful ideas together, simplify the <br /> way
          you visualize your next big things.
        </p>
      </div>

      <div className="mt-6">
        <ul className="grid grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-wrap lg:justify-center lg:space-x-4 pl-6">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sales and Refunds</li>
          <li>Legal</li>
          <li>About</li>
          <li>Schedules</li>
          <li>Pricing</li>
          <li>Membership</li>
          <li>Joins</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
