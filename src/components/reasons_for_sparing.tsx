
interface ReasonsForSparingProps {
	reasonsForSparing: string;
	onChangeReasonsForSparing: (value: string) => void;
}

export const ReasonsForSparing : React.FC<ReasonsForSparingProps> = ({reasonsForSparing, onChangeReasonsForSparing}) => (
    <>
        <label htmlFor='reasonsForSparing'>Species Name</label>
        <input id='reasonsForSparing'
					type='textarea'
					value={reasonsForSparing}
					onChange={(e) => onChangeReasonsForSparing(e.target.value)} />
    </> );