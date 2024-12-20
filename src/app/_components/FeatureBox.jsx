function FeatureBox({ feature }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="bg-white h-16 w-16 border border-primary rounded-full flex justify-center items-center p-2">
        {feature.imgUrl}
      </div>
      <p className="pe-14 lg:pe-20 text-primary font-semibold text-lg md:text-xs xl:text-lg">
        {feature.text}
      </p>
    </div>
  );
}

export default FeatureBox;
