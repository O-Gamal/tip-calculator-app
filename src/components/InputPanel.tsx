import {
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Input from './Input';

const tipPercentages = [5, 10, 15, 25, 50];

interface InputPanelProps {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  bill: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
  numberOfPeople: number;
  setCustomTip: React.Dispatch<React.SetStateAction<number>>;
  customTip: number;
}

const InputPanel = ({
  setBill,
  bill,
  setTip,
  tip,
  setCustomTip,
  customTip,
  setNumberOfPeople,
  numberOfPeople,
}: InputPanelProps) => {
  const handleTipSelect = (e: any) => {
    e.preventDefault();
    setCustomTip(NaN);
    setTip(+e.target.value);
  };

  return (
    <section className='input-panel panel'>
      <form>
        <Input
          type='number'
          label='Bill'
          className='bill-input'
          name='bill'
          id='bill'
          placeholder='0'
          icon={<UserCircleIcon className='input-icon' />}
          value={bill}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBill(+e.target.value >= 0 ? +e.target.value : 0);
          }}
        />

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
            value={customTip}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTip(0);
              setCustomTip(+e.target.value >= 0 ? +e.target.value : 0);
            }}
          />
        </div>
        <Input
          type='number'
          label='Number of people'
          className='number-of-people-input'
          name='number-of-people'
          id='number-of-people'
          placeholder='0'
          icon={<CurrencyDollarIcon className='input-icon' />}
          value={numberOfPeople}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNumberOfPeople(+e.target.value >= 0 ? +e.target.value : 0);
          }}
        />
      </form>
    </section>
  );
};
export default InputPanel;
