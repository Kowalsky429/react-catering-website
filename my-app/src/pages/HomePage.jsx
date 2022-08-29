import { HashLink as Link } from 'react-router-hash-link';
import {
  header1,
  header2,
  header3,
  menu1,
  blog1,
  blog2,
  blog3,
  chef1,
  chef2,
  chef3,
  chef4,
  chef5,
} from '../images/index';
import style from '../styles/style';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  return (
    <article className="container w-full max-w-[1180px] h-[100vh] font-kalam">
      <header>
        <h1 className={`${style.logo}`}>Food & Smile</h1>
        <nav className={`${style.nav}`}>
          <Link to="/#home" className="hover:text-light">
            Home
          </Link>
          <Link to="/#menu" className="hover:text-light">
            Menu
          </Link>
          <Link to="/#blog" className="hover:text-light">
            Blog
          </Link>
          <Link to="/#chefs" className="hover:text-light">
            Chefs
          </Link>
          <Link to="/#contact" className="hover:text-light">
            Contact
          </Link>
        </nav>
        <h2 className="text-grey text-2xl sm:text-3xl sm:leading-12 md:text-4xl lg:text-5xl lg:leading-16  md:leading-14 leading-10 max-w-[800px] mx-auto">
          The <span>best place</span> to spend a free time with couple of best
          friends with
          <span> delicious</span> dishes in beatifull nature park
        </h2>
        <div className="w-full mx-auto my-10 grid grid-cols-6 grid-rows-6 md:h-[800px] drop-shadow-lg md:gap-6 gap-4">
          <div className="w-full h-[150px] sm:h-[250px] md:h-[100%] relative col-span-6 row-span-3 md:col-span-6 md:row-span-3">
            <img
              src={header1}
              alt="image of the dish"
              className={`${style.image}`}
              loading="lazy"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[250px] md:h-[100%] relative col-span-3 row-span-3 md:col-span-2 md:row-span-3">
            <img
              src={header2}
              alt="image of the dish"
              className={`${style.image}`}
              loading="lazy"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[250px] md:h-[100%] relative col-span-3 row-span-3 last:md:col-span-4 md:row-span-2">
            <img
              src={header3}
              alt="image of the dish"
              className={`${style.image}`}
              loading="lazy"
            />
          </div>
        </div>
      </header>
      <section className="text-grey relative flex flex-col">
        <h3 className={`${style.h3}`}>Something about us...</h3>
        <p className={`${style.paragraph} max-w-[600px] mb-10`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac pharetra,
          enim tempor, quis posuere eu fusce. Dictumst a, sit aliquet tincidunt
          mauris. Quam purus sed tortor pretium in etiam egestas. Convallis
          tempor, volutpat pellentesque lorem ut tortor. Bibendum morbi nulla at
          senectus ante. Adipiscing integer non non quis odio. Sed dolor mauris,
          sed turpis hendrerit nunc, mattis viverra.
        </p>
        <h3 className={`${style.h3} self-end`}>What we offer...</h3>
        <p
          className={`${style.paragraph} max-w-[600px] mb-20 text-right self-end`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac pharetra,
          enim tempor, quis posuere eu fusce. Dictumst a, sit aliquet tincidunt
          mauris. Quam purus sed tortor pretium in etiam egestas. Convallis
          tempor, volutpat pellentesque lorem ut tortor. Bibendum morbi nulla at
          senectus ante. Adipiscing integer non non quis odio. Sed dolor mauris,
          sed turpis hendrerit nunc, mattis viverra.
        </p>
      </section>
      <section id="menu">
        <h2 className={`${style.title}`}>
          MENU
          <div className={`${style.titleDecoration}`} />
        </h2>
        <nav className={`${style.nav} max-w-[450px]`}>
          <Link to="/#home" className="hover:text-light">
            Normal
          </Link>
          <Link to="/#menu" className="hover:text-light">
            Vegan
          </Link>
          <Link to="/#blog" className="hover:text-light">
            Vegetarian
          </Link>
          <Link to="/#chefs" className="hover:text-light">
            Other
          </Link>
        </nav>
        <div className="text-grey sm:flex">
          <div className="w-full h-[150px] mb-8 drop-shadow-lg relative order-2 sm:h-[300px] sm:ml-5 lg:h-[500px] max-w-[600px]">
            <img src={menu1} className={`${style.image}`} loading="lazy" />
          </div>
          <div>
            <h3 className={`${style.h3} leading-8`}>
              Vegan ipsum dolor sit amet, consectetur adipiscing elit. {''}
              <span>
                Urna ornare nibh non at sed posuere elit imperdiet purus.
              </span>
            </h3>
            <p className={`${style.paragraph} mb-4`}>Recommended:</p>
            <p className={`${style.paragraph}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              viverra pharetra imperdiet ligula sed.
            </p>
            <button className={`${style.button}`}>Check the menu</button>
          </div>
        </div>
        <div className="w-full p-3 bg-grey text-white text-center rounded-md mb-20 lg:mb-60 md:mt-6">
          <p className={`${style.paragraph}`}>
            “Everything what we do is only with passion”
          </p>
        </div>
      </section>
      <section id="blog">
        <h2 className={`${style.title}`}>
          BLOG
          <div className={`${style.titleDecoration}`} />
        </h2>
        <nav className={`${style.nav} max-w-[350px]`}>
          <Link to="/#home" className="hover:text-light">
            All
          </Link>
          <Link to="/#menu" className="hover:text-light">
            Events
          </Link>
          <Link to="/#blog" className="hover:text-light">
            Promotions
          </Link>
        </nav>
        <div>
          <div className={`${style.blogCard}`}>
            <div className={`${style.blogCardCover}`} />
            <img
              src={blog1}
              className={`${style.image}`}
              loading="lazy"
              alt="event image"
            />
            <div
              className={`${style.paragraph} text-white absolute bottom-0 left-4 mb-4 z-10`}
            >
              <p>September 25 2022</p>
              <p>type: event</p>
              <button className="text-active underline">
                continue reading
              </button>
            </div>
          </div>
          <div className={`${style.blogCard}`}>
            <div className={`${style.blogCardCover}`} />
            <img
              src={blog2}
              className={`${style.image}`}
              loading="lazy"
              alt="event image"
            />
            <div
              className={`${style.paragraph} text-white absolute bottom-0 left-4 mb-4 z-10`}
            >
              <p>September 25 2022</p>
              <p>type: event</p>
              <button className="text-active underline">
                continue reading
              </button>
            </div>
          </div>
          <div className={`${style.blogCard}`}>
            <div className={`${style.blogCardCover}`} />
            <img
              src={blog3}
              className={`${style.image}`}
              loading="lazy"
              alt="event image"
            />
            <div
              className={`${style.paragraph} text-white absolute bottom-0 left-4 mb-4 z-10`}
            >
              <p>September 25 2022</p>
              <p>type: event</p>
              <button className="text-active underline">
                continue reading
              </button>
            </div>
          </div>
        </div>
        <button
          className={`${style.button} px-8 mx-auto block lg:px-14 mb-20 lg:mb-60`}
        >
          See more
        </button>
      </section>
      <section id="chefs">
        <h2 className={`${style.title}`}>
          CHEFS
          <div className={`${style.titleDecoration}`} />
        </h2>
        <p className={`${style.paragraph} max-w-[800px] mx-auto mb-6 md:mb-12`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tellus nec
          ultricies purus. Sit tortor sodales justo viverra at orci vitae amet
          amet.
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={`${style.swiperCard}`}>
              <div className={`${style.blogCardCover}`} />
              <img
                src={chef1}
                className={`${style.image}`}
                alt="chef portrait"
              />
              <p
                className={`${style.paragraph} absolute bottom-4 left-1/2 -translate-x-1/2 z-[10]`}
              >
                Anna De Veluci
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.swiperCard}`}>
              <div className={`${style.blogCardCover}`} />
              <img
                src={chef2}
                className={`${style.image}`}
                alt="chef portrait"
              />
              <p
                className={`${style.paragraph} absolute bottom-4 left-1/2 -translate-x-1/2 z-[10]`}
              >
                John Waters
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.swiperCard}`}>
              <div className={`${style.blogCardCover}`} />
              <img
                src={chef3}
                className={`${style.image}`}
                alt="chef portrait"
              />
              <p
                className={`${style.paragraph} absolute bottom-4 left-1/2 -translate-x-1/2 z-[10]`}
              >
                Diana Ubesal
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.swiperCard}`}>
              <div className={`${style.blogCardCover}`} />
              <img
                src={chef4}
                className={`${style.image}`}
                alt="chef portrait"
              />
              <p
                className={`${style.paragraph} absolute bottom-4 left-1/2 -translate-x-1/2 z-[10]`}
              >
                Peter Loren
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${style.swiperCard}`}>
              <div className={`${style.blogCardCover}`} />
              <img
                src={chef5}
                className={`${style.image}`}
                alt="chef portrait"
              />
              <p
                className={`${style.paragraph} absolute bottom-4 left-1/2 -translate-x-1/2 z-[10]`}
              >
                Victoria Welson
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="contact">
        <h2 className={`${style.title} mt-20 lg:mt-60`}>
          CONTACT
          <div
            className={`${style.titleDecoration} w-[80px] md:w-[100px] lg:w-[120px]`}
          />
        </h2>
      </section>
    </article>
  );
}

export default Home;
