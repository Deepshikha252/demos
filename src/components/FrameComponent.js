import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[7793px] left-[0px] w-full flex flex-col items-start justify-start gap-[87px] max-w-full text-left text-13xl text-white font-poppins mq450:gap-[22px] mq1125:gap-[43px] ${className}`}
    >
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
      <div className="w-[1706px] flex flex-row items-start justify-center pt-0 px-5 pb-3 box-border max-w-full">
        <div className="w-[1500px] flex flex-col items-start justify-start pt-0 px-0 pb-[142px] box-border relative gap-[133px] max-w-full mq450:gap-[17px] mq800:gap-[33px] mq1350:gap-[66px]">
          <div className="w-full h-[601px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-black" />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
            <div className="h-[84px] w-[733px] relative bg-black max-w-full" />
            <div className="h-[84px] flex-1 relative bg-silver min-w-[499px] max-w-full mq800:min-w-full" />
          </div>
          <div className="w-[1478px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-5xl">
            <div className="w-[1282px] flex flex-col items-start justify-start gap-[98px] max-w-full mq450:gap-[24px] mq800:gap-[49px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[81px] mq450:gap-[20px] mq800:gap-[40px]">
                <b className="relative z-[1] mq450:text-lgi">CATEGORY</b>
                <b className="self-stretch relative text-17xl z-[1] mq450:text-3xl mq800:text-10xl">
                  Introduction line heading or value proposition goes here in 4
                  lines.
                </b>
              </div>
              <button className="cursor-pointer [border:none] py-2.5 px-[37px] bg-gold-100 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gold-200">
                <b className="relative text-5xl font-poppins text-black text-left">
                  KNOW MORE
                </b>
              </button>
            </div>
          </div>
          <div className="absolute !m-[0] top-[18px] left-[45px] text-gold-100 z-[1] mq450:text-lgi mq800:text-7xl">
            Tab Heading 01
          </div>
          <div className="absolute !m-[0] top-[18px] right-[420px] text-black z-[1] mq450:text-lgi mq800:text-7xl">
            Tab Heading 02
          </div>
        </div>
      </div>
      <div className="self-stretch h-3 flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
        <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-black" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[54px] box-border max-w-full mq1350:pl-[27px] mq1350:box-border">
        <img
          className="w-[1958px] relative max-h-full object-cover max-w-[117%] shrink-0"
          loading="lazy"
          alt=""
          src="/group-14@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
