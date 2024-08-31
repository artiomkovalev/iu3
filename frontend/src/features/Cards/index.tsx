import "./styles.css";
import {Card} from "../../entities";
import {memo} from "preact/compat";
import {ICard} from "../../types.ts";
import {useModal} from "../../contexts";

function Cards({
  cards
}: {
  cards: ICard[]
}) {

  const modal = useModal();

  return (
    <div className="cards">
      {cards.map(card => <Card key={card.id} {...card} onClick={() => {
        if (!modal.setModal) return;
        modal.setModal({
          title: card.title,
          content: "В процессе разработки",
          displayModal: true
        });
      }} />)}
    </div>
  );

};

export default memo(Cards);
