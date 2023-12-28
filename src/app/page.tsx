import Layout from "@/components/Layout";
import Button from "@/components/Button";
// import ConnectedForm from "@/containers/ConnectedForm";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import Link from "next/link";
import pmLanaImage from "@/assets/PM-Lana.png";
import Danone from "@/assets/Danone.png";
import ActiveChat from "@/assets/ActiveChat.png";
import ABLnBev from "@/assets/ABLnBev.png";
import Wispence from "@/assets/Wispence.png";
import whereCanWork from "@/assets/where_can_work.png";
import IrynkaKhalus from "@/assets/IrynkaKhalus.png";
import AnastasiyaMelnik from "@/assets/AnastasiyaMelnik.png";
import Mariya from "@/assets/Mariya.png";
import MariyaPolonskaya from "@/assets/MariyaPolonskaya.png";
import OlgaLazebnikova from "@/assets/OlgaLazebnikova.png";
import OlhovskayaDarya from "@/assets/OlhovskayaDarya.png";
import LinaKondratiuk from "@/assets/LinaKondratiuk.png";
import Pavel from "@/assets/P.png";
import Sergij from "@/assets/Sergij.png";
import YraGlebov from "@/assets/YraGlebov.png";
import Yuliya from "@/assets/Yuliya.png";
import YuliyaLisenko from "@/assets/YuliyaLisenko.png";
import icon1 from "@/assets/icon_1.png";
import icon2 from "@/assets/icon_2.png";
import icon3 from "@/assets/icon_3.png";
import icon4 from "@/assets/icon_4.png";
import icon5 from "@/assets/icon_5.png";
import hart from "@/assets/hart.png";
import Video1 from "@/components/videos/Video1";
import Video2 from "@/components/videos/Video2";
import Video3 from "@/components/videos/Video3";

const LINK_1 = "https://secure.wayforpay.com/button/b209b2c930803";
const LINK_2 = "https://secure.wayforpay.com/button/b8e8bd04462a1";
const FULL_PRICE = 2000;
const REAL_PRICE = 499;

