function FeatureBox({ feature }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="bg-white h-16 w-24 border border-primary rounded-full flex justify-center items-center ">
        <img
          src={feature.imgUrl}
          alt="feature Image"
          className="object-cover h-9 w-9 flex items-center justify-center overflow-hidden"
        />
      </div>
      <p className="pe-10 text-primary font-semibold text-lg">{feature.text}</p>
    </div>
  );
}

export default FeatureBox;
