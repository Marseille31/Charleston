import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShowDesc from "./components/ShowDesc";
import ShowContact from "./components/ShowContact";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Шкаф-купе',
          img: 'shkafkupe.jpg',
          img2: 'shkafkupe2.jpg',
          img3: 'shkafkupe3.jpg',
          img4: 'shkafkupe4.jpg',
          img5: 'shkafkupe5.jpg',
          img6: 'shkafkupe6.jpg',
          price: 'Индивидуальная',
          desc: 'Шкаф-купе с мягкими фасадами из текстиля',
        },
        {
          id: 2,
          title: 'Кухня в белой эмали',
          img: 'kuhnyawhiteemal.jpg',
          img2: 'kuhnyawhiteemal2.jpg',
          img3: 'kuhnyawhiteemal3.jpg',
          img4: 'kuhnyawhiteemal4.jpg',
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Ящики BLUM с доводчиками. Каменная столешница. Замечательные фасады. Газовый котёл скрыт в пенале',
        },
        {
          id: 3,
          title: 'Эмалевая стена и шкаф',
          img: 'stenaandshkaf.jpg',
          img2: 'stenaandshkaf2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Шикарная эмалевая стенка и шкаф',
        },
        {
          id: 4,
          title: 'Шкаф из ЛДСП',
          img: 'shkafLDSP.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Шкаф из ЛДСП Lamarty в Графитовом цвете!',
        },
        {
          id: 5,
          title: 'Кухня с барной стойкой',
          img: 'kuhnyabar.jpg',
          img2: 'kuhnyabar2.jpg',
          img3: 'kuhnyabar3.jpg',
          img4: 'kuhnyabar4.jpg',
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Встраеваемая техника, фасады АГТ без ручек, которые можно считать самыми передовыми и современными, фурнитура BOYARD',
        },
        {
          id: 6,
          title: 'Шкаф из ЛДСП Lamarty, профиль — MODUS',
          img: 'shkafMODUS.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Шкаф из ЛДСП Lamarty в Графитовом цвете, профиль - MODUS',
        },
        {
          id: 7,
          title: 'Люксовая кухня',
          img: 'vipkuhnya.jpg',
          img2: undefined,
          img3: 'vipkuhnya3.jpg',
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Фурнитура: «BLUM», столешница: «EGGER», встраеваемая техника, скрытая вытяжка, ну и главная фишка — современная мойка с множеством режимов и экраном, просто чудо!',
        },
        {
          id: 8,
          title: 'Шкаф из МДФ',
          img: 'shkafMDF.jpg',
          img2: 'shkafMDF2.jpg',
          img3: 'shkafMDF3.jpg',
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Шкаф из МДФ с фрезеровкой из самых качественных материалов',
        },
        {
          id: 9,
          title: 'Кухня в бежевых тонах',
          img: 'kuhnyaBEZH.jpg',
          img2: 'kuhnyaBEZH2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Прекрасная кухня выполненная в бежевых тонах: встраеваемая техника, открывающиеся по нажатию фасады AGT, каменная столешница.',
        },
        {
          id: 10,
          title: 'Функциoнальная кухня из топовых материалов',
          img: 'kuhnyaIStop.jpg',
          img2: 'kuhnyaIStop2.jpg',
          img3: 'kuhnyaIStop3.jpg',
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Функциoнальная кухня из топовых материалов. Каменная столешница, встраеваемая техника, фасады AGT открывающиеся по нажатию.',
        },
        {
          id: 11,
          title: 'Письменный стол',
          img: 'pismSTOL.jpg',
          img2: 'pismSTOL2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальная',
          desc: 'Письменный стол: цвет корпуса — белый, фасады МДФ, ЛДСП Lamarty в декоре ДУБ ВОТАН.',
        },
        {
          id: 12,
          title: 'Шкаф',
          img: 'prostoSHKAF.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф: Материал корпуса — МДФ',
        },
        {
          id: 13,
          title: 'Шкаф-купе',
          img: 'shkafKUPEldsp.jpg',
          img2: 'shkafKUPEldsp2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф-купе: ЛДСП Lamarty, цвет корпуса — белый глянец',
        },
        {
          id: 14,
          title: 'Кухня',
          img: 'kuhnyaBOYARD.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Кухня: материал - AGT, фурнитура BOYARD',
        },
        {
          id: 15,
          title: 'Шкаф из МДФ',
          img: 'MDFshkaf.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф из МДФ, фурнитура — «Boyard»',
        },
        {
          id: 16,
          title: 'Шкаф в прихожую из МДФ',
          img: 'shkafVprihozhyu.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф в прихожую из МДФ, фурнитура — Boyard',
        },
        {
          id: 17,
          title: 'Рабочая зона школьника из МДФ',
          img: 'schoolZONE.jpg',
          img2: 'schoolZONE2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Рабочая зона школьника из МДФ, фурнитура: «Boyard»',
        },
        {
          id: 18,
          title: 'Кухня',
          img: 'kuhnyaAGT.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Кухня: материал — АGT белый, столешница и верхние ящики — ЛДСП «Дуб Вотан»',
        },
        {
          id: 19,
          title: 'Прихожая со шкафом',
          img: 'prihozhayaSHKAF.jpg',
          img2: 'prihozhayaSHKAF2.jpg',
          img3: 'prihozhayaSHKAF3.jpg',
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Прихожая со шкафом: материал корпуса — ЛДСП',
        },
        {
          id: 20,
          title: 'Шкаф',
          img: 'shkafIZmdf.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф: фасады — МДФ',
        },
        {
          id: 21,
          title: 'Кровать и прикроватные тумбы',
          img: 'krovatka.jpg',
          img2: 'krovatka2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Кровать и прикроватные тумбы: кровать с подъёмным механизмом, мягкие тумбочки — ткань Teddy',
        },
        {
          id: 22,
          title: 'Шкаф-купе в детскую',
          img: 'shkafKUPEchild.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф-купе в детскую: материал ЛДСП, двери — фото печать',
        },
        {
          id: 23,
          title: 'Кухонный гарнитур',
          img: 'kuhGARagt.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Кухонный гарнитур: фасады — AGT, белый глянец',
        },
        {
          id: 24,
          title: 'Шкаф в прихожую',
          img: 'SHKAFprihozhaya.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Шкаф в прихожую: фасады — МДФ, каретная стяжка',
        },
        {
          id: 25,
          title: 'Кухонный гарнитур',
          img: 'kuhGARturk.jpg',
          img2: 'kuhGARturk2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Эстетика и практичность объединены в этом кухонном гарнитуре с фасадами AGT (Турция) и фурнитурой Boyard, создавая превосходный интерьер ',
        },
        {
          id: 26,
          title: 'Комод',
          img: 'komod3.jpg',
          img2: 'komod2.jpg',
          img3: 'komod.jpg',
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Комод из МДФ с элегантными ручками!',
        },
        {
          id: 27,
          title: 'Шкаф',
          img: 'shkafchikMDF.jpg',
          img2: undefined,
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Классический выбор с современным шармом — шкаф из МДФ',
        },
        {
          id: 28,
          title: 'Шкаф',
          img: 'ShkafMDFA.jpg',
          img2: 'ShkafMDFA2.jpg',
          img3: undefined,
          img4: undefined,
          img5: undefined,
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Эстетика и уникальность: шкаф из МДФ с фрезеровкой',
        },
        {
          id: 29,
          title: 'Кухня в эмали',
          img: 'kuhnyaEMALI.jpg',
          img2: 'kuhnyaEMALI2.jpg',
          img3: 'kuhnyaEMALI3.jpg',
          img4: 'kuhnyaEMALI4.jpg',
          img5: 'kuhnyaEMALI5.jpg',
          img6: undefined,
          price: 'Индивидуальна',
          desc: 'Уникальная кухня в эмали, с фурнитурой Blum и ручками Boyard! Столешница от Egger с выдвижной розеткой, многофункциональная, современная мойка, встроенная бытовая техника. Объединив в себе элегантность и инновационные технологии, такая кухня станет сердцем вашего дома!',
        }
      ],
      showFullCont: false,
      showFullItem: false,
      fullItem: {},
    }
    this.onShowCont = this.onShowCont.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header onShowCont={this.onShowCont} />
        <Items className='zkzk' onShowCont={this.onShowCont} onShowItem={this.onShowItem} items={this.state.items} />


        {this.state.showFullCont && <ShowContact onShowCont={this.onShowCont} />}
        {this.state.showFullItem && <ShowDesc onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowCont() {
    this.setState({ showFullCont: !this.state.showFullCont })
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }
}

export default App;