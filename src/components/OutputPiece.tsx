interface OutputPieceProps {
  title: string;
  tag: string;
  price: number;
}

const OutputPiece = ({ title, tag, price }: OutputPieceProps) => {
  return (
    <div className='output-piece'>
      <h4>
        {title}
        <span>{tag}</span>
      </h4>
      <h1>${price ? price.toFixed(2) : '0.00'}</h1>
    </div>
  );
};
export default OutputPiece;
