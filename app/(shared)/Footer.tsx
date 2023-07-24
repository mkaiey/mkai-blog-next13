import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            As the world embraces the power of AI, it is set to become a dominant force in shaping the future landscape of technology, ushering in a new era of possibilities and advancements that will undoubtedly impact our world in ways we
            can only imagine.
          </p>
          <p>© mkai-blog | All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">link for our partnership</p>
          <p className="my-5">link for our partnership</p>
          <p className="my-5">link for our partnership</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Thank you for joining us on this journey, come on strive for a bright future together!.</p>
          <p>(888)543-6789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
