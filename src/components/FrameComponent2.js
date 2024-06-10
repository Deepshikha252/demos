import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[1675px] left-[0px] w-full flex flex-col items-end justify-start gap-[120px] max-w-full text-left text-53xl text-gray font-poppins mq450:gap-[30px] mq1125:gap-[60px] ${className}`}
    >
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
      <div className="w-[1647px] flex flex-row items-start justify-end py-0 px-[61px] box-border max-w-full mq1350:pl-[30px] mq1350:pr-[30px] mq1350:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[166px] max-w-full mq450:gap-[21px] mq800:gap-[41px] mq1350:flex-wrap mq1350:gap-[83px]">
          <h1 className="m-0 w-[655px] relative text-inherit font-semibold font-inherit inline-block shrink-0 min-w-[655px] max-w-full mq450:text-24xl mq800:text-39xl mq1125:min-w-full mq1350:flex-1">
            Introduction line heading or value proposition.
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-[38px] px-0 pb-0 box-border min-w-[458px] max-w-full text-9xl text-black mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[63px] max-w-full mq450:gap-[16px] mq800:gap-[31px]">
              <p className="m-0 w-[639px] relative inline-block max-w-full mq450:text-3xl">
                Description text paragraph can go here in 200 words. This can be
                multi-line text. Description text paragraph can go here in 200
                words. This can be multi-line text. Description text paragraph
                can go here in 200 words. This can be multi-line text.
                Description text paragraph can go here in 200 words. This can be
                multi-line text.
              </p>
              <div className="self-stretch flex flex-row items-start justify-start gap-[64px] mq450:gap-[16px] mq800:flex-wrap mq800:gap-[32px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[208px]">
                  <button className="cursor-pointer [border:none] pt-[12.3px] px-[23px] pb-[13.3px] bg-[transparent] self-stretch flex flex-row items-start justify-end relative whitespace-nowrap">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_0px_23.6px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-blueviolet-200" />
                    <div className="w-[244.2px] relative text-13xl font-poppins text-white text-left inline-block shrink-0 z-[1]">
                      View Services
                    </div>
                  </button>
                </div>
                <button className="cursor-pointer [border:none] pt-[12.3px] px-[23px] pb-[13.3px] bg-whitesmoke flex-[0.8563] shadow-[0px_0px_23.6px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs flex flex-row items-start justify-end box-border min-w-[208px] whitespace-nowrap hover:bg-gainsboro-100 mq450:flex-1">
                  <div className="h-[72.5px] w-80 relative shadow-[0px_0px_23.6px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-whitesmoke hidden" />
                  <div className="w-[244.2px] relative text-13xl font-poppins text-black text-left inline-block shrink-0 z-[1]">
                    Case Study
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
