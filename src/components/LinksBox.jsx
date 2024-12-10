import Link from "./Link";

function LinksBox() {
  return (
    <div className="links-box">
      <Link siteLinks="GitHub" siteUrl="https://github.com" />
      <Link
        siteLinks="Frontend Mentor"
        siteUrl="https://www.frontendmentor.io/home"
      />
      <Link siteLinks="LinkedIn" siteUrl="https://www.linkedin.com/" />
      <Link siteLinks="Twitter" siteUrl="https://x.com/" />
      <Link siteLinks="Instagram" siteUrl="https://www.instagram.com/" />
    </div>
  );
}

export default LinksBox;
