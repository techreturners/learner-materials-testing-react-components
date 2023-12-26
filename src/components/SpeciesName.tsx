import ErrorMessages from "./ErrorMessages";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
  validateField: (name: string) => string[];
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  validateField,
}) => (
  <>
    <div>
      <label htmlFor="species-name">Species Name</label>
      <input
        type="text"
        name="species-name"
        id="species-name"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      />
    </div>
    <ErrorMessages messages={validateField(speciesName)} />
  </>
);

export default SpeciesName;
