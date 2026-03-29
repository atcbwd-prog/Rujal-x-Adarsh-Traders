function Footer() {
  const handleClick = () => {
    window.open("https://www.adarshtradingcompany.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="mt-auto text-center bg-[#DED2C5] text-lg border-t py-3">
      Copyright © 2025{" "}
      <span
        onClick={handleClick}
        className="text-blue-600 hover:underline cursor-pointer"
      >
        Adarsh Trading Company Pvt Ltd.
      </span>{" "}
      All Rights Reserved
    </footer>
  );
}

export default Footer;
