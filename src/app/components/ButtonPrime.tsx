interface BtnProp {
  children: any;
  onSelect: any;
  index: Number;
  selected: Number;
}
const ButtonPrime: React.FC<BtnProp> = ({
  children,
  index,
  onSelect,
  selected,
}) => {
  return (
    <div
      className={`remove-def px-2 md:px-6 py-2 text-xs md:text-base border-2 text-center h-fit rounded-full hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer transition-all duration-200 ${
        selected === index
          ? "bg-secondary text-white border-secondary"
          : "border-tertiary text-tertiary"
      }`}
      onClick={() => onSelect(index)}
    >
      {children}
    </div>
  );
};

export default ButtonPrime;
