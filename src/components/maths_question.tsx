
interface MathsQuestionProps {
	mathsAnswer: string;
	onChangeMathsAnswer: (value: string) => void;
}

export const MathsQuestion : React.FC<MathsQuestionProps> = ({mathsAnswer, onChangeMathsAnswer}) => (
    <>
        <label htmlFor='mathsQuestion'>What is 2 + 2?</label>
        <select name="mathsQuestion" value={mathsAnswer} onChange={e => onChangeMathsAnswer(e.target.value)}>
			<option value="not4">Not 4</option>
			<option value="0">0</option>
			<option value="4">4</option>
			<option value="99">99</option>
		</select>
    </> );