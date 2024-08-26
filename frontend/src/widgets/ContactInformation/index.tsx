import "./styles.css";
import {Block, Text, Title} from "../../shared";
import {memo} from "preact/compat";

function ContactInformation() {

  return (
    <div className="contact-information">
      <div className="left">
        <Block>
          <div>
            <span><b>Почтовый адрес: </b><span>105005, г.Москва, 2-я Бауманская д.5, МГТУ им.Н.Э. Баумана, Кафедра ИУ-3</span></span>
            <span className="link-more"><b>Телефон:</b><span>+7 (499) 263-62-86</span></span>
            <span className="link-more"><b>Факс:</b><span>+7 (499) 267-65-37</span></span>
            <span className="link-more"><b>E-mail:</b><span>iu3@bmstu.ru</span></span>
            <span className="link-more"><b>VK:</b><a href="https://vk.com/iu3bmstu" children="vk.com/iu3bmstu" /></span>
          </div>
        </Block>
      </div>
      <div className="right">
        <div className="row">
          <Block>
            <div>
              <Title
                level={4}
                children="Заведующий кафедрой"
              />
              <Text
                children="проф. дтн Алфимцев Александр Николаевич"
              />
              <span className="link-more"><b>Телефон:</b><span>+7 (499) 263-62-86</span></span>
              <span className="link-more"><b>Факс:</b><span>+7 (499) 267-65-37</span></span>
              <span className="link-more"><b>E-mail:</b><span>alfim@bmstu.ru</span></span>
            </div>
          </Block>
          <Block>
            <div>
              <Title
                level={4}
                children="Заместитель заведующего кафедрой по учебно-методической работе"
              />
              <Text
                children="доц. Тихомирова Елизавета Алексеевна"
              />
              <span className="link-more"><b>Телефон:</b><span>+7 (499) 263-62-86</span></span>
              <span className="link-more"><b>Факс:</b><span>+7 (499) 267-65-37</span></span>
            </div>
          </Block>
        </div>
        <div className="row">
          <Block>
            <div>
              <Title
                level={4}
                children="Заместитель заведующего кафедрой по научной работе"
              />
              <Text
                children="проф. дтн Локтев Даниил Алексеевич"
              />
              <span className="link-more"><b>Телефон:</b><span>+7 (499) 263-62-86</span></span>
              <span className="link-more"><b>Факс:</b><span>+7 (499) 267-65-37</span></span>
              <span className="link-more"><b>E-mail:</b><span>loktevdan@bmstu.ru</span></span>
            </div>
          </Block>
          <Block>
            <div>
              <Title
                level={4}
                children={`Куратор программы "Шаг в будущее"`}
              />
              <Text
                children="Питикин Алексей Русланович"
              />
              <span className="link-more"><b>Телефон:</b><span>+7 (499) 263-62-86</span></span>
              <span className="link-more"><b>Факс:</b><span>+7 (499) 267-65-37</span></span>
            </div>
          </Block>
        </div>
      </div>
    </div>
  );

};

export default memo(ContactInformation);
