import "./styles.css";
import {Card} from "../../entities";
import {memo} from "preact/compat";
import {ICard} from "../../types.ts";

function Cards({
  cards
}: {
  cards: ICard[]
}) {

  return (
    <div className="cards">
      {cards.map(card => <Card key={card.title} {...card} />)}
    </div>
  );

};

export default memo(Cards);
