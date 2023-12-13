
interface NumberOfBeingsProps {
	numberOfBeings: string;
	onChangeNumberOfBeings: (value: string) => void;
}

export const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => (
    <>
        <label htmlFor='numberOfBeings'>Number of Beings</label>
        <input id='numberOfBeings'
					type='text'
					value={numberOfBeings}
					onChange={(e) => onChangeNumberOfBeings(e.target.value)} />
    </> );