import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[5739px] left-[0px] w-full flex flex-col items-end justify-start gap-[101px] max-w-full text-left text-17xl text-gray font-poppins mq450:gap-[25px] mq1125:gap-[50px] ${className}`}
    >
      <div className="self-stretch h-[751px] relative max-w-full">
        <div className="absolute top-[0px] left-[249px] bg-gainsboro-300 w-[518px] flex flex-col items-start justify-start pt-[102px] pb-[122px] pr-5 pl-[60px] box-border gap-[26px] max-w-full">
          <div className="w-[518px] h-[750px] relative bg-gainsboro-300 hidden max-w-full" />
          <div className="w-[413px] relative leading-[50px] font-semibold inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[30px] mq800:text-10xl mq800:leading-[40px]">
            Sub-title goes here, which is 18 points smaller
          </div>
          <p className="m-0 w-[391px] relative text-5xl text-black inline-block max-w-full z-[1] mq450:text-lgi">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
        </div>
        <div className="absolute top-[750px] left-[0px] box-border w-[1729px] h-px z-[1] border-t-[1px] border-solid border-black" />
      </div>
      <div className="w-[1700px] flex flex-row items-start justify-end py-0 px-[75px] box-border max-w-full text-29xl text-black mq1350:pl-[37px] mq1350:pr-[37px] mq1350:box-border">
        <div className="flex-1 flex flex-row items-start justify-start pt-[73.1px] px-[116px] pb-[55.9px] box-border relative max-w-full mq800:pl-[29px] mq800:pr-[29px] mq800:box-border mq1125:pl-[58px] mq1125:pr-[58px] mq1125:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro-200" />
          <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-10xl mq800:text-19xl">
            Click to expand and see details
          </h3>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
