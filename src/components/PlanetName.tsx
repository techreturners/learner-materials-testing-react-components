import ErrorMessages from "./ErrorMessages";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  validateField: (name: string) => string[];
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validateField,
}) => (
  <>
    <div>
      <label htmlFor="planet-name">Planet Name</label>
      <input
        type="text"
        name="planet-name"
        id="planet-name"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
    </div>
    <ErrorMessages messages={validateField(planetName)} />
  </>
);

export default PlanetName;
