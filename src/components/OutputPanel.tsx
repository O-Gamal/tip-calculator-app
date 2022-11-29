import OutputPiece from './OutputPiece';

interface OutputPanelProps {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  setCustomTip: React.Dispatch<React.SetStateAction<number>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
  tipAmount: number;
  total: number;
  bill: number;
  tip: number;
  customTip: number;
  numberOfPeople: number;
}

const OutputPanel = ({
  setBill,
  setTip,
  setCustomTip,
  setNumberOfPeople,
  tipAmount,
  total,
  bill,
  tip,
  customTip,
  numberOfPeople,
}: OutputPanelProps) => {
  const handleReset = () => {
    setBill(NaN);
    setTip(NaN);
    setCustomTip(NaN);
    setNumberOfPeople(NaN);
  };

  return (
    <section className='output-panel panel'>
      <div>
        <OutputPiece title='Tip Amount' tag='/ person' price={tipAmount} />
        <OutputPiece title='Total' tag='/ person' price={total} />
      </div>
      <button
        className='reset-button'
        onClick={handleReset}
        disabled={!bill && !(tip || customTip) && !numberOfPeople}
      >
        Reset
      </button>
    </section>
  );
};
export default OutputPanel;
