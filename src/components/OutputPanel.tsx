import OutputPiece from './OutputPiece';

const OutputPanel = () => {
  return (
    <section className='output-panel panel'>
      <div>
        <OutputPiece title='Tip Amount' tag='/ person' price={0.0} />
        <OutputPiece title='Total' tag='/ person' price={0.0} />
      </div>
      <button className='reset-button'>Reset</button>
    </section>
  );
};
export default OutputPanel;
