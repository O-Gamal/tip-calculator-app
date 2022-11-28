import OutputPiece from './OutputPiece';

interface OutputPanelProps {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
  tipAmount: number;
  total: number;
}

const OutputPanel = ({
  setBill,
  setTip,
  setNumberOfPeople,
  tipAmount,
  total,
}: OutputPanelProps) => {
  const handleReset = () => {
    setBill(NaN);
    setTip(NaN);
    setNumberOfPeople(1);
  };

  return (
    <section className='output-panel panel'>
      <div>
        <OutputPiece title='Tip Amount' tag='/ person' price={tipAmount} />
        <OutputPiece title='Total' tag='/ person' price={total} />
      </div>
      <button className='reset-button' onClick={handleReset}>
        Reset
      </button>
    </section>
  );
};
export default OutputPanel;
