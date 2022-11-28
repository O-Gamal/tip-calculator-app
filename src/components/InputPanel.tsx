import { useEffect, useState } from 'react';
import {
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const tipPercentages = [5, 10, 15, 25, 50];

const InputPanel = () => {
  const [tipPerc, setTipPerc] = useState<number | null>(null);

  const handleTipPercentage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTipPerc(+e.target.value);
  };

  useEffect(() => console.log(tipPerc), [tipPerc]);

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
          />
        </div>

        <label>Select Tip %</label>
        <div className='tip-perc-group input-container'>
          {tipPercentages.map((perc) => (
            <button
              key={perc}
              className={`${
                perc === tipPerc ? 'tip-perc selected' : 'tip-perc'
              }`}
              value={perc}
              onClick={handleTipPercentage}
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
            onFocus={() => setTipPerc(null)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTipPerc(+e.target.value)
            }
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
          />
        </div>
      </form>
    </section>
  );
};
export default InputPanel;
