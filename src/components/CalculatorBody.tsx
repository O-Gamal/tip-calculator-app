import { useState, useEffect, useRef } from 'react';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

const CalculatorBody = () => {
  const [bill, setBill] = useState<number>(NaN);
  const [tip, setTip] = useState<number>(NaN);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (tip) {
      const tipPerc = tip / 100;
      setTipAmount((tipPerc * bill) / numberOfPeople || tipPerc * bill);
      setTotal(
        (bill + tipPerc * bill) / numberOfPeople || bill + tipPerc * bill
      );
    } else {
      setTipAmount(0);
      setTotal(bill / numberOfPeople || bill);
    }

    console.log(`
      bill: ${bill},
      tip: ${tip},
      # of people: ${numberOfPeople}
    `);
  }, [bill, tip, numberOfPeople]);
  return (
    <section className='calculator-body'>
      <InputPanel
        setBill={setBill}
        bill={bill}
        setTip={setTip}
        tip={tip}
        setNumberOfPeople={setNumberOfPeople}
        numberOfPeople={numberOfPeople}
      />
      <OutputPanel
        setBill={setBill}
        setTip={setTip}
        setNumberOfPeople={setNumberOfPeople}
        tipAmount={tipAmount}
        total={total}
      />
    </section>
  );
};
export default CalculatorBody;
