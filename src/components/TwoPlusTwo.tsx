import ErrorMessages from "./ErrorMessages";
interface TwoPlusTwoProps {
  twoPlusTwoValue: string;
  onChangeTwoPlusTwoValue: (value: string) => void;
  validateField: (name: string) => string[];
}

const TwoPlusTwo: React.FC<TwoPlusTwoProps> = ({
  twoPlusTwoValue,
  onChangeTwoPlusTwoValue,
  validateField,
}) => (
  <>
    <div>
      <label htmlFor="two-plus-two">What is 2 + 2?</label>
      <select
        name="two-plus-two"
        id="two-plus-two"
        onChange={(e) => onChangeTwoPlusTwoValue(e.target.value)}
        value={twoPlusTwoValue}
      >
        <option value="4">4</option>
        <option value="not-4">Not 4</option>
      </select>
    </div>
    <ErrorMessages messages={validateField(twoPlusTwoValue)} />
  </>
);

export default TwoPlusTwo;
