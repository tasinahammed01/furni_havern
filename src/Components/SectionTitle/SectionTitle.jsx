
const SectionTitle = ({heading}) => {
  return (
    <div className="md:mt-20 md:mb-5">
      <h1 className="text-center md:text-4xl font-bold">{heading}</h1>
      <hr className="w-[20%] mx-auto" />
    </div>
  );
};

export default SectionTitle;
