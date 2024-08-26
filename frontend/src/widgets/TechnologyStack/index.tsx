import "./styles.css";
import {ICard} from "../../types.ts";
import {Title} from "../../shared";
import {Cards} from "../../features";
import * as constants from "./items";
import {memo} from "preact/compat";

const Technologies = memo(function ({
  title,
  cards
}: {
  title: string;
  cards: ICard[];
}) {

  return (
    <div className="technologies">
      <Title
        level={3}
        children={title}
      />
      <Cards cards={cards} />
    </div>
  );

});

function TechnologyStack() {

  return (
    <div className="technology-stack">
      <Title
        level={2}
        children="Стек технологий"
      />
      <Technologies
        title="Программирование"
        cards={constants.programming}
      />
      <Technologies
        title="Информационные технологии"
        cards={constants.informationTechnologies}
      />
      <Technologies
        title="Сети"
        cards={constants.networks}
      />
      <Technologies
        title="Искусственный интеллект"
        cards={constants.ai}
      />
      <Technologies
        title="Электроника"
        cards={constants.electronics}
      />
    </div>
  );

};

export default memo(TechnologyStack);
