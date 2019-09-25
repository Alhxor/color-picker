const ColorListMock = ({ colors, rateColor }) => (
    <ul className="color-list-mock">{
        colors.map(c => (
            <li className="color" key={c.id}>
                <span className="title">{c.title}</span>
                <span className="hexCode">{c.hexCode}</span>
                <button className="rate" onClick={rateColor}>rate</button>
            </li>
        ))
    }</ul>
);

ColorListMock.displayName = 'ColorListMock';

export default ColorListMock;
