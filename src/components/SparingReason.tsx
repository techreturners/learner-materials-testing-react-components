import ErrorMessages from "./ErrorMessages";

interface SparingReasonProps {
  sparingReason: string;
  onChangeSparingReason: (value: string) => void;
  validateField: (name: string) => string[];
}

const SparingReason: React.FC<SparingReasonProps> = ({
  sparingReason,
  onChangeSparingReason,
  validateField,
}) => (
  <>
    <div>
      <label htmlFor="sparing-reason">Reason for Sparing</label>
      <textarea
        name="sparing-reason"
        id="sparing-reason"
        value={sparingReason}
        onChange={(e) => onChangeSparingReason(e.target.value)}
      />
    </div>
    <ErrorMessages messages={validateField(sparingReason)} />
  </>
);

export default SparingReason;
