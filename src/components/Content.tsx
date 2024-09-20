const Contet = ({
  content,
  isActive,
}: {
  content: string;
  isActive: boolean;
}) => {
  return <div>{isActive ? content : ""}</div>;
};

export default Contet;
