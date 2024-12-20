function FeatureBox({ feature }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="bg-white h-16 w-24 md:h-8 md:w-14 xl:h-16 xl:w-24  border border-primary rounded-full flex justify-center items-center ">
        <img
          src={feature.imgUrl}
          alt="feature Image"
          className="object-cover h-9 w-9 md:h-4 md:w-4 xl:h-9 xl:w-9 flex items-center justify-center overflow-hidden"
        />
      </div>
      <p className="pe-5 text-primary font-semibold text-lg md:text-xs xl:text-lg">
        {feature.text}
      </p>
    </div>
  );
}

export default FeatureBox;
