import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[824px] left-[0px] w-full flex flex-col items-end justify-start gap-[102px] max-w-full text-left text-91xl text-gray font-poppins mq450:gap-[25px] mq1125:gap-[51px] ${className}`}
    >
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
      <div className="w-[1712px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1460px] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full">
          <h1 className="m-0 h-[300px] flex-1 relative text-inherit leading-[120px] font-semibold font-inherit inline-block min-w-[494px] max-w-full mq450:text-14xl mq450:leading-[48px] mq800:text-36xl mq800:leading-[72px] mq800:min-w-full">
            Value proposition.
          </h1>
          <div className="h-[558px] w-28 flex flex-col items-start justify-start pt-[237px] px-0 pb-0 box-border ml-[-30px]">
            <div className="w-1 flex-1 relative box-border z-[1] border-r-[4px] border-solid border-blueviolet-100" />
          </div>
          <div className="w-[648px] flex flex-col items-start justify-start pt-[237px] px-0 pb-0 box-border max-w-full ml-[-30px] text-9xl text-black">
            <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px] mq800:gap-[40px]">
              <p className="m-0 self-stretch relative mq450:text-3xl">{`Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. `}</p>
              <button className="cursor-pointer [border:none] pt-[12.3px] px-[52px] pb-[13.3px] bg-[transparent] w-[349px] flex flex-row items-start justify-start box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-full w-[calc(100%_-_29px)] absolute !m-[0] top-[0px] right-[29px] bottom-[0px] left-[0px] shadow-[0px_0px_23.6px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-blueviolet-200" />
                <div className="flex-1 relative text-13xl font-poppins text-white text-left z-[1] mq450:text-lgi mq800:text-7xl">
                  View Services
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
