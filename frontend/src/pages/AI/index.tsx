import "./styles.css";
import {memo, useEffect, useState} from "preact/compat";
import axios from "axios";
import {Subtitle, Text, Title} from "../../shared";
import {Comics} from "../../types";
import Left from "./LeftIcon.tsx";
import Right from "./RightIcon.tsx";

let gotEmpty = false;

function AI() {

  const [index, setIndex] = useState<number>(0);
  const [comics, setComics] = useState<Comics[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {

    async function fetchPosts() {
      const response = await axios.get(`http://localhost:8080/api/comics/last?offset=${offset}`);
      gotEmpty = response.data.items.length === 0;
      setComics([...comics, ...response.data.items]);
    };

    fetchPosts();

  }, [offset]);

  useEffect(() => {
    if (index === comics.length - 1 && !gotEmpty) {
      setOffset(offset + 7);
    };
  }, [index]);

  return (
    <div className="page-outer">
      <div className="page-inner">
        <div className="main-information">
          <Title
            level={1}
            children="Нейроквест"
          />
          <Subtitle
            level={2}
            children="Вот что сейчас происходит на кафедре!"
          />
          <div style={{ marginTop: "10px" }} />
          <Text
            children={comics[index] ? comics[index].date : 'Загрузка...'}
          />
        </div>
        <div className="carousel">
          <div className="carousel-outer left">
            <div
              className="carousel-button"
              children={<Left />}
              disabled={index <= 0}
              onClick={() => {
                if (index <= 0) return;
                setIndex(index-1);
              }}
            />
          </div>
          {comics.map((item, idx) => (
            <img
              className={`carousel-item ${idx === index ? 'active' : ''} ${idx === index-1 ? 'start' : ''}`}
              src={"http://localhost:8080/" + item.src}
              key={item.id}
              alt="Комикс"
            />
          ))}
          <div className="carousel-outer right">
            <div
              className="carousel-button"
              children={<Right />}
              disabled={index >= comics.length - 1}
              onClick={() => {
                if (index >= comics.length - 1) return;
                setIndex(index+1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

};

export default memo(AI);
