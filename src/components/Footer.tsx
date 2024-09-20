const Footer = ({ links }: { links: string[] }) => {
  return (
    <div>
      {links.map((link) => {
        return <a href={link}>{link}</a>;
      })}
    </div>
  );
};

export default Footer;
