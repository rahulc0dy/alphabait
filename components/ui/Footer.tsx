import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg-alt py-5">
      <div className="wrapper">
        <h3 className="text-center text-xl font-medium sm:text-left">
          Mini Programming Project by Group 7
        </h3>
        <div className="text-primary flex flex-col flex-wrap items-center justify-between pt-4 sm:flex-row">
          <h4 className="text-lg font-medium">Rahul Chakraborty</h4>
          <div className="bg-muted hidden h-6 w-0.5 sm:block" />
          <h4 className="text-lg font-medium">Souvik Mukherjee</h4>
          <div className="bg-muted hidden h-6 w-0.5 sm:block" />
          <h4 className="text-lg font-medium">Aritra Ghosh</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
