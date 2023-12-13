
interface ReasonsForSparingProps {
	reasonsForSparing: string;
	onChangeReasonsForSparing: (value: string) => void;
}

export const ReasonsForSparing : React.FC<ReasonsForSparingProps> = ({reasonsForSparing, onChangeReasonsForSparing}) => (
    <>
        <label htmlFor='reasonsForSparing'>Reasons For Sparing</label>
        <textarea id='reasonsForSparing'
					rows= {5}
					cols= {20}
					value={reasonsForSparing}
					onChange={(e) => onChangeReasonsForSparing(e.target.value)} />
    </> );