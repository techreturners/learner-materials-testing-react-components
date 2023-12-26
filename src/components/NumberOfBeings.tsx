import ErrorMessages from "./ErrorMessages";

interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeBeings: (value: string) => void;
  validateField: (name: string) => string[];
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeBeings,
  validateField,
}) => (
  <>
    <div>
      <label htmlFor="number-of-beings">Number Of Beings</label>
      <input
        type="text"
        name="number-of-beings"
        id="number-of-beings"
        value={numberOfBeings}
        onChange={(e) => onChangeBeings(e.target.value)}
      />
    </div>
    <ErrorMessages messages={validateField(numberOfBeings)} />
  </>
);

export default NumberOfBeings;
