import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import CountDown from "@/components/CountDown";
import {Carousel} from "../components/Carousel/Carousel";
import pmLanaImage from "@/assets/PM-Lana.png";
import Danone from "@/assets/Danone.png";
import ActiveChat from "@/assets/ActiveChat.png";
import ABLnBev from "@/assets/ABLnBev.png";
import Wispence from "@/assets/Wispence.png";
import student from "@/assets/student.png";
import swicher from "@/assets/swicher.png";
import remoute from "@/assets/remoute.png";
import product from "@/assets/product.png";
import statistics from "@/assets/statistics.png";
import mobile from "@/assets/mobile.png";
import education from "@/assets/education.png";
import laptop from "@/assets/laptop.png";
import books from "@/assets/books.png";
import support from "@/assets/support.png";
import sertificate from "@/assets/sertificate.png";
import bonus from "@/assets/bonus.png";
import reviews1 from "@/assets/IMG_3242.png";
import reviews2 from "@/assets/IMG_3243.png";
import reviews3 from "@/assets/IMG_3244.png";
import reviews4 from "@/assets/IMG_3245.png";
import reviews5 from "@/assets/IMG_3246.png";
import reviews6 from "@/assets/IMG_3247.png";
import k11 from "@/assets/k11.png";
import k12 from "@/assets/k12.png";
import k21 from "@/assets/k21.png";
import k22 from "@/assets/k22.png";
import k31 from "@/assets/k31.png";
import k32 from "@/assets/k32.png";
import k41 from "@/assets/k41.png";
import k42 from "@/assets/k42.png";
import k51 from "@/assets/k41.png";
import k52 from "@/assets/k42.png";
// import AnastasiyaMelnik from "@/assets/AnastasiyaMelnik.png";
// import Mariya from "@/assets/Mariya.png";
// import MariyaPolonskaya from "@/assets/MariyaPolonskaya.png";
// import OlgaLazebnikova from "@/assets/OlgaLazebnikova.png";
// import OlhovskayaDarya from "@/assets/OlhovskayaDarya.png";
// import LinaKondratiuk from "@/assets/LinaKondratiuk.png";
// import Pavel from "@/assets/P.png";
// import Sergij from "@/assets/Sergij.png";
// import YraGlebov from "@/assets/YraGlebov.png";
// import Yuliya from "@/assets/Yuliya.png";
// import YuliyaLisenko from "@/assets/YuliyaLisenko.png";
import icon1 from "@/assets/icon_1.png";
import icon2 from "@/assets/icon_2.png";
import icon3 from "@/assets/icon_3.png";
import icon4 from "@/assets/icon_4.png";
import icon5 from "@/assets/icon_5.png";
// import hart from "@/assets/hart.png";

import Video1 from "@/components/videos/Video1";
import Video2 from "@/components/videos/Video2";
import Video3 from "@/components/videos/Video3";

