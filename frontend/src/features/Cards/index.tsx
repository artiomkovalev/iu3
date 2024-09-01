import "./styles.css";
import {Card} from "../../entities";
import {memo} from "preact/compat";
import {ICard} from "../../types.ts";
import {useModal} from "../../contexts";
import {TechSubjects} from "../index.ts";
import {details} from "../../config";
import {ISubject} from "../../types/subjects";
import {Details} from "../../widgets";

function Cards({
  cards
}: {
  cards: ICard[]
}) {

  const modal = useModal();

  return (
    <div className="cards">
      {cards.map(card => <Card key={card.id} {...card} onClick={() => {
        if (card.subjectIds.length === 1) {
          const subject = details.find(detail => detail.id === card.subjectIds[0]) as ISubject;
          modal.openModal({
            title: subject.title,
            content: <Details subject={subject} />
          });
          return;
        };
        modal.openModal({
          title: card.title,
          content: <TechSubjects ids={card.subjectIds} />
        })
      }} />)}
    </div>
  );

};

export default memo(Cards);
