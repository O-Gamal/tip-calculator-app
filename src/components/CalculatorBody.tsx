import { useState, useEffect, useRef } from 'react';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

const CalculatorBody = () => {
  const [bill, setBill] = useState(NaN);
  const [tip, setTip] = useState(NaN);
  const [numberOfPeople, setNumberOfPeople] = useState(NaN);
  const [customTip, setCustomTip] = useState(NaN);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!numberOfPeople) {
      setTotal(0);
      setTipAmount(0);
    } else {
      if (tip || customTip) {
        const tipPerc = (tip || customTip) / 100;
        setTipAmount((tipPerc * bill) / numberOfPeople || tipPerc * bill);
        setTotal(
          (bill + tipPerc * bill) / numberOfPeople || bill + tipPerc * bill
        );
      } else {
        setTipAmount(0);
        setTotal(bill / numberOfPeople || bill);
      }
    }

    console.log(`
      bill: ${bill},
      tip: ${tip},
      # of people: ${numberOfPeople}
    `);
  }, [bill, tip, customTip, numberOfPeople]);

  return (
    <section className='calculator-body'>
      <InputPanel
        setBill={setBill}
        bill={bill}
        setTip={setTip}
        tip={tip}
        setCustomTip={setCustomTip}
        customTip={customTip}
        setNumberOfPeople={setNumberOfPeople}
        numberOfPeople={numberOfPeople}
      />
      <OutputPanel
        setBill={setBill}
        bill={bill}
        setTip={setTip}
        tip={tip}
        setCustomTip={setCustomTip}
        customTip={customTip}
        setNumberOfPeople={setNumberOfPeople}
        numberOfPeople={numberOfPeople}
        tipAmount={tipAmount}
        total={total}
      />
    </section>
  );
};
export default CalculatorBody;
