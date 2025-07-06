import ScrollDownDivider from "./ScrollDownDivider";
import SlantedScrollDivider from "./SlantedScrollDivider";

const DoubleScrollDivider: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Straight white scroll divider on top */}
      <ScrollDownDivider />

      {/* Slanted pink scroll divider - positioned so top-right corners align */}
      <div className="relative -mt-15">
        <SlantedScrollDivider />
      </div>
    </div>
  );
};

export default DoubleScrollDivider;
