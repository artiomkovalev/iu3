import "./styles.css";
import {ICard} from "../../types.ts";
import {Title} from "../../shared";
import {Cards} from "../../features";
import {
  programming,
  informationTechnologies,
  networks,
  ai,
  electronics
} from "../../config";
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
        cards={programming}
      />
      <Technologies
        title="Информационные технологии"
        cards={informationTechnologies}
      />
      <Technologies
        title="Сети"
        cards={networks}
      />
      <Technologies
        title="Искусственный интеллект"
        cards={ai}
      />
      <Technologies
        title="Электроника"
        cards={electronics}
      />
    </div>
  );

};

export default memo(TechnologyStack);
