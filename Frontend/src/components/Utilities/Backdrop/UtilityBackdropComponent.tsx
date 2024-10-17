import './UtilityBackdropComponent.scss';

/* EXAMPLE: Destructuring & Component Event Emission */
export default function UtilityBackdropComponent(
  { backdropClickEvent }: { backdropClickEvent: () => void }
) {
  return (
    <div id="app-utilities__backdrop" onClick={backdropClickEvent}></div>
  );
}