export default function Home() {
  return (
      <>
        <main className="p-5 md:p-24 md:pt-0 m-auto">
          <header className="flex flex-col justify-center items-center my-5 md:my-10 max-w-7xl m-auto">
            <h1 className="text-3xl font-bold mb-2">
              by Lana & Be Better
            </h1>
            <p className={"text-xl text-center"}>Платформа для розвитку в ІТ та&nbsp;Digital</p>
          </header>
          <section className="md:flex md:justify-between md:gap-20 mb-20 md:mb-36 max-w-7xl m-auto">
            <div className="md:basis-3/6 grow-1 text-center md:text-left mb-5">
            <span className="text-sm px-4 py-2 normal-case font-light rounded-md bg-label text-xl font-bold text-default">
              Старт 14 травня 2024
              </span>
              <h2 className="text-2xl md:text-2xl mt-5 mb-10">
                Онлайн курс
                <br/>
                <span className="font-extrabold uppercase text-default">
                  Strong IT Product&nbsp;&&nbsp;Project Manager
                </span><br/>
                від Лани Сапіжук
              </h2>
              <p className="mb-5 dark:text-black md:pr-30">
                <b>
                  Опануй відразу 2 найзатребуваніші нетехнічні ІТ професії
                </b> та увійди в сферу уже в 2024 р.
              </p>
              <p className="mb-5 max-w-lg">
                <span className="text-default">*</span>Тривалість навчання - <b>3 місяці</b>
              </p>
              <Link href="#pay">
                <Button inverted className="w-full mb-5 md:mb-0 md:w-auto">
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
              <h2 className="text-3xl md:text-3xl mt-5 font-extrabold uppercase text-center md:text-left">
                Хто такий
                <br />
                <b className="text-default font-bold">Product & Project ManageR</b>
              </h2>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto relative">
            <div className="md:flex md:justify-between md:gap-10">
              <div className="md:basis-7/12 flex-initial grow-0 align-bottom dark:text-black">
                <h2 className="text-3xl md:text-4xl mb-10 font-extrabold uppercase">
                  Авторка курсу
                  <br />
                  <b className="uppercase font-bold text-default">
                    LANA SAPIZHUK
                  </b>
                </h2>
                <ul className="mb-5 list-disc list-inside text-default">
                  <li><span className={"text-black"}>Навчила більше <b>110 людей ІТ</b> менеджменту, отримала багато позитивних відгуків, а також кейси працевлаштування студентів🔥</span></li>
                  <li><span className={"text-black"}>Заснувала платформу для розвитку в ІТ та Digital - <b>Be Better</b> by Lana </span></li>
                  <li><span className={"text-black"}><b>8 р. в ІТ як PM</b>, працювала з відомими брендами, блогерами мільйонниками</span></li>
                  <li><span className={"text-black"}>Запустила фітнес платформу (сайт та додаток) <b>з 0 до 250к реєстрацій</b></span></li>
                  <li><span className={"text-black"}>Виростила експертний ІТ блог в IG <b>до 7к підписників</b></span></li>
                </ul>
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
            <div className="md:w-4/12 md:max-w-md m:h-full md:absolute md:bottom-[137px] md:right-0 md:z-20 md:pr-10">
              <a href="https://www.instagram.com/lana_sapizhuk/" target={"_blank"}>
                <Image src={pmLanaImage} alt="Lana" className={"w-full"} />
              </a>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto">
            <div className="align-bottom dark:text-black">
              <div className="md:flex mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl mb-5 font-bold uppercase text-default basis-1/2">
                  Для кого підійде <br/>
                  навчання?
                </h2>
                <p className="basis-1/3">Опануйт найпопулярнішу нетехнічну онлайн професію  в ІТ для збільшення заробітку, реалізації свого потенціалу та здійснення своїх мрій</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={student} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10 min-h-[3em] md:min-h-0">Для новачків / студентів / свічерів</h3>
                  </div>
                  <p>
                    Хочеш освоїти одну з найбільш  затребуваних нетехнічних ІТ-професій - Product&Project Manager та працювати віддалено з будь-якої точки світу та отримувати дохід в $
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={swicher} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10 min-h-[3em] md:min-h-0">Для тих, хто в пошуку себе або хоче ввійти в ІТ</h3>
                  </div>
                  <p>
                    Знаходитесь в пошуку себе та хочете обрати перспективну професію, яка буде приносити хорощий дохід, дозволить постійно розвиватися та рости
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={remoute} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10 min-h-[3em] md:min-h-0">Хто хоче працюватии віддалено</h3>
                  </div>
                  <p>
                    Онлайн професії знаходяться в ТОПі, у наш час не потрібно вчитися по 10 років, щоб отримати роботу мрії. Зараз достатньо пару місяців, щоб освоїти затребувану онлайн професію та почати заробляти
                  </p>
                </div>
                <div className="grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={product} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10 min-h-[3em] md:min-h-0">Хоче створити та продавати свій ІТ продукт</h3>
                  </div>
                  <p>
                    Зі знаннями які я даю на навчанні ти зможеш створити свій ІТ продукт та почати заробляти на ньому. Або ж заснувати власну  ІТ компанію і брати замовлення на розробку сайтів, додатків тощо.
                  </p>
                </div>
              </div>
              <Link href="#pay">
                <Button className="mt-10 w-full md:w-auto" inverted >Взяти участь</Button>
              </Link>
            </div>
          </section>
          <section className="max-w-7xl m-auto dark:text-black mb-10 md:md-20">
            <h2 className="text-3xl md:text-4xl mb-5 font-extrabold uppercase">
              Твої <span className={"text-default"}>результати</span><br/> після навчання
            </h2>
           <ol className={"list-inside text-xl md:flex md:gap-10"}>
             <li>
               <h3 className={"inline-block text-2xl text-default font-bold"}>Теорія і практика</h3>
              <div className={"max-w-lg"}>
                <p className={"font-bold"}>
                  Отримаєш теоретичні і практичні знання з продукт менеджменту
                </p>
                <ul className={"list-disc list-inside text-default text-2xl"}>
                  <li><span className={"text-black text-xl"}>Зрозумієш хто такий IT Product&nbsp;&&nbsp;Project менеджер та які задачі виконує</span></li>
                  <li><span className={"text-black text-xl"}>Опануєш всі необхідні знання, фреймворки та інструменти, щоб отримати Job Offer та впевнено відчувати себе на роботі</span></li>
                  <li><span className={"text-black text-xl"}>Закріпиш знання практикою та отримаєш кейс у портфоліо</span></li>
                  <li><span className={"text-black text-xl"}>Ти зможеш працювати класичним Project менеджером, або Product менеджером, чи піти на позицію де обовʼязки є змішаними - а це насправді найчастіше трапляється. Саме тому я і обʼєднала ці 2 напрямки в одному курсі 🔥</span></li>
                  <li>
                    <span className={"text-black text-xl"}>Можливість рости в доході до 5-10к$ 💸 дивися зріз по зп з DOU👇</span>
                    <div className={"mt-5"}>
                      <Image src={statistics} alt={"DOU"}/>
                    </div>
                  </li>
                </ul>
              </div>
             </li>
             <li>
               <h3 className={"inline-block text-2xl text-default font-bold"}>Реалізація власного пет проєкту</h3>
               <div className={"max-w-lg"}>
                 <p className={"font-bold"}>
                   Здобудеш перший реальний практичний досвід та кейс у портфоліо
                 </p>
                 <ul className={"list-disc list-inside text-default text-2xl"}>
                   <li><span className={"text-black text-xl"}>Відпрацюєш усі отримані знання на практиці</span></li>
                   <li><span className={"text-black text-xl"}>Працюватимеш над реалізацією власного пет проєкту </span></li>
                   <li><span className={"text-black text-xl"}>Отримаєш перший кейс, який допоможе тобі з пошуком роботи</span></li>
                 </ul>
               </div>
             </li>
             <li>
               <h3 className={"inline-block text-2xl text-default font-bold"}>План пошуку роботи</h3>
               <div className={"max-w-lg"}>
                 <p className={"font-bold"}>
                   Матимеш план пошуку першої роботи після завершення навчання, сертифікат про проходження навчанння, а також рекомендацію в LinkedIn від Лани
                 </p>
                 <ul className={"list-disc list-inside text-default text-2xl"}>
                   <li><span className={"text-black text-xl"}>Отримаєш покроковий план дій пошуку роботи,  файл з  найпопулярнішими запитаннями на співбесідах, рекомендації щодо проходження співбесід</span></li>
                   <li><span className={"text-black text-xl"}>Отримаєш шаблон для сторення конкурентного резюме по всім правилам ринку</span></li>
                   <li><span className={"text-black text-xl"}>Отримаєш посилання на платформи для пошуку роботи в ІТ</span></li>
                 </ul>
               </div>
             </li>
           </ol>
          </section>
          <section className="max-w-7xl m-auto dark:text-black mb-10 md:mb-20">
            <h2 className="text-3xl mb-10 font-extrabold uppercase">
              Програма
            </h2>
            <div className={"mb-14 max-w-2xl"}>
             <div className={"flex gap-2 mb-2"}>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md bg-label text-xl font-bold text-default">
                  Модуль 1
                </span>
               <span className="text-sm px-4 py-2 normal-case font-light rounded-md text-xl font-bold text-default border-2 border-default">
                  11 лекцій
                </span>
             </div>
              <div>
                <h3 className={"uppercase text-2xl font-extrabold mb-2"}>PRODUCT менеджмент</h3>
                <p className={"max-w-2xl text-lg"}>В цьому модулі ми розберемо хто такий продакт менеджер, що таке продукт. Опануємо знання та інструменти, якими має володіти продакт, щоб створити дійсно успішний продукт.</p>
                <ol className={"list-inside list-decimal"}>
                  <li>
                    Вхід у професію Product manager,  ролі продакта у різних організаціях - від продуктової компанії до сфери EDtech
                  </li>
                  <li>
                    Що таке продукт, типи продуктів, життєвий цикл продукту в залежності від їх типу
                  </li>
                  <li>
                    Типи продуктових фіч, визначення MVP за допомогою інструментів Feature hamburger та Impact mapping
                  </li>
                  <li>
                    Основні методи монетизації продукту
                  </li>
                  <li>
                    Пошук product-market fit
                  </li>
                  <li>
                    Вдосконалення цінності та потрібності продукту
                  </li>
                  <li>
                    Аналіз ринку та конкуретів, матриця для аналізу
                  </li>
                  <li>
                    Цільова аудиторія. Фреймворк Persona
                  </li>
                  <li>
                    Фреймворк Custdev - один із найважливіших методів дослідження
                  </li>
                  <li>
                    Фреймворк GTBD - для визначення мотивів  та логіки відповідних дій клієнта
                  </li>
                  <li>
                    Команди продажу й підтримки: як отримувати інсайти від тих, хто спілкується з клієнтами щодня
                  </li>
                  <li>
                    Де брати ідеї для створення нових фіч в продукті.
                  </li>
                  <li>
                    Дизайн фіч: проєктування рішення, яке насправді розв’яже проблему
                  </li>
                  <li>
                    Як писати User Stories, щоб було зрозуміло всім!
                  </li>
                  <li>
                    Роадмеп та беклог продукту
                  </li>
                  <li>
                    Розбір інструменту Figma - для створення прототипів та схем, які потрібні в роботі продакта.
                  </li>
                  <li>
                    Що таке Customer Journey Map - шлях клієнта. Побудова CJM в Figma.
                  </li>
                  <li>
                    А/B тестування - пошук найкращих рішень
                  </li>
                </ol>
              </div>
            </div>
            <div className={"mb-14 max-w-2xl"}>
              <div className={"flex gap-2 mb-2"}>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md bg-label text-xl font-bold text-default">
                  Модуль 2
                </span>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md text-xl font-bold text-default border-2 border-default">
                  5 лекцій
                </span>
              </div>
              <div>
                <h3 className={"uppercase text-2xl font-extrabold mb-2"}>Unit економіка & excel</h3>
                <p className={"max-w-2xl text-lg"}>
                  В цьому модулі ми розберемо основні продуктові метрики, які має відслідковувати продакт майже щодня, адже це основа для подальшого росту та розвитку продукта.
                </p>
                <ol className={"list-inside list-decimal"}>
                  <li>
                    Інструменти аналітики: Mixpanel, Amplitude, Google Analytics. Аналітичні івенти.
                  </li>
                  <li>
                    Основні  метрики - метрики активації та утримання користувачів, метрики росту продукту, маркетингові метрики, ключові метрики монетизації,
                  </li>
                  <li>
                    Продуктовий дєшборд. Аналіз ефективності юніт економіки
                  </li>
                  <li>
                    Покращення юніт економіки
                  </li>
                  <li>
                    Excel для PM, розрахунки формули, зведені таблиці.
                  </li>
                </ol>
              </div>
            </div>
            <div className={"mb-14 max-w-2xl"}>
              <div className={"flex gap-2 mb-2"}>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md bg-label text-xl font-bold text-default">
                  Модуль 3
                </span>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md text-xl font-bold text-default border-2 border-default">
                  8 лекцій
                </span>
              </div>
              <div>
                <h3 className={"uppercase text-2xl font-extrabold mb-2"}>Керування продуктом & управління проєктами </h3>
                <p className={"max-w-2xl text-lg"}>
                  В цьому модулі ми навчимося як керувати продуктом та проєктами: взаємодіяти з командою, та методології управління.
                </p>
                <p>
                  А також розберемось з технічними моментами, які необхідно знати при стоворенні сайтів та додатків та при взаємодії з розробниками.
                </p>
                <ol className={"list-inside list-decimal"}>
                  <li>
                    Як бути ефективним лідером команди з дизайну та розробки продукту. Зворотній звʼязок та вирішення конфліктів.
                  </li>
                  <li>
                    Методи оцінювання задач з командою, пріоритизація задач із використанням RICE framework
                  </li>
                  <li>
                    Agile фреймворки. Scrum, Kanban, Scramban, Waterfall.
                  </li>
                  <li>
                    Сервіси для Управління - Jira, Trello, Calendar, Slack, Asana, Monday, Hubstaff
                  </li>
                  <li>
                    Управління часом, ресурсами та ризиками
                  </li>
                  <li>
                    Технічній сленг, або як бути на ти з розробниками
                  </li>
                  <li>
                    Ключові технічні моменти розробки мобільних застосунків
                  </li>
                  <li>
                    Ключові технічні моменти розробки мобільних застосунків
                  </li>
                </ol>
              </div>
            </div>
            <div className={"mb-14 max-w-2xl"}>
              <div className={"flex gap-2 mb-2"}>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md bg-label text-xl font-bold text-default">
                  Модуль 4
                </span>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md text-xl font-bold text-default border-2 border-default">
                  6 лекцій
                </span>
              </div>
              <div>
                <h3 className={"uppercase text-2xl font-extrabold mb-2"}>Основи продуктового маркетингу</h3>
                <p className={"max-w-2xl text-lg"}>
                  Продуктовий маркетинг і чому кожен продакт-менеджер має бути маркетологом
                </p>
                <ol className={"list-inside list-decimal"}>
                  <li>
                    Основи продуктового  маркетингу
                  </li>
                  <li>
                    Позиціонування продукту на ринку
                  </li>
                  <li>
                    Маркетингова воронка
                  </li>
                  <li>
                    Залучення клієнта, активація, монетизація, утримання, зацікавлення, віральність.
                  </li>
                  <li>
                    Самі популярні воронки продажів в 2024 році
                  </li>
                  <li>
                    Маркетинг дєшборд. Аналіз ефективного маркетингу
                  </li>
                </ol>
              </div>
            </div>
            <div className={"mb-14 max-w-2xl"}>
              <div className={"flex gap-2 mb-2"}>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md bg-label text-xl font-bold text-default">
                  Модуль 5
                </span>
                <span className="text-sm px-4 py-2 normal-case font-light rounded-md text-xl font-bold text-default border-2 border-default">
                  6 лекцій
                </span>
              </div>
              <div>
                <h3 className={"uppercase text-2xl font-extrabold mb-2"}>
                  AI для PM
                </h3>
                <p className={"max-w-2xl text-lg"}>
                  Навчимося як писати ТЗ за допомогою АІ, робити презентації, оцифровуваати мітинги
                </p>
                <ol className={"list-inside list-decimal"}>
                  <li>
                    Знайомство із сервісами AI
                  </li>
                  <li>
                    Техніки роботи із промптами
                  </li>
                  <li>
                    Робота з сервісами AI
                  </li>
                  <li>
                    Виконання завдань managers & marketing
                  </li>
                  <li>
                    Розрахунок потенційної аудиторії продукту за допомогою інструментів AI
                  </li>
                  <li>
                    Генерація контенту за допомогою AI
                  </li>
                </ol>
              </div>
            </div>
            <Link href="#pay">
              <Button className="w-full md:w-auto" inverted>Взяти участь</Button>
            </Link>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto dark:text-black">
            <h2 className="text-2xl md:text-4xl mb-10 font-extrabold uppercase text-default">
              Де ти можеш працювати <br />
              після завершення навчання?
            </h2>
            <div className="flex flex-wrap">
              <div className="lg:basis-10/12 flex flex-wrap gap-10 align-baseline mb-10">
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={product} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10">Стартап</h3>
                  </div>
                  <p>
                    Можна почати працювати в  стартапі. <b>Зараз багато блогерів та медійних людей в Україні починають створювати свої ІТ продукти - Даша Астафʼєва, Даша Квіткова, Аніта Соловей та інші.</b>  Або створити свій ІТ продукт,  Digital агенцію чи WEB студію.
                  </p>
                </div>
                <div className="md:basis-5/12  grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={mobile} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10">Продуктова ІТ компанія</h3>
                  </div>
                  <p>
                    Можна потрапити на роботу в продуктову компанію та працювати з ІТ продуктом - наприклад <b>в банківський додаток MONO, чи в фітнес додаток Better Me</b>
                  </p>
                </div>
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={swicher} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10">Маркетинг агенство | Дизайн студія | WEB студія</h3>
                  </div>
                  <p>
                    Не обовʼязково відразу іти в складний ІТ продукт, можна спокійно почати з чогось простішого - менеджерити дизайнерів, таргетологів, чи smm в маркетингових агенствах чи Дизайн & WEB студіях
                  </p>
                </div>
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5">
                  <div className={'flex mb-3 relative'}>
                    <Image src={education} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10">Сфера освіти - EDtech</h3>
                  </div>
                  <p>
                    Можна почати працювати з освітніми проєктами, школами чи експертами які створюють свої освітні продукти та потребують допомоги в організації процесів його створення та маштабування
                  </p>
                </div>
                <div className="md:basis-5/12 grow-1 bg-white rounded-3xl p-5 m-auto">
                  <div className={'flex mb-3 relative'}>
                    <Image src={laptop} alt={"Для новачків / студентів / свічерів"} className={"absolute left-[-35px] top-[-15px] md:top-[-35px]"}/>
                    <h3 className="font-bold pl-10">Аутсорсингова ІТ компанія</h3>
                  </div>
                  <p>
                    Можна менеджерити ІТ проєкти для іноземних замовників. В Україні є дуже багато крутих аутсорсингових ІТ компаній в які згодом можна потрапити - EРАM, GlobalLogic, SoftServe, Luxoft, Sigma Software та багато інших, якім необхідні такі спеціалісти як Product&Project менеджери
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-5xl m-auto" id="pay">
            <div className="p-7 bg-no-repeat bg-default text-white mb-10 md:mb-20 rounded-2xl max-w-5xl ml-auto mr-auto">
              <h3 className="text-xl md:text-3xl md:uppercase md:text-white mb-3 text-center">
                РЕЄСТРУЙСЯ <br/>
                до навчання просто зараз
              </h3>
              <div className="text-center">
                <p className="md:uppercase text-xl mb-5">та отримай гарантовано 🎁 <br/> знижку 50%</p>
                <CountDown startDate={new Date("05-14-2024")} format={["days", "hours", "minutes", "seconds"]}/>
                <p>До старту навчання залишилось</p>
              </div>
            </div>
            <div className="gap-10 h-[630px] md:h-[600px] mb-24">
              <Carousel activeIndex={1} data={[
                <div key={"junior"}
                     className="px-7 py-4 rounded-3xl bg-white md:basis-1/2 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl uppercase font-bold text-default mb-2">Тариф “Junior”</h3>
                    <ul className={"mb-5 text-base"}>
                      <li className={"border-b-2 py-2 flex gap-3 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 1
                          </span>
                        <span>Product менеджмент</span>
                      </li>
                      <li className={"border-b-2 py-2 flex gap-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 2
                          </span>
                        <span>Unit Економіка</span>
                      </li>
                      <li className={"border-b-2 py-2 flex gap-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 3
                          </span>
                        <span>Керування продуктом & Управління проєктами</span>
                      </li>
                    </ul>
                    <ul className={"text-base leading-5"}>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={books} alt={"Домашні завдання"} className={"w-[20px] h-[20px]"}/>
                        <p>
                          <b>Домашні завдання</b>
                        </p>
                      </li>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={sertificate} alt={"Підтримка куратора"} className={"w-[20px] h-[20px]"}/><b>Cертифікат
                        про проходження навчання</b>
                      </li>
                    </ul>
                  </div>
                  <div className={"text-center"}>
                    <Link href={"https://forms.gle/gcL9jdQdczLtAxa99"} target={"_blank"}>
                      <Button inverted>Забронювати місце</Button>`
                    </Link>
                  </div>
                </div>,
                <div key={"senior"}
                     className="px-7 py-4 rounded-3xl bg-white md:basis-1/2 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl uppercase font-bold text-default mb-2">Тариф “Senior”</h3>
                    <ul className={"mb-5 text-base"}>
                      <li className={"border-b-2 py-2 flex gap-3 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 1
                          </span>
                        <span>Product менеджмент</span>
                      </li>
                      <li className={"border-b-2 py-2 flex gap-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 2
                          </span>
                        <span>Unit Економіка</span>
                      </li>
                      <li className={"border-b-2 py-2 flex gap-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 3
                          </span>
                        <span>Керування продуктом & Управління проєктами</span>
                      </li>
                      <li className={"border-b-2 py-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 4
                          </span>
                        {' '}
                        Продуктовий маркетинг
                      </li>
                      <li className={"border-b-2 py-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 5
                          </span>
                        {' '}
                        AI для PM
                      </li>
                    </ul>
                    <ul className={"text-base leading-5"}>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={books} alt={"Домашні завдання"} className={"w-[20px] h-[20px]"}/>
                        <p>
                          <b>Домашні завдання та підтримка куратора</b>
                        </p>
                      </li>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={support} alt={"Підтримка куратора"} className={"w-[20px] h-[20px]"}/>
                        <b>5 особстих Q/A сесій з Ланою</b>
                      </li>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={sertificate} alt={"Підтримка куратора"} className={"w-[20px] h-[20px]"}/><b>Cертифікат про проходження навчання та кейс у портфоліо</b>
                      </li>
                    </ul>
                  </div>
                  <div className={"text-center"}>
                    <Link href={"https://forms.gle/gcL9jdQdczLtAxa99"} target={"_blank"}>
                      <Button inverted>Забронювати місце</Button>`
                    </Link>
                  </div>
                </div>,
                <div key={"middle"}
                     className="px-5 py-4 rounded-3xl bg-white md:basis-1/2 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl uppercase font-bold text-default mb-2">Тариф “Middle”</h3>
                    <ul className={"mb-5 text-base"}>
                      <li className={"border-b-2 py-2 flex gap-3 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 1
                          </span>
                        <span>Product менеджмент</span>
                      </li>
                      <li className={"border-b-2 py-2 flex gap-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 2
                          </span>
                        <span>Unit Економіка</span>
                      </li>
                      <li className={"border-b-2 py-2 flex gap-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 3
                          </span>
                        <span>Керування продуктом & Управління проєктами</span>
                      </li>
                      <li className={"border-b-2 py-2 mb-0"}>
                          <span className="text-default font-bold whitespace-nowrap">
                            Модуль 4
                          </span>
                        {' '}
                        Продуктовий маркетинг
                      </li>
                    </ul>
                    <ul className={"text-base leading-5"}>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={books} alt={"Домашні завдання"} className={"w-[20px] h-[20px]"}/>
                        <p>
                          <b>Домашні завдання та підтримка куратора</b>
                        </p>
                      </li>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={support} alt={"Підтримка куратора"} className={"w-[20px] h-[20px]"}/>
                        <b>5 особистих Q/A сесій з Продактом Be Better</b>
                      </li>
                      <li className={"flex gap-2 items-center"}>
                        <Image src={sertificate} alt={"Підтримка куратора"} className={"w-[20px] h-[20px]"}/>
                        <b>Cертифікат про проходження навчання та кейс у портфоліо</b>
                      </li>
                    </ul>
                  </div>
                  <div className={"text-center"}>
                    <Link href={"https://forms.gle/gcL9jdQdczLtAxa99"} target={"_blank"}>
                      <Button inverted>Забронювати місце</Button>`
                    </Link>
                  </div>
                </div>
              ]}/>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto dark:text-black mb-20">
            <h2 className="text-2xl md:text-4xl max-w-2xl mb-10 font-extrabold uppercase">
              Відгуки студентів
              <span style={{color: "#A699FF"}} className="pr-3">
                {' Лани'}
            </span>
            </h2>
            <div className="h-[400px] md:h-[500px] max-w-3xl m-auto">
              <Carousel data={[
                <Image key={1} src={reviews1} alt={""}/>,
                <Image key={2} src={reviews2} alt={""}/>,
                <Image key={3} src={reviews3} alt={""}/>,
                <Image key={3} src={reviews4} alt={""}/>,
                <Image key={3} src={reviews5} alt={""}/>,
                <Image key={3} src={reviews6} alt={""}/>,
              ]}/>
            </div>
          </section>
          <section className="mb-10 md:mb-20 max-w-7xl m-auto dark:text-black mb-20">
            <h2 className="text-2xl md:text-4xl max-w-2xl mb-10 font-extrabold uppercase">
              Кейси працевлаштування студентів
              <span style={{color: "#A699FF"}} className="pr-3">
                {' Лани'}
            </span>
            </h2>
            <div className="h-[400px] md:h-[500px] max-w-3xl m-auto">
              <Carousel data={[
                <Image key={1} src={k11} alt={""}/>,
                <Image key={2} src={k12} alt={""}/>,
                <Image key={3} src={k21} alt={""}/>,
                <Image key={4} src={k22} alt={""}/>,
                <Image key={5} src={k31} alt={""}/>,
                <Image key={6} src={k32} alt={""}/>,
                <Image key={7} src={k41} alt={""}/>,
                <Image key={8} src={k42} alt={""}/>,
                <Image key={3} src={k51} alt={""}/>,
                <Image key={3} src={k52} alt={""}/>,
              ]}/>
            </div>
          </section>
        </main>
        <footer className={"p-7 text-center bg-label"}>
          BM University © all right reserved
        </footer>
      </>
  );
}
