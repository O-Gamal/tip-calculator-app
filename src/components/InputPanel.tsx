import {
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const tipPercentages = [5, 10, 15, 25, 50];

interface InputPanelProps {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  bill: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
  numberOfPeople: number;
}

const InputPanel = ({
  setBill,
  bill,
  setTip,
  tip,
  setNumberOfPeople,
  numberOfPeople,
}: InputPanelProps) => {
  const handleTipSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTip(+e.target.value);
  };

  return (
    <section className='input-panel panel'>
      <form>
        <label htmlFor='bill'>Bill</label>
        <div className='input-container'>
          <UserCircleIcon className='input-icon' />
          <input
            className='bill-input'
            type='number'
            name='bill'
            id='bill'
            placeholder='0'
            value={bill}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBill(+e.target.value >= 0 ? +e.target.value : 0);
            }}
          />
        </div>

        <label>Select Tip %</label>
        <div className='tip-perc-group input-container'>
          {tipPercentages.map((perc) => (
            <button
              key={perc}
              className={`${perc === tip ? 'tip-perc selected' : 'tip-perc'}`}
              value={perc}
              onClick={handleTipSelect}
            >
              {perc}%
            </button>
          ))}
          <input
            type='number'
            className='tip-custom-input'
            name='tip'
            id='tip'
            placeholder='Custom'
            // onFocus={() => setTip(NaN)}
            value={tip}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTip(+e.target.value >= 0 ? +e.target.value : 0);
            }}
          />
        </div>

        <label htmlFor='number-of-people'>Number of people</label>
        <div className='input-container'>
          <CurrencyDollarIcon className='input-icon' />
          <input
            type='number'
            className='number-of-people-input'
            name='number-of-people'
            id='number-of-people'
            placeholder='0'
            value={numberOfPeople}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNumberOfPeople(+e.target.value >= 1 ? +e.target.value : 1);
            }}
          />
        </div>
      </form>
    </section>
  );
};
export default InputPanel;