export default function Home() {
  return (
      <>
        <main className="p-5 md:p-24 md:pt-0">
          <header className="flex justify-center items-baseline my-5 md:my-10 max-w-7xl m-auto">
            <div className="text-2xl dark:text-black">
              <i>
                <b>B</b>
                <small>&</small>
                <b>M</b>
              </i>
            </div>
          </header>
          <section className="md:flex md:justify-between md:gap-20 mb-10 md:mb-20 max-w-7xl m-auto">
            <div className="md:basis-3/6 grow-1">
            <span className="text-sm px-2 py-1 normal-case font-light rounded-sm bg-label inline-block">
              починай навчання у зручний час<br/> відразу після оплати
              </span>
              <h2 className="text-xl md:text-2xl mt-5 uppercase dark:text-black mb-10">
                  <span className="font-extrabold">Відеокурс</span>
                  <br/>
                  Project/Product Management
              </h2>
              <p className="mb-5 dark:text-black md:pr-30">
                <span className="font-bold">
                  Опануй найпопулярнішу не технічну професію в ІТ - Product & Project manager
                </span> та створюй продукти, якими будуть користуватися мільйони
              </p>
              <p className="text-xl text-default md:text-2xl font-bold uppercase mb-14 max-w-lg">
                Встигни взяти участь з новорічною знижкою 60%
              </p>
              <Link href="#pay">
                <Button inverted className="w-full mb-10 md:mb-0 md:w-auto">
                  Взяти участь
                </Button>
              </Link>
            </div>
            <div className="md:basis-3/6 grow-1">
              <video
                  className="w-full h-auto max-w-full border-0 rounded-3xl"
                  controls
                  poster="/poster.jpg"
              >
                <source
                    src={'https://wispence-videos.s3.eu-central-1.amazonaws.com/output/university/REC20230504133354.mp4'}
                    type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
              <h2 className="text-2xl md:text-3xl mt-5 font-extrabold uppercase dark:text-black">
                Хто такий
                <br />
                <span className="font-normal text-default">Product Management</span>
              </h2>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto">
            <div className="md:flex md:justify-between md:gap-10">
              <div className="md:basis-7/12 flex-initial grow-0 align-bottom dark:text-black">
                <h2 className="text-2xl md:text-4xl mb-10 font-extrabold uppercase">
                  Авторка інтенсиву
                  <br />
                  <b className="uppercase font-normal text-default">
                    Product Manager
                  </b>
                </h2>
                <ul className="mb-5 list-disc list-inside">
                  <li>7 років роботи в ІТ</li>
                  <li><b>Заснувала</b> діджитал агенство повного циклу <strong className="uppercase">business maker</strong> яка спеціалізується на створенні та монетизації онлайн продуктів  </li>
                  <li><strong>Навчила</strong> більше <strong>60 людей</strong> продукт менеджменту</li>
                  <li><strong>IT блогер:</strong> експертний блог в IG 8к+ аудиторії</li>
                  <li><strong>Працювала</strong> з відомими брендами та <strong>ІТ продуктами:</strong></li>
                </ul>
              </div>
              <div className="md:basis-5/12 flex-initial grow-0 max-w-xs md:max-w-md relative m:h-full w-full">
                <Image src={pmLanaImage} alt="" className="md:absolute md:top-0 right-0 z-20" />
              </div>
            </div>
            <div className="w-full relative mt-5">
              <div className="bg-gradient-white mb-3 flex gap-10 items-center p-5 -z-10 overflow-x-auto">
                <Image src={Danone} alt="Danone" />
                <Image src={ABLnBev} alt="AB InBev" />
                <Image src={ActiveChat} alt="ActiveChat" />
                <Image src={Wispence} alt="Wispence" />
              </div>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto">
            <div className="align-bottom dark:text-black">
              <div className="md:flex mb-10">
                <h2 className="text-2xl md:text-4xl mb-10 font-extrabold uppercase font-[700] text-default basis-1/2">
                  Для кого підійде<br />
                  інстенсив?
                </h2>
                <p className="basis-1/3">Опануйте навички найпопулярнішої онлайн професії для своєї роботи, збільшення заробітку та втілення будь-яких цілей</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Для новачків/студентів</h3>
                  <p>
                    Онлайн професії знаходяться в ТОПі, у наш час не потрібно вчитися по 10 років, щоб отримати роботу мрії. Зараз достатньо вивчити онлайн професію та почати заробляти
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Для тих, хто в пошуку себе</h3>
                  <p>
                    Знаходитесь в пошуку себе та хочете обрати перспективну професію, яка буде приносити хорощий дохід, дозволить постійно розвиватися та рости
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Хто хоче працюватии віддалено</h3>
                  <p>
                    Хочете освоїти одну з найбільш  затребуваних digital-професій та віддалено з будь-якої точки світу та отримувати дохід в $
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <h3 className="font-bold">Хоче створити свій онлайн продукт</h3>
                  <p>
                    Зі знаннями інтенсиву ти зможеш створити свій онлайн продукт та почати заробляти на ньому.
                  </p>
                </div>
              </div>
              <Link href="#pay">
                <Button className="mt-10" inverted>Взяти участь зі знижкою 60%</Button>
              </Link>
            </div>
          </section>
          <section className="max-w-7xl m-auto dark:text-black mb-10 md:md-20">
            <h2 className="text-2xl md:text-4xl mb-5 font-extrabold uppercase text-default">
              Що ви отримаєте під час навчання
            </h2>
            <p className="text-xl font-bold mb-3">Теоретичні знання з продукт менеджменту та розуміння професії</p>
            <ul className="list-disc list-inside font-bold mb-5">
              <li>
                Зрозумієш хто такий ПМ та які задачі виконує
              </li>
              <li>
                Вивчиш покроково усі задачі ПМ - <b>аналіз ринку, Custdev, Фреймворк, user storiеs, Роадмеп, Методи оцінювання задач, Ключові технічні поняття веб та мобільної розробки</b>
              </li>
            </ul>
            <p className="text-xl font-bold mb-3">Знання з LOW продажів</p>
            <ul className="list-disc list-inside font-bold mb-5">
              <li>
                Дізнаєшся як створити продукт під LOW продажі
              </li>
              <li>
                Зрозумієш як продавати продукту на холодну аудиторію без ведення блогу та постійних прогрівів
              </li>
            </ul>
            <p className="text-xl font-bold uppercase mb-3">Майстер класи від лани</p>
            <ul className="list-disc list-inside font-bold">
              <li>
                Супер практика, де Лана відкриє секрети як робити все швидко і якісно.
              </li>
              <li>
                Живі майстер класи по написанню user stories та по написанню аналітичних івентів
              </li>
            </ul>
          </section>
          <section className="max-w-7xl m-auto dark:text-black mb-10 md:mb-20">
            <h2 className="text-2xl md:text-4xl mb-5 font-extrabold uppercase text-default">
              Програма навчання
            </h2>
            <div className="flex flex-col md:gap-10 md:flex-row mb-10">
              <div className="basis-1/2 grow-1">
                <h3 className="text-xl mb-5 font-extrabold uppercase">Product manager  - Вхід у професію та робота з продуктом. Цінність, потрібність та монетизація продуктів.</h3>
                <p>В цьому модулі ми розберемо професію продукт менеджера, які завдання він виконує. А також розберемо  роботу з ринком і продуктом. Ви зрозумієте як вибрати та створити продукт, який потрібний та цінний користувачам.</p>
                <p className="mt-3 mb-3 text-gray-600 font-bold">5 лекцій</p>
              </div>
              <div className="basis-1/2 grow-1">
                <ol className="list-decimal list-inside leading-10">
                  <li>
                    Хто такий продукт менеджер та які його обовʼязки
                  </li>
                  <li>
                    Проєкт, типи продуктових фіч, монетизація продуктів
                  </li>
                  <li>
                    Аналіз конкуретів, матриця для аналізу
                  </li>
                  <li>
                    Цільова аудиторія
                  </li>
                  <li>
                    Як визначити потрібність і цінність продукту
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 md:flex-row mb-10">
              <div className="basis-1/2 grow-1">
                <h3 className="text-xl mb-5 font-extrabold uppercase">Робота над створенням успішного продукту</h3>
                <p>В цьому модулі ми більш детальніше розберемо фреймворки якими має володіти кожний продукт, щоб створювати успішні продукти. А також заглибимося в аналітику.</p>
                <p className="mt-3 mb-3 text-gray-600 font-bold">6 лекцій</p>
              </div>
              <div className="basis-1/2 grow-1">
                <ol className="list-decimal list-inside leading-10" start={6}>
                  <li>
                    Фреймворк Custdev для роботи з клієнтами
                  </li>
                  <li>
                    Фреймворк JTBD
                  </li>
                  <li>
                    Позиціонування продукту
                  </li>
                  <li>
                    Продуктова аналітика
                  </li>
                  <li>
                    Показник - retention, як з ним працювати та покращувати
                  </li>
                  <li>
                    Особливості роботи в сфері EDTECH -освітні школи та проєкти
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 md:flex-row mb-10">
              <div className="basis-1/2 grow-1">
                <h3 className="text-xl mb-5 font-extrabold uppercase">Майстер класи</h3>
                <p>Цей модуль - супер практика, де Лана відкриє секрети як робити все швидко і якісно.</p>
                <p className="mt-3 mb-3 text-gray-600 font-bold">3 лекції</p>
              </div>
              <div className="basis-1/2 grow-1">
                <ol className="list-decimal list-inside leading-10" start={13}>
                  <li>
                    Живий майстер клас по написанню user stories
                  </li>
                  <li>
                    Живий майстер клас по написанню аналітичних івентів
                  </li>
                  <li>
                    Урок по Figma - сервіс для створення дизайнів та прототипів
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 md:flex-row mb-10">
              <div className="basis-1/2 grow-1">
                <h3 className="text-xl mb-5 font-extrabold uppercase">Project management - керування процесами розробки та створення продукту. Робота з технічною командою</h3>
                <p>В цьому модулі ми навчимося керувати процесами розробки, а також освоїмо технічні поняття, щоб спілкуватися з розробниками на “ти”.</p>
                <p className="mt-3 mb-3 text-gray-600 font-bold">7 лекцій</p>
              </div>
              <div className="basis-1/2 grow-1">
                <ol className="list-decimal list-inside leading-10" start={16}>
                  <li>
                    Роадмеп продукту
                  </li>
                  <li>
                    Методи оцінювання задач з розробниками
                  </li>
                  <li>
                    Agile фреймворки - Scrum, Kanban
                  </li>
                  <li>
                    Живий майстер клас по плануванню спринту
                  </li>
                  <li>
                    Зворотній звʼязок та вирішення конфліктів
                  </li>
                  <li>
                    Ключові технічні поняття веб розробки
                  </li>
                  <li>
                    Ключові технічні поняття розробки мобільних застосунків
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 md:flex-row mb-10">
              <div className="basis-1/2 grow-1">
                <h3 className="text-xl mb-5 font-extrabold uppercase">+ 🎁 ІНТЕНСИВ ПО LOW продажам у ПОДАРУНОК</h3>
                <p>Інтенсив навчить тебе створювати та монетизувати продукти на холодну аудиторї. Успішні продажі продуктів для яких не потрібні прогріви та ведення блогу.</p>
                <p className="mt-3 mb-3 text-gray-600 font-bold">9 лекцій</p>
              </div>
              <div className="basis-1/2 grow-1">
                <ol className="list-decimal list-inside leading-10" start={23}>
                  <li>
                    Вступ в low продажі
                  </li>
                  <li>
                    Що дозволяє low продажам працюювати?
                  </li>
                  <li>
                    Як виглядають low продажі зсередини?
                  </li>
                  <li>
                    Як обрати тематику курсу та два варіанта створення low продукта: від експерта і для експерта
                  </li>
                  <li>
                    Створення структури low продукта
                  </li>
                  <li>
                    Створення програми курсу low продукта
                  </li>
                  <li>
                    Створення лендінгу для low продукта
                  </li>
                  <li>
                    Структура лендінгу low продукта
                  </li>
                  <li>
                    Запуск реклами для low продукта
                  </li>
                </ol>
              </div>
            </div>
            <Link href="#pay">
              <Button className="mt-10" inverted>Взяти участь зі знижкою 60%</Button>
            </Link>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto dark:text-black">
            <h2 className="text-2xl md:text-4xl mb-10 font-extrabold uppercase text-default">
              Де ти можеш працювати <br />
              якщо станеш Продукт менеджером?
            </h2>
            <div className="flex flex-wrap">
              <div className="md:basis-8/12 flex flex-wrap gap-10 align-baseline mb-10">
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5">
                  <div>
                    <Image src={icon1} alt={""} />
                  </div>
                  <h3 className="font-bold">+ Стартап</h3>
                  <p>
                    Почати працювати в новоствореній компанії, або створити
                    свій продукт
                  </p>
                </div>
                <div className="md:basis-5/12  grow-1 bg-white rounded-3xl p-5">
                  <div>
                    <Image src={icon2} alt={""} />
                  </div>
                  <h3 className="font-bold">+ Продуктова компанія</h3>
                  <p>
                    Потрапити на роботу в продуктову компанію та працювати
                    над продуктом і його реалізацією
                  </p>
                </div>
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5">
                  <div>
                    <Image src={icon3} alt={""} />
                  </div>
                  <h3 className="font-bold">
                    + Маркетинг агенство чи дизайн студія
                  </h3>
                  <p>
                    Не обовʼязково менеджерити програмістів чи працювати з
                    продуктом, можна працювати з дизайнами, анімаціями чи
                    проджектом в маркетинг агенстві
                  </p>
                </div>
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5">
                  <div>
                    <Image src={icon4} alt={""} />
                  </div>
                  <h3 className="font-bold">+ Аутсорсингова компанія</h3>
                  <p>
                    Співпрацювати з різними компаніями: з’ясовувати їх
                    проблеми і стратегію бізнес-процесів та формувати напрямки
                    розвитку проєктів для впровадження
                  </p>
                </div>
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5 m-auto">
                  <div>
                    <Image src={icon5} alt={""} />
                  </div>
                  <h3 className="font-bold">+ Сфера освіти - EDtech</h3>
                  <p>
                     Працювати з експертами, які створюють свої освітні продукти та потребують допомоги в організації процесів його створення
                  </p>
                </div>
              </div>
              <div className="md:basis-4/12 m-auto">
                <Image src={whereCanWork} alt={""} />
              </div>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-5xl m-auto" id="pay">
            <div className="p-10 bg-gradient mb-10 md:mb-20 rounded-2xl max-w-5xl ml-auto mr-auto">
              <h3 className="text-xl md:text-3xl md:uppercase md:text-white mb-3 text-center">
                Приєднуйтесь до навчання просто зараз за <b>спеціальною новорічною пропозицією</b>
              </h3>
              <div className="text-center">
                <h3 className="md:uppercase text-xl">До кінця акції залишилося</h3>
                <CountDown startDate={new Date("12-31-2023")} format={["days", "hours", "minutes", "seconds"]}/>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="p-10 rounded-3xl bg-white md:basis-1/2 text-center flex flex-col justify-between gap-5">
                <div>
                  <h3 style={{ color: "#A699FF" }} className="text-xl uppercase font-bold">Тариф &#34;Я сам&#34;</h3>
                  <p>
                    У вартість входять відеоуроки та додаткові матеріали без підтримки куратора та живих майстер класів від Лани
                  </p>
                </div>
                <div>
                  <p>
                    <s>$299</s><br/>
                    <span className="text-2xl font-extrabold">$99</span>
                  </p>
                  <Link href={LINK_1} target={"_blank"}>
                    <Button className="mt-10" inverted>Обрати тариф</Button>
                  </Link>
                </div>
              </div>
              <div className="p-10 rounded-3xl bg-white md:basis-1/2 text-center flex flex-col justify-between gap-5">
                <div>
                  <h3 style={{ color: "#A699FF" }} className="text-xl uppercase font-bold">Тариф &#34;підтримка&#34;</h3>
                  <p>У вартість входять відеоуроки та додаткові матеріали, підтримка куратоа, який буде допомагати з проходженням курсу, перевіряти дз, давати фідбек. а також 3 живі мастер класи від Лани.</p>
                </div>
                <div>
                  <p>
                    <s>$399</s><br/>
                    <span className="text-2xl font-extrabold">$149</span>
                  </p>
                  <Link href={LINK_2} target={"_blank"}>
                    <Button className="mt-10" inverted>Обрати тариф</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto dark:text-black">
            <h2 className="text-2xl md:text-4xl mb-10 font-extrabold uppercase">
              Відгуки та кейси<br />
              студентів{" "}
              <span style={{ color: "#A699FF" }} className="pr-3">
              Лани
            </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4 grid-flow-row auto-rows-max">
              <article className="rounded-3xl auto-rows-min text-xs flex flex-col overflow-hidden">
                <Video1 />
              </article>
              <article className="rounded-3xl auto-rows-min text-xs flex flex-col overflow-hidden">
                <Video2 />
              </article>
              <article className="rounded-3xl auto-rows-min text-xs flex flex-col overflow-hidden">
                <Video3 />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={YraGlebov} alt={""} />
                  <h3 className="text-lg font-bold">Yra Glebov</h3>
                </div>
                <p>Лана, сьогодні ми завершили навчання з написання UserStory.</p>
                <p>
                  Як на мене. то це були одні з найкращих майстер-класів які ми
                  проходили за вже проведений час навчання (але я впевнений, що
                  попереду буде ще багато справді корисних вправ).
                </p>
                <p>
                  В будь-якому навчанні я ціную: професійність викладача,
                  можливість практичного застосування отриманих знань, можливість
                  отримати відповіді на питання в режимі «тут і зараз».
                </p>
                <p>
                  І кожну з цих властивостей я відчув продовж проведення лекції: я
                  насправді відчував твоє експертне знання, кожен зі студентів мав
                  нагоду відпрацювати на практиці прийоми формування UserStory, а
                  якщо у когось виникало будь-яке питання - то ти надавала
                  вичерпну відповідь на нього.
                </p>
                <p>Як результат - ми спільними зусиллями склали</p>
                <p>
                  UserStory, яке завтра відправиться до розробників додатка
                  Wispence, і через короткий проміжок часу нова фіча &quot;здобуде
                  життя&quot; в фітнес додатку. Чекаю нових тем! Чекаю нових
                  практичних задач!
                </p>
                <p>Чекаю змістовних зустрічей!</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={YuliyaLisenko} alt={"Юлія Лисенко"} />
                  <h3 className="text-lg font-bold">Юлія Лисенко</h3>
                </div>
                <p>Практична Лекція по UserStory з тобою, Лана - це щось!!</p>
                <p>
                  Покроково, у реальному часі, на реальному завданні. Враховуючи
                  яке значення має для продукта вміння писати UserStory, саме
                  такий підхід допоможе розібратися, навчитися і почати
                  практикувати!
                </p>
                <p>Дякую за знання та натхнення</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={IrynkaKhalus} alt={"Irynka Khalus"} />
                  <h3 className="text-lg font-bold">Irynka Khalus</h3>
                </div>
                <p>
                  Лана, хочу сказати велике дякую за мега цікаву консультацію, де
                  Ви надали більш ніж вичерпні відповіді на кожне запитання.
                </p>
                <p>
                  Особлива вдячність за Вашу чесність і обʼєктивність, що Ви
                  розповідаєте реалії роботи в ІТ та того скільки потрібно
                  докласти зусиль, щоб туди ввійти.
                </p>
                <p>
                  Також, спасибі за мотивуючі історії Ваших колег, які і справді
                  надихають і показують, що все можливо, якщо докласти трохи
                  більше зусиль.
                </p>
                <p>
                  Також, хочу побажати Вам ще більшого розвитку, цікавих проєктів
                  та багато студентів, з якими Ви зможете ділитись своїми
                  навичками.
                </p>
                <p>
                  Слідкую за Вашим блогом і часто вражена, як мама двох маленьких
                  дітей знаходить час на те, щоб працювати і навчати інших.
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={AnastasiyaMelnik} alt={"Анастасія Мельник"} />
                  <h3 className="text-lg font-bold">Анастасія Мельник</h3>
                </div>
                <p>
                  Хочу дуже подякувати за такий крутий курс, фішка якого
                  досвідчений продукт менеджер з реальним проектом! Матеріал, який
                  був представлений на курсі, був добре структурований і чіткий.
                  Він дозволяв зрозуміти ключові концепції та методики,
                  пов&lsquo;язані з проджект та продукт менеджментом. Кожен урок
                  мав чітку мету і побудований логічно, що допомагало легше
                  засвоювати інформацію. Практичні завдання та проект, які ми
                  виконували під час курсу, були дуже цінними і корисними. Вони
                  давали нам можливість застосовувати отримані знання на практиці.
                  І мені настільки сподобалося аналізувати різні проекти та
                  придумувати гіпотези, що придумала маленький start-up)
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Mariya} alt={"Анастасія Мельник"} />
                  <h3 className="text-lg font-bold">Марія</h3>
                </div>
                <p>
                  Навчання сподобалось тим що було достатньо часу на виконання
                  завдань, була можливість особисто задати питання, також у нашій
                  групі чудові колеги в яких можна було також запитати усе що було
                  незрозуміло. Закріпила усі необхідні знання одразу на практиці
                  це дуже великий плюс. Єдине чого не вистачало це як я написала
                  вище це фідбеку по виконаних завданнях та дуже шкода що мій
                  проект ще не реалізовано. Усім іншим задоволена: навчання було
                  цікавим, доступним та зрозумілим, дуже дякую Лані за такий курс
                  надіюсь зможу отримати свій перший офер в цій сфері☺️
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2 ">
                  <Image
                      src={Pavel}
                      alt={"Pavel"}
                      style={{ width: 60, height: 60 }}
                  />
                  <h3 className="text-lg font-bold">Pavel</h3>
                </div>
                <p>
                  Фічі фічами, а без івентів буде складно створити справді
                  функціональний продукт, який задовільнить вибагливих
                  користувачів.
                </p>
                <p>
                  Тож сьогодні, ми пройшли одну з , важливіших тем для справжнього
                  product manager. Після майстер-класу кожен студент розуміє як
                  підготувати завдання для розробника на створення івентів, як
                  структуровано скласти список існуючих авентів і яким чином
                  відслідковувати зміни кожного з івентів!
                </p>
                <p>
                  Найближчим часом, при виконанні домашнього завдання студенти
                  закріплять ці знання на практиці.
                </p>
                <p>
                  А коли почнуть використовувати ці навички в роботі РМ, то
                  збережуть час і затрати на розробку, підвисять вдоволенність
                  користувачів та зроблять кожний свій проект максимально
                  ефективним!
                </p>
                <p>Дякую за черговий урок! Як завжди:</p>
                <ul>
                  <li> доступно доводиш інформацію</li>
                  <li>розказуєш тільки про головне</li>
                  <li>
                    аргументуєш необхідність цих знань з точки зору практичного
                    досвіду використання!
                  </li>
                </ul>
                <p>Ще одна сходинка до знань, яку ми подолали разом!</p>
                <Image src={hart} alt={""} className="mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Yuliya} alt={"Юлія"} />
                  <h3 className="text-lg font-bold">Юлія</h3>
                </div>
                <p>
                  Хочу тебе привітати із всіма класними змінами в твоєму житті!
                  Повернення додому, студія, а ще - з суперовим залученням
                  зацікавлених людей до твого завтрашнього вебінару!! Я теж хочу
                  приєднатись) розумію, що для мене,як вже для твоєї учениці буде
                  багато чого відомого, але твоя менторська програма мене так
                  надихає!! Від всього серця кажу!
                </p>
                <p>
                  Я вже по-іншому дивлюсь на всі додатки, стала стабільно
                  передивлятись все нові й нові, щоб бачити як хто придумав, якісь
                  цікаві рішення вже просто бачу!
                </p>
                <p>Тож, вітаю тебе і дякую)</p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image
                      src={LinaKondratiuk}
                      alt={"Lina Kondratiuk"}
                      style={{ width: 60, height: 60 }}
                  />
                  <h3 className="text-lg font-bold">Lina Kondratiuk</h3>
                </div>
                <p>
                  Я дуже радію, що вирішила долучитися до цього курсу та стати
                  студенткою Лани! Багато факторів співпало: я достатньо часу
                  замислювалась стати світчером та почати шукати роботу у ІТ, і
                  тут побачила сторінку Лани, де мене &ldquo;запросили&ldquo;
                  спробувати і я вирішила спробувати! Для мене важливим було те,
                  що викладач - практикуючий РМ та обіцяний досвід роботи на
                  реальних реалізаціях діючого проекту, як стажування. Все вийшло
                  якнайкраще! Лекції невеликі, але розкривають теми повністю.
                  Немає води та зайвої інформації: все по суті. Q&A сесії, на яких
                  Лана ще більше розкривала теми та показувала багато реальних
                  прикладів з реальної роботи РМ менеджера. Записи лекцій та сесій
                  завжди під рукою і ти можеш повернутися до них, щоб щось згадати
                  чи розкрити для себе. Це допомагає, як у виконанні ДЗ, так і в
                  роботі над проєктом. Практичні майстер класи - це взагалі,
                  круть! Покроково, у реальному часі, на реальному завданні. А вже
                  зовсім згодом, я бачу цю фічу у додатку!) Лана завжди на
                  зв&lsquo;язку, готова допомогти та відповісти на питання,
                  надихає своїм прикладом, ставленням до роботи та до студентів!
                  Дякую за цей досвід! Далі буде..
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={OlgaLazebnikova} alt={"Ольга Лазебникова"} />
                  <h3 className="text-lg font-bold">Ольга Лазебникова</h3>
                </div>
                <p>
                  После курса у меня остались только положительные впечатления и
                  эмоции. Я очень рада что решилась пойти к Лане на курс. Ведь за
                  4 месяца я не только освоила 2 профессии, а ещё и имела
                  возможность отработать свои знания на практике. В том числе на
                  проект по реализации нового функционала в приложении. Эта задача
                  для меня была самой увлекательной из всех и я очень рада что
                  наши с Ланой представления о реализации нового функционала
                  совпали. Я очень благодарна за возможность поработать в таком
                  проекте и за то, что теперь этот проект я могу использовать в
                  своём портфолио. Я желаю Лане успехов, как на работе, так и в
                  дальнейшем обучении студентов новых потоков &ldquo;Продукт и
                  Проджект менеджер&ldquo;
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={Sergij} alt={"Сергій"} />
                  <h3 className="text-lg font-bold">Сергій</h3>
                </div>
                <p>
                  Привіт, дякую тобі за можливість пройти стажування в вашій
                  компанії та практичні навички, які я придбав! Ти подаєш дуже
                  цікаво і живо інформацію. Успіхів тобі і твоїй компанії, щастя
                  та безпеки близьким та рідним!)
                </p>
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={OlhovskayaDarya} alt={"Ольховская Дарья"} />
                  <h3 className="text-lg font-bold">Ольховская Дарья</h3>
                </div>
                <p>
                  Я в восторге от знаний которые я приобрела и такого человека как
                  Лана! Она успевает все! и я брала с нее пример)) мы с ней
                  немного схожи) Спасибо ей за немного отодвинутую ширму IT!
                  Теперь я знаю чего хочу и что мне нужно) а самое главное - как
                  нужно делать и как ненужно)))Я полностью довольна курсом и буду
                  продолжать следить за твоей страничкой в инстаграмме)))
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
              <article className="bg-white p-3 rounded-3xl auto-rows-min text-xs flex flex-col">
                <div className="flex gap-5 items-center mb-2">
                  <Image src={MariyaPolonskaya} alt={"Mariya Polonskaya"} />
                  <h3 className="text-lg font-bold">Mariya Polonskaya</h3>
                </div>
                <p>
                  Ось наприклад, один із нас отримав офер, тому що гарно навчався
                </p>
                <p>
                  О! Вітаю!!! Це дійсно круто! І дякую Лані особисто за навчання і
                  менторство!
                </p>
                <Image src={hart} alt={""} className=" mt-auto" />
              </article>
            </div>
          </section>
          {/*<section className="md:flex p-4 md:p-20 bg-white rounded-3xl flex-wrap lg:flex-nowrap lg:items-end gap-20 max-w-7xl m-auto dark:text-black">*/}
          {/*  <div className="md:basis-4/6">*/}
          {/*    <h2 className="text-3xl md:text-5xl mb-10 pr-10 font-extrabold uppercase">*/}
          {/*      Розтермінування <br />*/}
          {/*      від{" "}*/}
          {/*      <span style={{ color: "#A699FF" }} className="pr-3 italic">*/}
          {/*        W&U*/}
          {/*      </span>*/}
          {/*    </h2>*/}
          {/*    <p>*/}
          {/*      Ви можете оформити розстрочку, яку надає компанія Wispence від*/}
          {/*      себе, за деталями пишіть у телеграм{" "}*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="md:basis-2/6">*/}
          {/*    <Link href="https://t.me/lana_sapizhuk">*/}
          {/*      <Button inverted className="w-full mt-20 md:mt-0">*/}
          {/*        Написати*/}
          {/*      </Button>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</section>*/}
        </main>
        <footer className={"p-7 text-center bg-label"}>
          BM University © all right reserved
        </footer>
      </>
  );
}
