import "./styles.css";
import {Card} from "../../entities";
import {memo} from "preact/compat";
import {ICard} from "../../types.ts";
import {useModal} from "../../contexts";
import {TechSubjects} from "../index.ts";

function Cards({
  cards
}: {
  cards: ICard[]
}) {

  const modal = useModal();

  return (
    <div className="cards">
      {cards.map(card => <Card key={card.id} {...card} onClick={() => {
        modal.openModal({
          title: card.title,
          content: <TechSubjects ids={card.subjectIds} />
        })
      }} />)}
    </div>
  );

};

export default memo(Cards);
