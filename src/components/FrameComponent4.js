import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[5120px] left-[0px] w-full flex flex-col items-end justify-start gap-[93.5px] max-w-full text-center text-13xl text-gray font-poppins mq450:gap-[23px] mq1125:gap-[47px] ${className}`}
    >
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
      <div className="w-[1677px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1409px] flex flex-col items-start justify-start gap-[14px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[46px] max-w-full mq800:gap-[23px]">
            <div className="w-[1380px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[924px] relative font-semibold inline-block shrink-0 max-w-full mq450:text-lgi mq800:text-7xl">
                Testimonial
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-23xl mq1350:flex-wrap mq1350:justify-center">
              <div className="w-[1255px] flex flex-row items-start justify-center gap-[54px] max-w-full mq800:gap-[27px] mq1125:flex-wrap">
                <div className="w-[70px] flex flex-col items-start justify-start pt-[66px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-[14.7px] relative max-w-full overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/arrow-2.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[50px] font-semibold inline-block min-w-[735px] max-w-full mq450:text-6xl mq450:leading-[30px] mq800:text-15xl mq800:leading-[40px] mq1125:min-w-full">
                  Great work! Love the way these guys approach a problem and
                  come up with a solution.
                </div>
              </div>
              <div className="w-[53px] flex flex-col items-start justify-end pt-0 px-0 pb-[19.3px] box-border">
                <img
                  className="self-stretch h-[14.7px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[1379px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-9xl text-black">
            <div className="w-[733px] relative inline-block shrink-0 max-w-full">
              <p className="m-0">
                Detailed testiomonial content goes here, in multile lines.
                Detailed testiomonial content goes here, in multile lines.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 text-xl">
                <b>Steve Jobs</b>
              </p>
              <p className="m-0 text-base">CEO - APPLE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-black" />
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
