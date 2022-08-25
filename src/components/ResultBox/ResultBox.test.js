import { cleanup, render,screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect'

const testObjPLNtoUSD = [
  { from: 'PLN', to: 'USD', amount: '100', output: 'PLN 100.00 = $28.57' },
  { from: 'PLN', to: 'USD', amount: '14', output: 'PLN 14.00 = $4.00' },
  { from: 'PLN', to: 'USD', amount: '92', output: 'PLN 92.00 = $26.29' },
]

const testObjUSDtoPLN = [
  { from: 'USD', to: 'PLN', amount: '100', output: '$100.00 = PLN 350.00' },
  { from: 'USD', to: 'PLN', amount: '14', output: '$14.00 = PLN 49.00' },
  { from: 'USD', to: 'PLN', amount: '92', output: '$92.00 = PLN 322.00' },
]

const testObjTheSame = [
  { from: 'PLN', to: 'PLN', amount: '100', output: 'PLN 100.00 = PLN 100.00' },
  { from: 'PLN', to: 'PLN', amount: '14', output: 'PLN 14.00 = PLN 14.00' },
]

const testObjNegative = [
  { from: 'PLN', to: 'PLN', amount: '-5', output: 'Wrong value' },
  { from: 'PLN', to: 'PLN', amount: '-2', output: 'Wrong value' },
]

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {
      for (const singleTest of testObjPLNtoUSD) {
        render(<ResultBox from={singleTest.from} to={singleTest.to} amount={parseInt(singleTest.amount)} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(singleTest.output);
        cleanup();
      }
    });

    it('should render proper info about conversion when USD -> PLN', () => {
      for (const singleTest of testObjUSDtoPLN) {
        render(<ResultBox from={singleTest.from} to={singleTest.to} amount={parseInt(singleTest.amount)} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(singleTest.output);
        cleanup();
      }
    });

    it('should render proper info about conversion when PLN -> PLN', () => {
      for (const singleTest of testObjTheSame) {
        render(<ResultBox from={singleTest.from} to={singleTest.to} amount={parseInt(singleTest.amount)} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent(singleTest.output);
        cleanup();
      }
    });

    it('should render a wrong value text when the amount is negative', () => {
      for (const singleTest of testObjNegative) {
        render(<ResultBox from={singleTest.from} to={singleTest.to} amount={parseInt(singleTest.amount)} />);
        const output = screen.getByTestId('negative');
        expect(output).toHaveTextContent(singleTest.output);
        cleanup();
      }
    });


});