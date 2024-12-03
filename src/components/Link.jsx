function Link({ siteLinks, siteUrl = "https://old.reddit.com/" }) {
  return (
    <a className="site-links" target="_blank" rel="noreferrer" href={siteUrl}>
      {siteLinks}
    </a>
  );
}

export default Link;
