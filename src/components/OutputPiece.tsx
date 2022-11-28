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
      <h1>${price.toFixed(2)}</h1>
    </div>
  );
};
export default OutputPiece;
